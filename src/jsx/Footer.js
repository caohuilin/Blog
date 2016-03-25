const Footer = React.createClass({
    render(){
        return (
          <footer id="footer">
              <div className="con">
                  <ul>
                  </ul>
                  <ul className="menu">
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
                  <ul className="contact">
                      <li><i className="fa fa-qq"></i>1057275848</li>
                      <li><i className="fa fa-phone"></i>151 7326 6529</li>
                      <li><i className="fa fa-github"></i><a href="https://github.com/caohuilin" target="_blank">github.com/caohuilin</a>
                      </li>
                  </ul>
              </div>
          </footer>
        );
    }
});