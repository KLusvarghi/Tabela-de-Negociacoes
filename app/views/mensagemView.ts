import { View } from "./view.js"

// reutilizando métodos e construtor da classe VIEW
export class MensagemView extends View<string> { // definindo o generic type como <string>
  // passando o tipo '<string>' quer dizer que os paramentros dos métodos irão esperar strings tbm
 
  // sendo a função que contem a estrutura da mesagem que será passada 
  protected template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `
  }
}