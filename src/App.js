import React, { Component } from 'react';
import "./App.css";

export default class App extends Component{

  mensagem = (msg) => {
    return <div className='message'>{msg}</div>;
  }

  dobro = (num) => {
    return (
      <div className='d_dobro'>
        <p>O número escolhido: {num}</p>
        <p>Seu dobro: {num*2}</p>
      </div>
    );
  }

  render(){
    return(
      <>
        <h1>{this.mensagem("Bom dia!")}</h1>
        <h2>{this.dobro(6)}</h2>
      </>
    )
  }
};