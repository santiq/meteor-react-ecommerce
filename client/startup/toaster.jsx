Meteor.startup(()=>{

    let ToasterService = {

	   dispatchEvent(type,message ){
	    let e = new CustomEvent('displayToaster', { detail: {message: message, type:type} });
	    window.dispatchEvent(e);
	   },

	   info(message){
	    this.dispatchEvent('info',message);
	   },

	   success(message){
	    this.dispatchEvent('success',message);
	   },

	   warning(message){
	    this.dispatchEvent('warning',message);
	   },

	   error(message){
	    this.dispatchEvent('error',message);
	   }
    };

    window.ToasterService = ToasterService ;

});