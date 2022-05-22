import { useParams, NavLink } from "react-router-dom"


const PostPage = ({posts, handleDelete}) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main className="PostPage">
            <article className="post">
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <NavLink to={`/edit/${post.id}`}>
                            <button className="editBtn">Edit post</button>
                        </NavLink>
                        <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post && 
                    <div>
                        <p className="postBody" >Post does't exist :{"("} </p>
                        <NavLink to="/" className="postBody"> Visit home page</NavLink>
                    </div>
                }
            </article>
        </main>
    )
}

export default PostPage