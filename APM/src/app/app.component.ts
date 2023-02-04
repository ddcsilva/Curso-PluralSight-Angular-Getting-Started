import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{ tituloPagina }}</h1>
      <pm-produtos></pm-produtos>
    </div>
  `
})
export class AppComponent {
  tituloPagina: string = 'Gestão de Produtos ACME';
}
