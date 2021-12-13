import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recherche-bateau',
  templateUrl: './recherche-bateau.component.html',
  styleUrls: ['./recherche-bateau.component.scss']
})
export class RechercheBateauComponent implements OnInit {

  @Output() varRef = new EventEmitter<String>();

  private minString = 3;
  private maxString = 40;
  public listeBateau : any
  showMe: boolean = false;
  public lenghtBateau = null;
  rechercheDeBeateau="https://iwa2021.edriki.com/api/Boat/Search/";
  affichageDeBeateau="https://iwa2021.edriki.com/api/Boat/ByRef/";
  
  constructor(private http : HttpClient) { }

  ngOnInit(): void { }

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
	
	selectionDuBateau(event :any){
		var ref=event.target.value;
    console.log(ref);
      this.http.get<any>(this.affichageDeBeateau+ref).subscribe(response =>{		
        this.lenghtBateau = response.response.datas.lengthm;
        this.varRef.emit(ref);
        return this.lenghtBateau;
			})
	}  

}
