import React from 'react';
import Header from './components/Header/Header'
import Editor from "./components/Editor/Editor";
import './App.css';

function App() {
    return (
        <div className = 'app-wrapper' >
            <Header />
            <Editor />
        </div>
    );
}

export default App;
