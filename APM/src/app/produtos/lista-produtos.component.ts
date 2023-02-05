import { Component, OnInit } from "@angular/core";
import { ProdutoService } from "./produto.service";
import { IProduto } from "./produtos";

@Component({
    selector: "pm-produtos",
    templateUrl: "./lista-produtos.component.html",
    styleUrls: ["./lista-produtos.component.css"]
})
export class ListaProdutosComponent implements OnInit {
    constructor(private produtoService: ProdutoService) { }

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

    produtos: IProduto[] = [];

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
        this.produtos = this.produtoService.obterProdutos();
        this.produtosFiltrados = this.produtos;
    }

    aposClassificacaoClicada(mensagem: string): void {
        this.tituloPagina = "Lista de Produto: " + mensagem;
    }
}