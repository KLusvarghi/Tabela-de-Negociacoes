export class Negociacao {
    //  se eu coloco explicito 'public' ou 'privete', isso irá indicar que por baixo dos panos o TS criar uma propriedade da minha classe que contenha o mesmo nome dos parametros do meu construtor, e irá fazer a atribuição
    constructor(
      private _data: Date, 
      public readonly quantidade: number, 
      public readonly valor: number
    ) {}
  
    // Criando métodos do tipo 'Get' para que seja possivel acessar/visualizar externamente esse valores por conta de serem valores privados
    
    get volume(): number{
      return this.quantidade * this.valor
    }

    get data(): Date {
      // fazendo uma cópia da minha data e quando tentarem setar a data, irão setar a cópia
      // sendo então 'data' um data identica ao meu '_data', sendo ela apenas uma referencia ao '_data'
      const data = new Date(this._data.getTime())
      return data;
    }
    // Sendo assim uma programação defencisa, sendo assim, tenod uma referencia de algo que eu guardei, mas não querendo que seja modificado o valor que eu guardei dentro de 'negociacao'


    // esse método tem que ser possivel de ser acessado mesmo sem insaciar a classe 'negociacao'. 
    // então para isso definimos ele como static
    // definindo como um método da propria classe
    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
       // para converter eu crio um objeto do tipo date, o problema é que por padrão se eu passar o 'inputDate' ele será colocado da seguinte maneira '1111-11-11', porem o objeto date espera da seginte maneira '1111,11,11' , tendo que transformar as '-' em ','
    
    // fazendo um 'expressão regular' que irá pegar todos '-' que ocorrerem (g)
    const regex = /-/g
    const date = new Date(dataString.replace(regex, ','))
    const quantidade = parseInt(quantidadeString)
    const valor = parseFloat(valorString)

    // instanciando uma classe de 'Negociacao' e passando os valores esperados
    // para eu acessar o valor inserido no html eu utilizo "this.inputData.value", porem o seu retorno é do tipo String, e o TS me da error, por que o 'inputData espera um valor do tipo Date
    // então tendo que converter os dados
    return new Negociacao( date, quantidade, valor)
    }
  }