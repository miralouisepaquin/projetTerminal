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

  selectDuBateau(variable:any){
    this.varRef=variable;
		}
  infosBateau(variable:any){
      this.varLenght=variable;
    }
}
