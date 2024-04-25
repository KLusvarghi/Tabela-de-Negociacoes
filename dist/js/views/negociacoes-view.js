import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
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
            `;
        }).join('')}
        </tbody>
      </table>
    `;
    }
    formatDate(date) {
        return new Intl.DateTimeFormat().format(date);
    }
}
