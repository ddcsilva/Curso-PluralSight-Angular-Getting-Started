import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppComponent } from './app.component';
import { ListaProdutosComponent } from './produtos/lista-produtos.component';
import { StarComponent } from './shared/star.component';

import { ConverteParaEspacoPipe } from './shared/converte-para-espaco.pipe';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    ListaProdutosComponent,
    ConverteParaEspacoPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
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
