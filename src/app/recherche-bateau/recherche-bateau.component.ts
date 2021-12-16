import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherche-bateau',
  templateUrl: './recherche-bateau.component.html',
  styleUrls: ['./recherche-bateau.component.scss']
})
export class RechercheBateauComponent implements OnInit {

  /*Valeur d'entrée de longueur provenant du composant infos-bateau*/
  @Input() varLenght:string="";
  /*Valeur d'entrée pour les informations du bateau provenant de la de la section info-bateau*/
  @Input() varInfoBateau:string="";
  /*Valeur de sortie de Référence qui va dans le composant infos-bateau*/
  @Output() varRef = new EventEmitter<String>();

  private minString = 3; /*variable pour la longueur minimum de caractère de recherche*/
  private maxString = 40; /*variable pour la longueur maximum de caractère de recherche*/
  public listeBateau : any /*liste pour afficher les bateau dans notre menu déroulant*/
  public lenghtBateau = "";/*variable pour la longueur du bateau*/
  rechercheDeBeateau="https://iwa2021.edriki.com/api/Boat/Search/"; /*API pour la recherche de bateau*/
  
  constructor(private http : HttpClient) { }

  ngOnInit(): void { }

  ngOnChanges() : String {
    var ref= this.varLenght;
    return this.lenghtBateau = ref;
  }

  /*Appel de l'API pour la recherche de bateau*/
  getData(event :any){
    var term=event.target.value;
    if(term.length >= this.minString && term.length <this.maxString){
      this.http.get<any>(this.rechercheDeBeateau+term).subscribe(response =>{
			  var liste = new Array;	  
			  response.response.datas.forEach(function (value:any){
			    var obj = {"ref":value.ref,"name":value.name};
			    liste.push(obj);
			  })
		    return this.listeBateau = liste;
		  })
    }
  }
	
  /*Fonction pour envoyer la Référence en Output*/
	selectionDuBateau(event :any){
		var ref=event.target.value;
    console.log(ref);
    return this.varRef.emit(ref);
	}  

}
