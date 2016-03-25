const Content = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    render(){
        return (
          <div className="main">
              <div className="content" >
                  <LeftArea wheel={this.props.wheel}/>
                  <RightArea tag={this.props.params.tag} article={this.props.params.article}/>
              </div>
          </div>
        );
    }
});