import React, { Component } from 'react'

class Lista extends Component {
       
    handleClick(codigo) {
        this.props.onOptionChange(codigo);
    }

    render() {
        return(
            <ul>
                {this.props.lista === undefined ? <li /> : this.props.lista.map((item) =>
                    <li 
                        key={item.codigo} 
                        onClick={this.handleClick.bind(this, item.codigo)}
                        value={item.nome}
                        >                        
                        {item.nome}
                    </li>
                )}
            </ul>        
            );            
    }
}

export default Lista