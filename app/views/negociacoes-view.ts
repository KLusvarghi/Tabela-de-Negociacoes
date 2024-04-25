import { Negociacoes } from "../models/negociacoes.js"
import { View } from "./view.js"

export class NegociacoesView extends View<Negociacoes> {
  
  // essa função irá me retornar uma string HTML, contendo o html que eu quero + os dados de negociações juntos

  // faremos um script para que se alguem tentar inserir um script dentro do nosso template ele será removido (tem navegadores que fazem isso por padrão, outros não)
  protected template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-borderd">
        <thead>
          <tr> 
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </thead>
        <tbody>
          ${model.list().map((negoc) => {
            return `
              <tr>
                <td>${this.formatDate(negoc.data)}</td>
                <td>${negoc.quantidade}</td>
                <td>${negoc.valor}</td>
              </tr>
            `
          }).join('')}
        </tbody>
      </table>
    `
  }
  // <td>${new Intl.DateTimeFormat().format(negoc.data)}</td>
  // para converter a data utiizamos o 'Intl' e o 'DateTimeFormat()', não passando nenhum parametro ele adota a localização atual do usuário pelo navegador, passando o que iremos formatar dentro de 'format'

  // sendo assim exibido na tabela uma lista convertida para string todas as informações de negociações;
  // porem com isso ele irá retornar uma array, e para isso eu uso o método join para ajuntar a array com um ''


  // método para formatar a data recebida
  // definindo ele como privado por que só será acessado pela propria classe 
  private formatDate(date: Date): string {
    return new Intl.DateTimeFormat().format(date)
  }




}