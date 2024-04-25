export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemen = document.querySelector(seletor);
        if (elemen) {
            this.elemento = elemen;
        }
        else {
            throw Error(`Seletor ' ${seletor} ' não existe no DOM. Verifique!`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
