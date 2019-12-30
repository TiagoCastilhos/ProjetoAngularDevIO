import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.scss']
})
export class ListaProdutoComponent implements OnInit {
  produtos: Produto[]

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtosService.obterProdutos()
      .subscribe(
        r => this.produtos = r,
        e => console.log(e));
  }
}