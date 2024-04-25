import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagemView.js";
import { DiaDaSemana } from "../enums/dayOfWeek.js";

// classe responsavel por adiconar, criar, limpar 

export class NegociacaoController {
  // existe um tipo para elementos que serão requisitados em arquivos HTML, asendo "HTMLInputElement"
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes; // criando um obj 'negociacoes' do tipo '"Negociacoes"'
  // instanciando um objeto de 'negociacoesView' passando a classe recebida no html, sendo esperado no contructor de 'NegociacoesView' esse seletor html 
  private negociacoesView = new NegociacoesView('.negociacoesView', true);

  private mensagemView = new MensagemView('#mensagemView');


  // não tipamos o construtor
  constructor() {
    // Pegando os input do HTML

    // ao ter definido o ' "strictNullChecks": true ', ele diz que pode ser um HTMLInputElement ou null, porem, as variaveis "this.input..." só aceitam 'HTMLInputElement', e me retorna esse erro, para resolver forçamos dizendo que essa valor será apenas do tipo HTMLElement, asism faznedo um "castining explicito"

    // Com isso eu asumo a responsabilidade do seletor estar errado, eu não estou tratando ele, apenas calando o 'strictNullChecks' para que não de erro.
    // podendo fazer as duas maneiras
    this.inputData = <HTMLInputElement>document.querySelector('#data');
    this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
    this.inputValor = document.querySelector('#valor') as HTMLInputElement;

    // assim que a página recriada é chamando o método 'update' e passado como parametro a lsita de negociaçoes
    this.negociacoesView.update(this.negociacoes)
  }

  // Assim tipando o tipo de retorno do método
  // Método para adicionar negócios
  public adiciona():void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    ) // sendo um array do tipo 'Negociacao' que recebendo uma negociação com data,quantidade e valor

    // verifico se a chamada do método dará algo negativo, caso de eu exibo a mensagem de erro
    if(!this.ehDiaUtil(negociacao.data)){
      this.mensagemView.update('São aceitas apenas negociações em dias úteis!')
      return ;
    }

    this.negociacoes.add(negociacao) // dizendo que esssa negociacoes.add (chamando o método de adicionar) passando 'negociacao' que é a data, quantidade e valor
    
    // console.log(negociacao) // me retorna a negociacao criada no momento
    this.limparFormulario(); // chamando o método para limpar o formulário
    
    this.reloadView()
  }

  // função responsavel por validar o dia atual
  private ehDiaUtil(data: Date) {
    // Utilizando os enums de 'dayOfWeek'
    return data.getDay() > DiaDaSemana.DOMINGO && data.getDay() < DiaDaSemana.SABADO
  }



  private limparFormulario(): void {
    // pelos elementos terem sido definidos como HTMLElement, o TS nos dá opções de utilizar métodos que sao possiveis apenas em elementos que tem vinculo com o html
    this.inputData.value = ''
    this.inputQuantidade.value = ''
    this.inputValor.value = ''
    this.inputData.focus()
  }


  // Método onde será chamado apenas outros métodos que se tratam de atualização da view
  private reloadView() {
    // após toda negociação feita eu tenho que fazer o update passanado as negociações
    this.negociacoesView.update(this.negociacoes)

    // Após a negociação adicionada eu chamo o méodo update passando a mensagem
    this.mensagemView.update('Negociação adicionada com sucesso!')  
  }
}