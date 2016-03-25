const Header = React.createClass({
    render(){
        return (
          <header className='header' style={change_height(this.props.wheel)}>

              <div className="head1" >
                  <div className="logoSmall" style={css_display(this.props.wheel)}><Link to="/tag/ALL">CaoHuilin</Link>
                  </div>
                  <div className="blank"></div>
                  <ul>
                      <li>
                          <a href="https://hi-hi.cn/chlblog/" target="_blank">Home</a>
                      </li>
                      <li>
                          <a href="https://hi-hi.cn/chlresume/" target="_blank">Resume</a>
                      </li>
                      <li>
                          <a href="https://github.com/caohuilin" target="_blank">Project</a>
                      </li>
                  </ul>
              </div>
              <div className="head2" style={css_display(!this.props.wheel)}>
                  <div className="logo" ><Link to="/tag/ALL">=CHL</Link></div>
                  <div className="proverb">Pursue beauty , Approach beauty , Achieve beauty</div>
              </div>
          </header>
        )
    }
});