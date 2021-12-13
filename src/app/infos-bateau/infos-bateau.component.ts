import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infos-bateau',
  templateUrl: './infos-bateau.component.html',
  styleUrls: ['./infos-bateau.component.scss']
})
export class InfosBateauComponent implements OnInit {

  affichageDeBeateau="https://iwa2021.edriki.com/api/Boat/ByRef/";
  public GVSL : any;
  public GVL : any;
  public GVE : any;
  public GM : any;
  public GE : any;
  public SS : any;
  public SA : any;
  public GS : any;
  constructor(private http : HttpClient) { }

  @Input() varRef:string="";
  @Output() varLenght = new EventEmitter<String>();

  ngOnInit(): void {
  }

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
      this.varLenght.emit(response.response.datas.lengthm);
      })
      return this.GVL && this.GVE && this.GM && this.GE && this.SS && this.SA && this.GS;
  }

}
