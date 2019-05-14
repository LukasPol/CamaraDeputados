import { Component, OnInit } from '@angular/core';
import { DeputadoService } from '../modelo/deputado.service';

@Component({
  selector: 'app-lista-deputado',
  templateUrl: './lista-deputado.component.html',
  styleUrls: ['./lista-deputado.component.css']
})
export class ListaDeputadoComponent implements OnInit {

  deputados: any[];
  deputado: any;

  constructor(private derSer: DeputadoService) {
    this.deputados = [];
   }

  ngOnInit() {
    this.obterDeputados();
  }

  obterDeputados() {
    this.derSer.obterDeputados().subscribe(dados => {
      this.deputados = dados['dados'];
    });
  }

  consultaId(id: number, deps) {
    this.derSer.consultaId(id).subscribe(dados => {
      this.deputado = dados['dados'];
    });
    deps.style.opacity = .5;
  }

  escondeJanela(div, deps) {
    div = 'none' ;
    this.deputado = undefined;
    deps.style.opacity = .1;
  }

}
