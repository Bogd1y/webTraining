
const NewPost =({handleSubmit, postTitle, setPostTitle, postBody, setPostBody})=> {
    return (
      <main className="NewPost">
          <h2>New Post</h2>
          <form onSubmit={handleSubmit} className="newPostForm">
            <label htmlFor="postTitle">Title:</label>
            <input 
              type="text" 
              id="postTitle"  
              required
              value={postTitle}
              onChange={(e)=> setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody">Body:</label>
            <textarea 
              cols="30"
              rows="4"
              id="postBody"
              required
              value={postBody}
              onChange={(e)=>setPostBody(e.target.value)}
            />
            <button type="submit">Create Post</button>
          </form>
      </main>
    );
  }
  
  export default NewPost;
  