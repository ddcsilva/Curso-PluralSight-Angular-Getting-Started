import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from './produtos';

@Component({
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  tituloPagina: string = "Detalhes do Produto";
  produto: IProduto | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.tituloPagina += `: ${id}`;
  }

  voltar(): void {
    this.router.navigate(['/produtos']);
  }

}
