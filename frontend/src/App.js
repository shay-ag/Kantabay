import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ReviewScreen from './screens/ReviewScreen';
import ContactScreen from './screens/ContactScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/about' component={AboutScreen} exact />
          <Route path='/reviews' component={ReviewScreen} exact />
          <Route path='/contact' component={ContactScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
