Routes = React.createClass({
  render() {
    return(
      <Router history={browserHistory}>
        <Route path='/' component={Base}>
        </Route>
      </Router>
    );
  }
});
