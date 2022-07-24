import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
function App(){
    return(
        <div className="App">
            <Navbar/>
            <br>
            </br>
            <Form/>
            <Footer/>
        </div>
    )
}
export default App;