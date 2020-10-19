import React from 'react';
import './App.css';
import './components/Layout/Layout';
import Layout from '../src/components/Layout/Layout'
import CoffeeBuilder from './components/CoffeeBuilder/CoffeeBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <CoffeeBuilder/>
      </Layout>
    </div>
  );
}

export default App;
