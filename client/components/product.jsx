Product = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
	    let data = {
	      currentUser: Meteor.user(),
	    };
	    
	    let handle = Meteor.subscribe('product',this.props.id);
	    if (handle.ready()) {
	      data.product = Products.find({_id:this.props.id}).fetch()[0];
	    }

	    return data;
  	},

	render(){

		if(this.data.product){
			return (
				<div> 
					<div className="product-header">
						<p>	{`${this.data.product.title}   $`}
							<span>{this.data.product.price}</span>
						</p>
					</div>

					<div className="product-image-wrapper">
						<img src={this.data.product.coverImage} alt="product image"/>
					</div>

					<div className="product-description">
						<p>{this.data.product.description}</p>
					</div>
				</div>
			);
		}
		else
			return <div/>
		
	}

});