import React from 'react';
import Form from './components/Form';
import Header from './components/Header/index';
import Summary from './components/Summary';
import GlobalStyle from './styles/global';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Summary />
      <Form />
    </div>
  );
}

export default App;
