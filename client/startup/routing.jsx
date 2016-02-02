Meteor.startup(function(){
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
  ReactDOM.render(<Routes />, root);
});