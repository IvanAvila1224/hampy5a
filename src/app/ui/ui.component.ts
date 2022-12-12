import { Component, OnInit } from '@angular/core';
import { simpson_rule} from '../simpson_rule/simpson_rule';
import { T_distribution } from '../T_distribution/T_distribution';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  f: string= '';
  x0: number = 0;
  x1: number = 0;
  num_seg: number = 0;
  dof: number = 0;
  resultnumber: number = 0;
  resultString: string = '';
  TextSimpson: any;
  TextT: any;

  ngOnInit(): void {
  }

  Simpson_rule() {
    let myresult = 0;
    myresult = simpson_rule(this.f,this.x0, this.x1, this.num_seg, this.dof);
    this.resultnumber = myresult;
    this.TextSimpson = this.resultnumber;
  }

  T_distribution() {
    let myresult = 0;
    myresult = T_distribution(this.x1, this.dof);
    this.resultnumber = myresult;
    this.TextT = this.resultnumber;
  }

}
