import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Post } from './Components/Post';
import { Pagination } from './Components/Pagination';

function App() {

  const [posts , setPosts] = useState([]);

  const [loading , setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(10); // Here is the 10 data executed

  useEffect(() => {

    const fetchPots = async() => {
      
      try {
        //setLoading(true); // That mens when the data is not execute then the loading should be true
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = res.data;
        setPosts(data);
        setLoading(false); // When the data is executed then the loading should be false
      } catch (error) {
        console.log(error);
      }
    }
  
    fetchPots();

  },[])

  // Get current posts

  const indexOfLastPost = currentPage * postsPerPage;

  console.log(indexOfLastPost);
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  console.log(indexOfFirstPost);

  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentPost);

  //Change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Post posts={currentPost} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  );
}

export default App;
