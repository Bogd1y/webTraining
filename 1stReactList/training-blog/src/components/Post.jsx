import { NavLink } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className="post">
            <NavLink to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p className="postDate">{post.datetime}</p>
            </NavLink>
            <p className="postBody">{
                (post.body).length <= 77
                    ? post.body
                    : `${(post.body).slice(0,77)}...`
            }</p>
        </article>
    )
}

export default Post