const LeftArea = React.createClass({
    render(){
        return (
          <div className="leftArea">
              <div className="classify" style={position_top(this.props.wheel)}>
                  <div className="head"><h2>文章分类</h2></div>
                  <nav>
                      <ul>
                          <li ><Link to="/tag/ALL">ALL<i className="fa fa-angle-double-right "></i></Link></li>
                          <li ><Link to="/tag/HTML&CSS">HTML&CSS<i className="fa fa-angle-double-right "></i></Link></li>
                          <li ><Link to="/tag/JavaScript">JavaScript<i className="fa fa-angle-double-right "></i></Link></li>
                          <li ><Link to="/tag/Project">Project<i className="fa fa-angle-double-right "></i></Link></li>
                          <li ><Link to="/tag/React">React<i className="fa fa-angle-double-right "></i></Link></li>
                          <li ><Link to="/tag/其他">其他<i className="fa fa-angle-double-right "></i></Link></li>
                          <li ><Link to="/tag/随笔">随笔<i className="fa fa-angle-double-right "></i></Link></li>
                      </ul>
                  </nav>
              </div>
          </div>
        )
    }
});
