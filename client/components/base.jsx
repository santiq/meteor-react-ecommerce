Base = React.createClass({
	render() {	
		return(
			<div>
				{this.props.children}
				<Toaster />
			</div>
		);
	}
});
