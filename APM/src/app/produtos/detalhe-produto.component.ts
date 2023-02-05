import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from './produto.service';
import { IProduto } from './produtos';

@Component({
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  tituloPagina: string = "Detalhes do Produto";
  mensagemErro = "";
  produto: IProduto | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private produtoService: ProdutoService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    if (id) {
      this.obterProduto(id);
    }
  }

  obterProduto(id: number): void {
    this.produtoService.obterProduto(id).subscribe({
      next: produto => this.produto = produto,
      error: erro => this.mensagemErro = erro
    });
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }

}
