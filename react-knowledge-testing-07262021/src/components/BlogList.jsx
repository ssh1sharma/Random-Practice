const BlogList = (props) => {
  return (
    <>
      {props.blogsProp.map(function (eachBlog) {
        return (
          <div className="row" key={eachBlog.id}>
            <div className="col text-center">
              <h4>{eachBlog.title}</h4>
              <p>{eachBlog.blogBody}</p>
            </div>
            <div className="col">
              <button type="button" onClick={props.deleteFeatureProp(eachBlog.id)} className="btn btn-warning" id="frontLgBtn"> Delete {eachBlog.title}
                &nbsp;<i className="fa fa-trash"></i></button>
            </div>
            <hr />
          </div>
        )
      })}

    </>
  );
}

export default BlogList;