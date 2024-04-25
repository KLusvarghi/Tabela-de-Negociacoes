import { Negociacao } from "./negociacao";

// essa classe irá conter uma lista de negociaçõe spara futuramente conseguimos exibir elas, porem que nbão sejá possivel excluir ou alterar nenhuma negociação depois de feita
export class Negociacoes {
  // apenas uma instancia de 'negociacoes'11 será possivel alterar essa array
  // dizendo o tipo que ele é, que será array, e dentro de '< >' tenho que dizer o que ele receberá dentro dele 
  // recebendo apenas dados do tipo 'Negociacao'
  private negociacoes: Negociacao[] = []

  // criando um método que irá receber uma negociação do tipo 'Negociaçcao'
  // e com isso irá adiconar a array "negociacoes" criand logo acima, o que foi recebido de parametro
  public add(negociacao: Negociacao){
    this.negociacoes.push(negociacao)
  }

  // sendo o método para listar as negociações
  public list(): readonly Negociacao[] { // assim resolvendo o problema que existia de modificação, o 'ReadonlyArray' apenas permitindo leitura do array, em qualquer lugar que chamar esse método, não podera utilizar outros métodos que possam modificar a array.
    return this.negociacoes
  }
}