import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Welcome To KantaBay</h1>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App;
