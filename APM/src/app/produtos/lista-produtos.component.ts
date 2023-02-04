import { Component } from "@angular/core";

@Component({
    selector: "pm-produtos",
    templateUrl: "./lista-produtos.component.html"
})
export class ListaProdutosComponent {
    tituloPagina: string = "Lista de Produtos";
    larguraImagemProduto: number = 50;
    margemImagemProduto: number = 2;
    produtos: any[] = [
        {
            "id": 1,
            "nomeProduto": "Leaf Rake",
            "codigoProduto": "GDN-0011",
            "dataLancamento": "March 19, 2021",
            "descricao": "Leaf rake with 48-inch wooden handle.",
            "preco": 19.95,
            "classificacao": 3.2,
            "imagem": "assets/images/leaf_rake.png"
          },
          {
            "id": 2,
            "nomeProduto": "Garden Cart",
            "codigoProduto": "GDN-0023",
            "dataLancamento": "March 18, 2021",
            "descricao": "15 gallon capacity rolling garden cart",
            "preco": 32.99,
            "classificacao": 4.2,
            "imagem": "assets/images/garden_cart.png"
          }
    ];
}