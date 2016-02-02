/**
 * @summary Initialize the app.
 *
 *  - Adds a default admin user
 *
 */

Meteor.startup(()=>{

  if(Meteor.users.find().count() === 0) {

    Accounts.createUser({
      username: 'demo',
      password: 'demo',
      profile: { name: 'demo' }
    });
    
  }
});