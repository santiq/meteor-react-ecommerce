Metheor.publish('products',(category)=>{
	check(category,String);
	if(!_.contains(Constants.categories,category)){
		return Products.find({});
	}
	return Products.find({category:category});
})