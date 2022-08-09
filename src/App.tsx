import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Header from './components/Header/index';
import Summary from './components/Summary';
import GlobalStyle from './styles/global';

function App() {
  type entrada = {
    descricao: string;
    quantia: number;
    isDespesa: boolean
  }
  
  const data = localStorage.getItem('entradas');
  const [entradas, setEntradas] = useState(data ? JSON.parse(data) : []);

  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const quantiaDespesas: number[] = entradas.filter(
      (item: entrada) => item.isDespesa
      ).map((entrada: entrada)=> entrada.quantia)

    const quantiaReceitas: number[] = entradas.filter(
      (item: entrada) => !item.isDespesa
      ).map((entrada: entrada)=> entrada.quantia)
    
    const receita = Number(quantiaReceitas.reduce((acc, cur) => acc + cur, 0).toFixed(2));
    const despesa = Number(quantiaDespesas.reduce((acc, cur) => acc + cur, 0).toFixed(2));

    const saldo = receita - despesa;
    setReceitas(receita);
    setDespesas(despesa);
    setTotal(saldo);

  }, entradas)

  const handleAdd = (entrada: entrada) => {
    const newEntradas = [...entradas, entrada];
    setEntradas(newEntradas);
    localStorage.setItem('entradas', JSON.stringify(newEntradas));
  }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Summary receitas={receitas} despesas={despesas} total={total} />
      <Form handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
