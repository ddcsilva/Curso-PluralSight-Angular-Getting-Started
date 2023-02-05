import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { ConverteParaEspacoPipe } from './shared/converte-para-espaco.pipe';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './produtos/lista-produtos.component';
import { StarComponent } from './shared/star.component';
import { DetalheProdutoComponent } from './produtos/detalhe-produto.component';
import { HomeComponent } from './home/home.component';

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
    HttpClientModule
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
