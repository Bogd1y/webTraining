import { Route, Routes, useNavigate} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import NewPost from './components/NewPost';
import Missing from './components/Missing';
import PostPage from './components/PostPage';
import { useState, useEffect } from 'react';
import About from './components/About';
import { format } from 'date-fns';
import API from './api/posts';
import useWindowSize from './hooks/useWindow';
import EditPost from './components/EditPost';
import useAxiosFetch from './hooks/useAxiosFetch';

function App() {
  
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const windowParams = useWindowSize();

  const { data, fetchError, isLoading} = useAxiosFetch(`http://localhost:3500/posts`); 

  useEffect( ()=>{
    setPosts(data)
  }, [data]);

  const navigation = useNavigate(); 
  
  const handleSubmit = async(e)=> {
   e.preventDefault();
   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
   const datetime =  format(new Date(), 'MMMM dd, yyyy  pp');
   const newPost = {id: id, title: postTitle , datetime: datetime, body: postBody };

   try {
     const response = await API.post('/posts', newPost)
    //  const newPostsArray = [...posts, newPost];
     const newPostsArray = [...posts, response.data];
     setPosts(newPostsArray);
     setPostTitle('');
     setPostBody('');
     navigation('/')
    } catch(error) {
      console.log(error);
    }

  }
  
  const handleDelete = async(id)=> {
    try {
      await API.delete(`/posts/${id}`);
      const postsList = posts.filter(post => post.id !== id );
      setPosts(postsList);
      navigation('/')
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = async(id) => {
    const datetime =  format(new Date(), 'MMMM dd, yyyy  pp');
    const updatedPost = {id: id, title: editTitle , datetime: datetime, body: editBody }; 
    try {
      const response = await API.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => post.id === id ? {...response.data} : post))
      setEditBody('');
      setEditTitle('');
      navigation('/')
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(()=>{
    const filteredResult = posts.filter(post => (
      ((post.body).toLowerCase()).includes(search.toLocaleLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLocaleLowerCase()) 
    ))
    setSearchResult(filteredResult.reverse());
  },[posts, search])

  // useEffect(()=>{
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await API.get('/posts')
  //       setPosts(response.data)
  //     } catch (error) {
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     }
  //   }
  //   fetchPosts();
  // }, [])


  return (
    <div className='App'>
      <Header title="Training React Routes" width={windowParams.width}/>
      <Nav 
        search={search}
        setSearch = {setSearch}
      />
      <Routes className="App">
          <Route
            exact path='/header'
            element={<Header />}
          />

          <Route
            exact path='/'
            element={<Home 
              fetchError={fetchError}
              isLoading={isLoading}
              posts={searchResult}/>}
          />

          <Route
            exact path='/post/:id'
            element={ <PostPage 
              posts={posts}    
              handleDelete={handleDelete}
            />}
          />

          <Route
            path='/post'
            element={ <NewPost 
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />}
          />
          <Route
            path='/edit/:id'
            element={ <EditPost 
              posts={posts}
              handleEdit={handleEdit}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
            />}
          />

          <Route
            exact path='/about'
            element={ <About />}
          />

          <Route
            path='*'
            element={ <Missing />}
          />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;
