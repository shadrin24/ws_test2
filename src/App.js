import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascriprt', body: 'Description'},
        {id: 2, title: 'Javascriprt 2', body: 'Description'},
        {id: 3, title: 'Javascriprt 3', body: 'Description'}
    ])

  return (
    <div className="App">
        <PostList posts={posts} title={'Посты про JS'}/>
    </div>
  );
}

export default App;
