import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { ConverteParaEspacoPipe } from './shared/converte-para-espaco.pipe';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './produtos/lista-produtos.component';
import { StarComponent } from './shared/star.component';
import { DetalheProdutoComponent } from './produtos/detalhe-produto.component';
import { HomeComponent } from './home/home.component';
import { DetalheProdutoGuard } from './produtos/detalhe-produto.guard';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListaProdutosComponent,
    ConverteParaEspacoPipe,
    StarComponent,
    DetalheProdutoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "produtos", component: ListaProdutosComponent },
      { 
        path: "produtos/:id", 
        canActivate: [DetalheProdutoGuard],
        component: DetalheProdutoComponent
       },
      { path: "home", component: HomeComponent },
      { path: "", redirectTo: "home", pathMatch: "full" },
      { path: "**", redirectTo: "home", pathMatch: "full" }
    ])
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class AppModule { }
