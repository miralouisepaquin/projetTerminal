import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prix-bateau',
  templateUrl: './prix-bateau.component.html',
  styleUrls: ['./prix-bateau.component.scss']
})
export class PrixBateauComponent implements OnInit {

  /*Valeur d'entrée pour la longueur du bateau provenant de la section info-bateau*/
  @Input() varLenght:string="";
  /*Valeur d'entrée pour les informations du bateau provenant de la de la section info-bateau*/
  @Input() varInfoBateau:string="";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : any {
    console.log(this.varLenght);
    console.log(this.varInfoBateau);
  }
     

}
