import React, {useRef, useState} from 'react';
import './styles/App.css';
import TerminalComponent from "./components/TerminalComponent/TerminalComponent";

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
            <TerminalComponent/>
        </div>
    );
}

export default App;
