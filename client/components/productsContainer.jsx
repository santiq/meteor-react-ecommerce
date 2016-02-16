ProductsContainer = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	    let data = {
	      currentUser: Meteor.user(),
	    };
	    
	    let handle = Meteor.subscribe('products','food');
	    if (handle.ready()) {
	      data.productList = Products.find({},{fields:{_id:1},sort:{createdAt:-1}}).fetch();
	    }

	    return data;
  	},

	render(){
		if(this.data.productList && this.data.productList.length > 0 ){
			return ( <div> {
				this.data.productList.map ( (product, index)=>{
					return <Product key={index} id={product._id} />
				})	
			} </div>);
		}
		else
			return <div/>
		
	}

});

