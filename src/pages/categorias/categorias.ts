import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categoria.dto';



@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  itens: CategoriaDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() { // quando a pagina for carregada
    this.categoriaService.findAll()
    .subscribe(response => {
      this.itens = response;
    },
    error => {
      console.log(error);
    });
  }


  // trabalharRetorno(response){
  //   console.log(response);
  // }

}
