import { NegociacaoController } from "./controllers/negociacao-Controller.js"; // sendo necessario adicionar '.js' ao final do caminho do import

const controller = new NegociacaoController() // criando uma instancia de 'NegociacaoController'
const form = document.querySelector('.form') // pegando o 'form' lá do index.html

// opós definir o ' "strictNullChecks": true ', ele retorna um error, invés de colocar 'as HTMLInputElement', podemos fazer uma verificação, já que é apenas uma variavel
if(form){
  form.addEventListener('submit', event => { // adiconando um evento ao 'submeter o formulário
    event.preventDefault();
    // ao formulário ser enviado ele chama o controler e adiciona os elementos digitados pelos usuário a uma
    controller.adiciona();
  })
}else {
  throw Error('Não foi possivel inicializar a aplicação!')
}

