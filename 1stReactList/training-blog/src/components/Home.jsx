import Feed from './Feed';

const Home = ({ posts, fetchError, isLoading }) => {
    return (
        <main className="Home">
            {isLoading && <p className='statusMsg'> Loading posts... </p>}
            {fetchError && <p style={{color: "red"}} className='statusMsg'>{fetchError}</p>}

            {!isLoading && !fetchError && ( posts.length ? 
                <Feed posts={posts}/>
                : (<>No posts yet</>) ) 
            }

           
        </main>
    )
}

export default Home