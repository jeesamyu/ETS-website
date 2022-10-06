import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  //firstname
  a11 ="";
  getName = "";

  //lastname
  a1="";
  getName1= "" ;

  //age
  a2="";
  age1="";

  //class
  a3="";
  class1="";

  //phonenumber
  a4="";
  pnumber="";

  //email
  a5="";
  emails="";

  //address
  a6="";
  add="";


  string=null;

  reset(){
    this.a11='';
    this.a1='';
    this.a2='';
    this.a3='';
    this.a4='';
    this.a5='';
    this.a6='';

    this.getName='';
    this.getName1='';
    this.age1='';
    this.class1='';
    this.pnumber='';
    this.emails='';
    this.add='';
  }
 

  changeName(){
    this.a11=this.getName
    this.a1=this.getName1
    this.a2=this.age1
    this.a3=this.class1
    this.a4=this.pnumber
    this.a5=this.emails
    this.a6=this.add
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
