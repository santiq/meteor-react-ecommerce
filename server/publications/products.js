Meteor.publish('products',(category)=>{
	check(category,String);
	if(!_.contains(Constants.categories,category)){
		return Products.find({});
	}
	return Products.find({category:category},{fields:{_id:1}});
})

Meteor.publish('product',(productId)=>{
	check(productId,String);
	return Products.find({_id:productId});
})