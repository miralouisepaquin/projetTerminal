import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-prix-bateau',
  templateUrl: './prix-bateau.component.html',
  styleUrls: ['./prix-bateau.component.scss']
})
export class PrixBateauComponent implements OnInit {

  /*Valeur d'entrée pour la longueur du bateau provenant de la section info-bateau*/
  @Input() varLenght:string="";
  /*Valeur d'entrée pour les informations du bateau provenant de la de la section info-bateau*/
  @Input() varInfoBateau = new Array;

  affichageDePrix="https://iwa2021.edriki.com/api/Item/Items?"; /*API pour la recherche d'informations sur le bateau grâce à la Référence*/
  public prixBateau="";

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
  }

  ngOnChanges() : any {
    console.log(this.varLenght);
    console.log(this.varInfoBateau);
    var infoPrix = "";
    this.http.get<any>(this.affichageDePrix+"length="+this.varLenght+"gvl="+this.varInfoBateau[0]+"&gvsl="+this.varInfoBateau[1]+"&ge="+this.varInfoBateau[2]+"&ss="+this.varInfoBateau[3]+"&gs="+this.varInfoBateau[4]).subscribe(response =>{	
      console.log(response.response.datas);
      infoPrix = response.response.datas;
      })
      return this.prixBateau= infoPrix;

  }
     

}
