productUploader = React.createClass({

	handleImageUpload(){

	},

	handleProductUpload(e){
		e.preventDefault();
		
		let self = this;

		let title = this.title.value.trim();
		let description = this.description.value.trim();
		let category = 'food';
		let price = Number(this.price.value.trim());
		let coverImage = 'http://placehold.it/90x90';
		let images = ['http://placehold.it/90x90','http://placehold.it/90x90'];
		
		Meteor.call('addProduct',title,description,category,price,coverImage,images,function(err,res){
			if(err){
				return ToasterService.error(err);
			}
			ToasterService.success(res);
			self.resetForm();
		});
	},

	resetForm(e){
		if(e)
			e.preventDefault();

		this.title.value = '';
		this.description.value = '';
		this.category.value = '';
		this.price.value = '';
		this.image.value ='';

		
	},

	render(){
		return (

			<form className="form-horizontal">
				<fieldset>

				<legend>Add new product</legend>

	
				<div className="form-group">
				  <label className="col-md-4 control-label" htmlFor="textinput">Title</label>  
				  <div className="col-md-4">
				  <input ref={(r) => this.title = r} id="textinput" name="textinput" type="text" placeholder="Product name..." className="form-control input-md" required=""/>
				  <span className="help-block">maximun 140 characters</span>  
				  </div>
				</div>
				
				<div className="form-group">
				  <label className="col-md-4 control-label" htmlFor="textinput">Price</label>  
				  <div className="col-md-1">
				  <input ref={(r) => this.price = r} id="textinput" name="textinput" type="number" required min='0' placeholder="1.00" className="form-control input-md"/>
				  
				  </div>
				</div>
	
				<div className="form-group">
				  <label className="col-md-4 control-label" htmlFor="textarea">Description</label>
				  <div className="col-md-4">                     
				    <textarea ref={(r) => this.description = r} className="form-control" id="textarea" name="textarea" placeholder="Product description..."></textarea>
				  </div>
				</div>

	
				<div className="form-group">
				  <label className="col-md-4 control-label" htmlFor="filebutton">Images</label>
				  <div className="col-md-4">
				    <input ref={(r) => this.image = r} id="filebutton" name="filebutton" className="input-file" type="file"/>
				  </div>
				</div>

	
				<div className="form-group">
				  <label className="col-md-4 control-label" htmlFor="selectbasic">Category</label>
				  <div className="col-md-4">
				    <select ref={(r) => this.category = r} id="selectbasic" name="selectbasic" className="form-control">
				      <option value="1">Option one</option>
				      <option value="2">Option two</option>
				    </select>
				  </div>
				</div>

	
				<div className="form-group">
				  <label className="col-md-4 control-label" htmlFor="button1id">Double Button</label>
				  <div className="col-md-8">
				    <button id="button1id" name="button1id" className="btn btn-primary" onClick={this.handleProductUpload}>Save</button>
				    <button id="button2id" name="button2id" className="btn btn-danger"  onClick={this.resetForm}>Reset</button>
				  </div>
				</div>

				</fieldset>
			</form>

		);
	}

});

