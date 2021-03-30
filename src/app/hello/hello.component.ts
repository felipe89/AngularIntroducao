import { Component } from '@angular/core';

@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'

})

export class HelloComponent{

    nome: string; 
    clientes: Cliente[]

    constructor(){
        this.nome = 'Felipe';
        let criando = new Cliente('Jady', 6); 
        let outro = new Cliente ('Ariana', 26); 
        let novoCliente = new Cliente('Felipe', 31); 

        this.clientes = [criando, outro, novoCliente]; 
    }

}

class Cliente{
    constructor(
        public nome: string, 
        public  idade: number
    ){}
}