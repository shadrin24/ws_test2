import React, {useRef, useState} from 'react';
import './styles/App.css';
import SidebarComponent from "./components/sidebar/SidebarComponent";

function App() {
    // const [posts, setPosts] = useState([
    //     {id: 1, title: 'Javascriprt', body: 'Description'},
    //     {id: 2, title: 'Javascriprt 2', body: 'Description'},
    //     {id: 3, title: 'Javascriprt 3', body: 'Description'}
    // ]);
    // const [title, setTitle] = useState('');
    // const bodyInputRef = useRef();
    // const addNewPost = (e) => {
    //     e.preventDefault();
    //     console.log(title)
    //     console.log(bodyInputRef.current.value)
    // }

    return (
        <div className="App">
            <SidebarComponent></SidebarComponent>
        </div>
    );
}

export default App;
