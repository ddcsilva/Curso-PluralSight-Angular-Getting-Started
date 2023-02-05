import { Injectable } from "@angular/core";
import { IProduto } from "./produtos";

@Injectable()
export class ProdutoService {
    obterProdutos(): IProduto[] {
        return [
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
        ]
    }
}