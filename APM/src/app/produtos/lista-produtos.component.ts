import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProdutoService } from "./produto.service";
import { IProduto } from "./produtos";

@Component({
    templateUrl: "./lista-produtos.component.html",
    styleUrls: ["./lista-produtos.component.css"]
})
export class ListaProdutosComponent implements OnInit, OnDestroy {
    constructor(private produtoService: ProdutoService) { }

    tituloPagina: string = "Lista de Produtos";
    larguraImagemProduto: number = 50;
    margemImagemProduto: number = 2;
    exibirImagens: boolean = false;
    mensagemErro: string = "";
    assinatura!: Subscription;

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
        this.assinatura = this.produtoService.obterProdutos().subscribe({
            next: produtos => {
                this.produtos = produtos;
                this.produtosFiltrados = this.produtos;
            },
            error: erro => this.mensagemErro = erro
        });
    }

    ngOnDestroy(): void {
        this.assinatura.unsubscribe();
    }

    aposClassificacaoClicada(mensagem: string): void {
        this.tituloPagina = "Lista de Produto: " + mensagem;
    }
}