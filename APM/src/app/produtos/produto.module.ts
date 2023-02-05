import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ListaProdutosComponent } from './lista-produtos.component';
import { DetalheProdutoComponent } from './detalhe-produto.component';

import { ConverteParaEspacoPipe } from '../shared/converte-para-espaco.pipe';
import { DetalheProdutoGuard } from './detalhe-produto.guard';

@NgModule({
  declarations: [
    ListaProdutosComponent,
    DetalheProdutoComponent,
    ConverteParaEspacoPipe
  ],
  imports: [
    RouterModule.forChild([
      { path: "produtos", component: ListaProdutosComponent },
      {
        path: "produtos/:id",
        canActivate: [DetalheProdutoGuard],
        component: DetalheProdutoComponent
      }
    ]),
    SharedModule
  ]
})
export class ProdutoModule { }
