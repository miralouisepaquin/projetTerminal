import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-infos-bateau',
  templateUrl: './infos-bateau.component.html',
  styleUrls: ['./infos-bateau.component.scss']
})
export class InfosBateauComponent implements OnInit {

  affichageDeBeateau="https://iwa2021.edriki.com/api/Boat/ByRef/"; /*API pour la recherche d'informations sur le bateau grâce à la Référence*/
  public GVSL : any; /*variable pour longueur GVSL*/
  public GVL : any; /*variable pour longueur GVL*/
  public GVE : any; /*variable pour longueur GVE*/
  public GM : any; /*variable pour longueur GM*/
  public GE : any; /*variable pour longueur GE*/
  public SS : any; /*variable pour longueur SS*/
  public SA : any; /*variable pour longueur SA*/
  public GS : any; /*variable pour longueur GS*/ 

  public parametres = new HttpParams();
  public infobateau = new Array;
  

  
  constructor(private http : HttpClient) { }

  /*Valeur d'entrée pour la référence provenant de la recherche de bateau*/
  @Input() varRef:string="";
  /*Valeur de sortie pour la longueur du bateau allant dans recherche bateau*/
  @Output() varLenght = new EventEmitter<String>();
  /*Valeur de sortie pour les infos du bateau allant dans recherche bateau*/
  @Output() varInfoBateau = new EventEmitter<any>();


  ngOnInit(): void {
  }

  /*Fonction appelant l'API de la recherche d'infos du bateau et qui renvoit les différentes longueurs de voile*/
  ngOnChanges() : Input {
    var ref= this.varRef;

    this.http.get<any>(this.affichageDeBeateau+ref).subscribe(response =>{	
      this.GVSL = response.response.datas.sails.gvsl;
      this.GVL = response.response.datas.sails.gvl;
      this.GVE = response.response.datas.sails.gve;
      this.GM = response.response.datas.sails.gm;
      this.GE = response.response.datas.sails.ge;
      this.SS = response.response.datas.sails.ss;
      this.SA = response.response.datas.sails.sa;
      this.GS = response.response.datas.sails.gs;  
      this.infobateau=[];
      this.infobateau=[this.GVL, this.GVSL, this.GVE, this.GM, this.GE, this.SS, this.SA, this.GS];   
      this.varLenght.emit(response.response.datas.lengthm);
      this.varInfoBateau.emit(this.infobateau);
      })
      return this.GVL && this.GVE && this.GM && this.GE && this.SS && this.SA && this.GS;
  }

  envoyerInfosBateau()
  {
    
  }

}
