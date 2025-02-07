import React from 'react';
import './styles/App.scss';
import Home from '../src/components/Home';
import Header from '../src/components/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
};

export default App;

