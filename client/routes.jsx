const {
  Router,
  Route,
  IndexRoute,
  history
} = ReactRouter;
const browserHistory = history.createHistory();

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
