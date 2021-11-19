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
import JoinScreen from './screens/JoinScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import BlogScreen from './screens/BlogScreen';
import MaidScreen from './screens/MaidScreen';

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
          <Route path='/joinus' component={JoinScreen} exact />
          <Route path='/signin' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/blogs' component={BlogScreen} exact />
          <Route path='/maids' component={MaidScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App;
