import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service'

@Component({
  selector: 'app-prime',
  templateUrl: './prime.component.html',
  styleUrls: ['./prime.component.css']
})

export class PrimeComponent implements OnInit {
  myVar: number= 6 | 10;
  textData: string= 'Samsung';
  boxtext: string="";
  records={};

  constructor(private recordsSrv: RecordsService) { 
    setTimeout(() => {
      this.textData='Mercedes';
    }, 3000);
  }

  ngOnInit() {
    this.records=this.recordsSrv.getdata();
  }

  invokeSource(e: any){
    console.log("Invoked from the UI - Target to Source Data binding");
    console.log(e.target, ' -- ', e.type);
    console.log(this.records);
  }

  assignBox(e: any){
    //console.log(e.target.value);
    this.boxtext=e.target.value;
  }
}
