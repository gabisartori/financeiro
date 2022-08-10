import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import Header from '../components/Header/index';
import Summary from '../components/Summary';
import Grid from '../components/Grid';
import GlobalStyle from '../styles/global';

type entrada = {
  id: number,
  desc: string;
  quant: number;
  gasto: boolean
}

function App() {
  
  const data = localStorage.getItem('entradas');
  const [entradas, setEntradas] = useState(data ? JSON.parse(data) : []);

  const [receitas, setReceitas] = useState(0);
  const [despesas, setDespesas] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const quantiaDespesas: number[] = entradas.filter(
      (item: entrada) => item.gasto
      ).map((entrada: entrada)=> entrada.quant);

    const quantiaReceitas: number[] = entradas.filter(
      (item: entrada) => !item.gasto
      ).map((entrada: entrada)=> entrada.quant);
    
    const receita = Number(quantiaReceitas.reduce((acc, cur) => acc + cur, 0).toFixed(2));
    const despesa = Number(quantiaDespesas.reduce((acc, cur) => acc + cur, 0).toFixed(2));

    const saldo = receita - despesa;
    setReceitas(receita);
    setDespesas(despesa);
    setTotal(saldo);

  }, [entradas])

  const handleAdd = (entrada: entrada) => {
    const newEntradas = [...entradas, entrada];
    setEntradas(newEntradas);
    localStorage.setItem('entradas', JSON.stringify(newEntradas));
  }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Summary receitas={receitas.toFixed(2)} despesas={despesas.toFixed(2)} total={total.toFixed(2)} />
      <Form handleAdd={handleAdd}/>
      <Grid items={entradas} setItems={setEntradas}/>
    </div>
  );
}

export default App;
