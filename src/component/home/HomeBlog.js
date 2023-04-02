export default function HomeBlog(props){
    return(
    <div className="blog" style={props.another_style}>
          <div className="container">
                  <div className="blog-container has-scrollbar" id="blog-card">
                        <div className="blog-card">
                          <a href="#">
                            <img src="" width="300" className="blog-banner"/>
                          </a>
                          <div className="blog-content">
                            <a href="#" className="blog-category"> type </a>
                            <a href="#"><h3 className="blog-title">title</h3></a>
                            <p className="blog-meta"> admin </p>
                          </div>
                        </div>
                  </div>
          </div>
    </div>
    )
}