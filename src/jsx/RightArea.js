const RightArea = React.createClass({
    render(){
        const articleList = ARTICLE;
        const tag = this.props.tag;
        let TagHTML = articleList.filter(v=> {
            if (tag === 'ALL') return true;
            return v.tag == tag
        }).map((article)=> {
            return (<li key={article.id}>
                <div className="inside">
                    <h2 className="title"><Link to={"/article/" + article.id}>{article.title}</Link></h2>
                    <div className="icon">
                        <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                        <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                    </div>
                    <div className="description">{article.description}</div>
                    <div className="more"><Link to={"/article/" + article.id}><span>Read More</span></Link>
                    </div>
                </div>
            </li>);
        });


        if (this.props.tag) {
            //console.log('render RightArea', TagHTML, TagHTML.length);
            return (
              <div className="rightArea">
                  <div className="nav">
                      <ul>
                          {TagHTML}
                      </ul>
                  </div>
              </div>
            )
        } else if (this.props.article) {
            let article = ARTICLE[this.props.article - 1];
            //console.log(this.props.article);
            let articleHTML = (
              <div className="inside">
                  <h2 className="title">{article.title}</h2>
                  <div className="icon"><i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                  <i className="fa fa-calendar "></i><span className="date">{article.date}</span></div>
                  <div className="description" dangerouslySetInnerHTML={{__html:marked(article.content)}}></div>
              </div>
            );
            return (
              <div className="rightArea">
                  <div className="article">
                      {articleHTML}
                  </div>
              </div>

            );
        } else {
            return null;
        }
    }
});