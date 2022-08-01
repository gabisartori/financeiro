import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Header from './components/Header/index';
import Summary from './components/Summary';
import GlobalStyle from './styles/global';

function App() {
  const data = localStorage.getItem('entradas');
  const [entradas, setEntradas] = useState(data ? JSON.parse(data) : []);

  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   const totalReceitas = entradas.filter((item:)=>!item.despesa)


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
