import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  login(){
    this.navCtrl.setRoot('CategoriasPage') // vai ficar como página corrente
  }

  ionViewWillEnter() { //quando entrar na pagina desabilito o menu
    this.menu.swipeEnable(false);
  }
    
  ionViewDidLeave() { //quando sair da pagina habilito o menu
    this.menu.swipeEnable(true);
  }



}
