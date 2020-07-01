import React from 'react'
import PostForm from "./components/PostForm";
import SyncPosts from "./components/SyncPosts";
import AsyncPosts from "./components/AsyncPosts";


function App() {
  return (
    <div className="container">
       <div className="row">
           <div className="col s11">
               <h3>Post Form</h3>
               <PostForm/>
           </div>
       </div>
        <div className="row">
            <div className="col s5">
                <h3>Sync Posts</h3>
                <SyncPosts posts={[4]}/>
            </div>
            <div className="col s5 offset-l1">
                <h3>Async posts</h3>
                <AsyncPosts posts={[3]} />
            </div>
        </div>
    </div>
  );
}

export default App;
