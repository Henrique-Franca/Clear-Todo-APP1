import React, {Component} from "react";
import PageHeader from "../template/pageHeader";
import todoForm from "./todoForm";


export default class Todo extends Component{

    render(){
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'/>
                <todoForm/>
            </div>
        )
    }

}