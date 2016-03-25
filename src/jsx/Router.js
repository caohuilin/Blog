ReactDOM.render((
  <Router>
      <Route path="/" component={Main}>
          <Route name="tag" path="/tag/:tag" component={Main}/>
          <Route name="article" path="/article/:article" component={Main} />
      </Route>
      <Route path="*" component={Main}/>
  </Router>
), document.getElementById('mainBody'));