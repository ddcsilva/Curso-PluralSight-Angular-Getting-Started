import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, tap, throwError, map } from "rxjs";
import { IProduto } from "./produtos";

@Injectable({
    providedIn: "root"
})
export class ProdutoService {
    private urlProdutos = "api/produtos/produtos.json";
    constructor(private http: HttpClient) { }

    obterProdutos(): Observable<IProduto[]> {
        return this.http.get<IProduto[]>(this.urlProdutos).pipe(
            tap(dados => console.log("Todos os Produtos", JSON.stringify(dados))),
            catchError(this.emitirErro)
        );
    }

    obterProduto(id: number): Observable<IProduto | undefined> {
        return this.obterProdutos()
          .pipe(
            map((products: IProduto[]) => products.find(p => p.id === id))
          );
      }

    private emitirErro(erro: HttpErrorResponse): Observable<never> {
        // Em um aplicativo do mundo real, podemos enviar o servidor para alguma infraestrutura de registro remoto
        // ao invés de apenas logar no console
        let mensagemErro = '';
        if (erro.error instanceof ErrorEvent) {
            // Ocorreu um erro do lado do cliente ou da rede. Trate-o de acordo.
            mensagemErro = `Um erro ocorreu: ${erro.error.message}`;
        } else {
            // O back-end retornou um código de resposta malsucedido.
            // O corpo da resposta pode conter pistas sobre o que deu errado
            mensagemErro = `Server returned code: ${erro.status}, error message is: ${erro.message}`;
        }
        console.error(mensagemErro);
        return throwError(() => mensagemErro);
    }
}