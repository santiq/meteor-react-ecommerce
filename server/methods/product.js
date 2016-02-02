Meteor.methods({

	/** 
	 * @summary Adds a product to the collection
	 * @param {String} name - Product name
	 * @param {String} description - Short description of the product
	 * @param {String} category - A valid category from the list of categories
	 * @param {Number} price - Price
	 * @param {String} coverImage - Url of the cover image
	 * @param {Array} otherImages - List of url
	 */

	addProduct(name,description,category,price,coverImage,otherImages = []){
		check(name,String);
		check(description,String);
		check(price,Number);
		check(category,String);
		check(imageUrl,String);

		if(!_.contains(Constants.server.categories,category))
			throw new Meteor.Error("incorrect-category",
				"the product has incorrect category");

		Products.insert({name:name,description:description,category:category,price:price,coverImage:coverImage,otherImages:otherImages});	

		return 'ok';
	},

	/** 
	 * @summary Deletes a product
	 * @param {String} productId - The id of the product in the DataBase
	 */
	deleteProduct(productId){
		check(productId, String);
		if(!this.userId){
			 throw new Meteor.Error("not-logged-in",
       			"Must be logged to delete a product.");
		}
		Products.remove({where:{_id:productId}},(err)=>{
			if(err)
				throw new Meteor.Error(err)
			else
				return 'ok';
		});
	},

	/** 
	 * @summary Updates a product
	 * @param {String} productId - The id of the product in the DataBase
	 * @param {Object} updatedProduct - The new product object that will replace the old product
	 */
	editProduct(productId,updatedProduct){
		check(updatedProduct,Object);
		if(!updatedProduct.name || updatedProduct.price || updatedProduct.coverImage || updatedProduct.description)
			throw new Meteor.Error("missing-properties",
				"The updated product is uncompleted");

		Products.update({where:{_id:productId}},updatedProduct)
	},
})