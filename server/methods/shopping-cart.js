Meteor.methods({

	/** 
	 * @summary Creates a shopping cart for the current user
	 * 
	 */
	createShoppingCart(){
		const user = this.userId;

		if(!user)
			throw new Meteor.Error('user-not-logged','Must to be logged to perfom that action');

		if(ShoppingCart.find({owner:user})){
			return 'already created'
		}

		ShoppingCart.insert({owner:user,items:[],createdAt:Date.Now()});
		return 'ok'
	},

	/** 
	 * @summary Adds a product to the shopping cart of the current user
	 * @param {String} productId - A valid product id
	 */
	addToShoppingCart(productId){
		check(productId,String);
		const user = this.userId;

		if(!user)
			throw new Meteor.Error('user-not-logged','Must to be logged to perfom that action');

		if(Products.find({id:productId}).count() === 0){
			throw new Meteor.Error('inexisting-product','That product doesn\'t exist !');
		};

		ShoppingCart.upsert({ owner : user}, { $push : { items : { productId } }, $set : { lastUpdate : Date.now() } });
		return 'ok';
	},

	/** 
	 * @summary Remove a product from the shopping cart
	 * @param {String} productId - The id of the current product in the shopping cart
	 */
	removeFromShoppingCart(productId){
		check(productId,String);
		const user = this.userId;

		if(!user)
			throw new Meteor.Error('user-not-logged','Must to be logged to perfom that action');

		ShoppingCart.upsert({ owner : user }, {$pull : {items : { productId  }}});
		return 'ok';
	},

	/** 
	 * @summary Clear the shopping cart of the current user
	 *
	 */
	clearShoppingCart(){
		const user = this.userId;

		if(!user)
			throw new Meteor.Error('user-not-logged','Must to be logged to perfom that action');

		ShoppingCart.upsert({owner:user},{$set:{items:[],lastUpdate:Date.now()}});
		return 'ok'
	}


});