const Tag = React.createClass({
    componentWillMount(){
        if(document.body.scrollTop !== 0){
            document.body.scrollTop=170;
        }
    },
    componentWillReceiveProps(nextProps){
        if( this.props.tag !== nextProps.tag && document.body.scrollTop !== 0){
            document.body.scrollTop=170;
        }
    },
   render(){
       const articleList = ARTICLE;
       const tag = this.props.tag;
       let TagHTML = articleList.filter(v=> {
           if (tag === 'ALL') return true;
           return v.tag == tag
       }).reverse().map((article)=> {
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
       return(
         <div className="nav">
             <ul>
                 {TagHTML}
             </ul>
         </div>
       );
   }
});