import { Component } from "@angular/core";

@Component({
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{tituloPagina}}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/home'>Home</a></li>
          <li><a class='nav-link' routerLinkActive='active' routerLink='/produtos'>Lista de Produtos</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tituloPagina: string = 'Gestão de Produtos ACME';
}
