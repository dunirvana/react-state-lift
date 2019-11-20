import React from 'react';
import logo from './logo.svg';
import './App.css';
import Lista from './Lista';

class App extends React.Component {

  listaValores = [
    {codigo: 1007, nome:"Memoria ram", tipo:"PC"},
    {codigo: 1009, nome:"Teclado sem fio", tipo:"PC"},
    {codigo: 1012, nome:"Monitor", tipo:"PC"},
    {codigo: 1109, nome:"Saia", tipo:"VE"},
    {codigo: 1112, nome:"Vestido", tipo:"VE"}
  ];

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };

    this.onOptionChange = this.onOptionChange.bind(this);
  }

  onOptionChange(item) {
    this.setState(state => {
      const list = state.list.concat(item);

      return {
        list
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <div>
            Escolhidos:
            {this.state.list.toString()}
          </div>

          <div>
            Informática:
            <Lista lista={this.listaValores.filter(function(item){ return item.tipo === 'PC'})} onOptionChange={this.onOptionChange} ></Lista>
          </div>

          <div>
            Vestuário:
            <Lista lista={this.listaValores.filter(function(item){ return item.tipo === 'VE'})} onOptionChange={this.onOptionChange} ></Lista>
          </div>

        </header>
        
      </div>
    );
  }
}

export default App;

