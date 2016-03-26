const ArticleMain = React.createClass({
    componentWillMount(){
        document.body.scrollTop=170;
    },
   render(){
       let article = ARTICLE[this.props.article - 1];
       let articleHTML = (
         <div className="inside">
             <h2 className="title">{article.title}</h2>
             <div className="icon"><i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                 <i className="fa fa-calendar "></i><span className="date">{article.date}</span></div>
             <div className="description" dangerouslySetInnerHTML={{__html:marked(article.content)}}></div>
         </div>
       );
       return(
         <div className="article">
             {articleHTML}
         </div>
       );
   }
});