const RightArea = React.createClass({
    render(){
        const articleList = ARTICLE;
        const tag = this.props.tag;
        if (this.props.tag) {
            //console.log('render RightArea', TagHTML, TagHTML.length);
            return (
              <div className="rightArea">
                <Tag tag={this.props.tag}/>
              </div>
            )
        } else if (this.props.article) {

            return (
              <div className="rightArea">
                <ArticleMain article={this.props.article}/>
              </div>

            );
        } else {
            return null;
        }
    }
});