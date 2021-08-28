import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas" ;
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";

import "./assets/app.css";
import './assets/index.css';

class App extends Component {

    constructor(){
        super();
        this.notas = [];
        this.state = {
            notas:[]
        };
    }
    criarNota(titulo, texto){
        const novaNota = {titulo, texto};
        const novoArrayNotas = [...this.state.notas,novaNota]
        const novoEstado = {
            notas:novoArrayNotas
        };
        this.setState(novoEstado);
    }

    deletarNota(index){
        let arrayNotas = this.state.notas;
        arrayNotas.splice(index,1);
        this.setState({nota:arrayNotas}) // definir novo status com o valor deletado
    }

    render() {
        
        return ( 
            <section className="conteudo">
                <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
                <main className="cont-principal">
                    <ListaDeCategorias />
                    <ListaDeNotas 
                        apagarNota={this.deletarNota.bind(this)}
                        notas={this.state.notas}/>
                </main>
            </section>
        );
    }
}

export default App;