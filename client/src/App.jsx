// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '././components/Navbar/Navbar';
import Home from '././components/Home/Home';
import About from '././components/About/About';
import Services from '././components/Services/Services';
import Contact from '././components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Home />
            <Footer/>
            <Routes>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/services" component={Services} />
                <Route path="/contact" component={Contact} />
            </Routes>
        </Router>
    );
};

export default App;