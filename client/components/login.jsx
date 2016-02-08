const {History} = ReactRouter;
Login = React.createClass({

  mixins: [ReactMeteorData, History],

  getInitialState() {
    return {
      usernameError: false,
      passwordError: false,
    };
  },

  getMeteorData() {
    return {
      currentUser: Meteor.user()
    }
  },


  usernameErrorCheck() {
    if (this.state.usernameError && this.username.value.trim() ) {
      this.setState({
        usernameHasError: false
      });
    }
  },

  passwordErrorCheck() {

    if (this.state.passwordError && this.password.value.trim()) {
      this.setState({
        passwordHasError: false
      });
    }

  },

  handleSubmit(e) {
    e.preventDefault(); 
    
    Meteor.loginWithPassword({username: this.username.value.trim()}, this.password.value.trim(), function(err){
      if (err) {
        
        this.setState({
          usernameError: true,
          passwordError: true
        });

        ToasterService.error('Wrong credentials.')
      }else{
        console.log("LOGED! ", Meteor.user())
      }
    }.bind(this));
  },

  render(){

    let usernameClass = this.state.usernameError ? 'form-group has-error' : 'form-group';
    let passwordClass = this.state.passwordError ? 'form-group has-error' : 'form-group';

    return(
      <div className="login container-fluid">
        <div className="row form">
          <div className="col-md-12">
            <h3 className="hidden-sm hidden-xs">Sign In</h3>
            <div className="row visible-xs visible-sm">
              <div className="col-xs-6 col-sm-6">
                <h3>Sign In</h3>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className={usernameClass}>
                <input 
                  onKeyUp={this.usernameErrorCheck}
                  ref={(r) => this.username = r} type="text" className="form-control" placeholder="Username" />
              </div>
              <div className={passwordClass}>
                <input 
                  onKeyUp={this.passwordErrorCheck}
                  ref={(r) => this.password = r} type="password" className="form-control" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});
