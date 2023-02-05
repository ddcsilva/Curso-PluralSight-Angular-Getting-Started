import { Component, OnInit } from "@angular/core";
import { IProduto } from "./produtos";

@Component({
    selector: "pm-produtos",
    templateUrl: "./lista-produtos.component.html",
    styleUrls: ["./lista-produtos.component.css"]
})
export class ListaProdutosComponent implements OnInit {
    tituloPagina: string = "Lista de Produtos";
    larguraImagemProduto: number = 50;
    margemImagemProduto: number = 2;
    exibirImagens: boolean = false;

    private _filtro: string = "";
    get filtro(): string {
        return this._filtro;
    }

    set filtro(valor: string) {
        this._filtro = valor;
        console.log("In Setter: ", valor);
        this.produtosFiltrados = this.filtrar(valor)
    }

    produtosFiltrados: IProduto[] = [];

    produtos: IProduto[] = [
        {
            "id": 1,
            "nomeProduto": "Ancinho",
            "codigoProduto": "GDN-0011",
            "dataLancamento": "March 19, 2021",
            "descricao": "Ancinho de folha com alça de madeira de 48 polegadas.",
            "preco": 19.95,
            "classificacao": 3.2,
            "imagem": "assets/images/leaf_rake.png"
        },
        {
            "id": 2,
            "nomeProduto": "Carrinho de Jardinagem",
            "codigoProduto": "GDN-0023",
            "dataLancamento": "March 18, 2021",
            "descricao": "Carrinho de Jardinagem com capacidade para 15 galões",
            "preco": 32.99,
            "classificacao": 4.2,
            "imagem": "assets/images/garden_cart.png"
        }
    ];

    filtrar(valorFiltro: string) : IProduto[] {
        valorFiltro = valorFiltro.toLocaleLowerCase();
        return this.produtos.filter((produto: IProduto) => 
            produto.nomeProduto.toLocaleLowerCase().includes(valorFiltro)
        );
    }
    
    alterarVisibilidadeImagem(): void {
        this.exibirImagens = !this.exibirImagens;
    }

    ngOnInit(): void {
        this.filtro = "Carrinho";
    }

    aposClassificacaoClicada(mensagem: string): void {
        this.tituloPagina = "Lista de Produto: " + mensagem;
    }
}