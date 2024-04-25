// tendo que diferenciar de quem chama esa função, caso seja o "mensagemView" será esperado uma string como parametro, e caso contratio será esperado um "Negociacoes"
// para isso eu uso o 'Generics'
// colocando uma letra qualquer quando criamos a classe, sendo essa letra qualquer tipo, que será definida ao extender a classe view e definindo o tipo

// para que não seja visivel do error apenas em ram time, não permitimos que seja possivel instancair a classe viw adicionando o 'abstract'
export abstract class View<T> { // tornando a classe gererica
  
  // criando um elemento do tipo HTMLElement
  // como as classes "mesagemView" e "negociacoesView" terão que acessar "elemento"
  // para isso usamos o método 'proteced', assim apenas as classes que extenderem de 'View' poderão tocar 'elemento'
   protected elemento: HTMLElement;
   private escapar = false;
  
  // recebendo uma um selecto HTML
  // tornando 'escapar' um argumento opcional a ser passado
  // apenas são aceitos passar valores opcionais como parametrono construtor se for os ultimos numero, não pode passar um parametro required (obrigatório) após um valor opcional
  constructor(seletor: string, escapar?: boolean) {
    
    // atribuindo o calor do seletor ao 'elemen'
    const elemen = document.querySelector(seletor)
    if(elemen){ // verificando se elemen é um valor válido
      // atribuindo ao 'this.elemento' o 'element', porem, o 'elemen'  retorna apenAS "Element", e o "this.elemento" retorna HTMLElement, tendo que utilizar o "as HTMLElement"
      this.elemento = elemen as HTMLElement
    }else {
      throw Error(`Seletor ' ${seletor} ' não existe no DOM. Verifique!`)
    }


    if(escapar){ // verificando se foi passado algum argumento em escapar
      this.escapar = escapar // caso escapar seja true ele atribuit o 'this.scapar' o escapar passado pelo desenvolvedor
    }
  }

  // sendo a função que recebe a mensagem e passa para o template()
  // método para renderizar o que tem dentro de 'template' para o html do site
  public update(model: T): void {
    // criando a variavel template que chamará o template passando a mensagem
    let template = this.template(model)

    // caso o escapar seja true
    if(this.escapar){
      // dentro do replace colocaremos um expressão regular para remover tudo que estiver dentro do script e substituindo por nada
      template = template.replace(/<script>[\s\S]*?<\/script>/, '')
    }
    
    // dizendo para a o HTML de mensagem (tag), que irá receber o template (que chama a função template com a mesgem por parametro)
    this.elemento.innerHTML = template
  }

  
  // definindo o método como 'abstract', isso quer dizer que é reponsabilidade da classe filho implementar esse método, se não dará erro em tempo de desenvolvimento

  // E para que não seja possivel nenhuma insancia de 'negociacoesView' ou 'mensagemView' irão conseguir utilizar o método 'template' definimos ela como 'protected' assim apenas seus filhos terão acesso
  protected abstract template(model: T): string;
}