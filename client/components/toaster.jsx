 Toaster = React.createClass({

    getInitialState() {
      return {
      	message: '',
      	display:false,
      	time:5000

      };
    },

    componentDidMount() {
      window.addEventListener('displayToaster', this.handleToaster);
    },

    componentWillUnmount() {
      window.removeEventListener('displayToaster', this.handleToaster);
    },

    handleToaster(e) {
      this.setState({
        message: e.detail.message, 
        type:e.detail.type,
        display:true
      });

      clearTimeout(this.timeoutHolder);

      this.timeoutHolder = setTimeout( () => {

        this.setState({display:false});

      }.bind(this),this.state.time);

    },

    render(){console.log(this.state.type)
		const blue   = '#0000FF';
		const red    = '#FF0000';
		const yellow = '#FFFF00';
		const green  = '#00FF00';
		let color;
		switch(this.state.type){
			case 'info':
				color = blue;
				break;
			case 'error':
				color = red;
				break;
			case 'success':
				color = green;	
				break;
			case 'warning':
				color = yellow;
				break;
			default:
				color = blue;
				break;
		}

		let styles = {
			'position': 'absolute',
		    'left': '0px',
		    'top': '0px',
		    'right': '0px',
		    'transition': 'all 500ms ease-in',
		    'height': '80px',
		    'color': '#FFF',
			'lineHeight': '80px',
			'textAlign': 'center',
			'fontSize': '1.8rem',
			'color':'#FFF',
			'backgroundColor':color,
			'transform':this.state.display?'translateY(0px)':'translateY(-80px)'
		}

		return (
			<div style={styles}> {this.state.message} </div>
		);
	}

});
