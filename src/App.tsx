import React from 'react';
import Header from './components/Header/index';
import Summary from './components/Summary';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Summary />
    </div>
  );
}

export default App;
