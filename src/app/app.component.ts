import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'projetTerminal';

  constructor() { }

  public varRef = "";
  public varLenght = "";

  ngOnInit(): void {
  }

  /*Fonction qui permet de prendre la référence et de la transmettre à tous les composants*/
  selectDuBateau(variable:any){
    this.varRef=variable;
		}
  /*Fonction qui permet de prendre la longueur du bateau et de la transmettre à tous les composants*/
  infosBateau(variable:any){
      this.varLenght=variable;
    }
}
