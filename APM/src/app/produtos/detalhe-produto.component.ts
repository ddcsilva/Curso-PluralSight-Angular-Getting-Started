import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  tituloPagina: string = "Detalhes do Produto";

  constructor() { }

  ngOnInit(): void {
  }

}
