// home.ts
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results= 0;
  name:string;
  whipped:boolean;
 chocolate:boolean;
  whipp:string;
  choco:string;
  price:number;
  value = 0;
  constructor(public navCtrl: NavController) {
  this.price= 10;
  }
  onclear(){
    this.results = 0;
    this.choco = "";
    this.whipp='';
    this.whipped=false;
    this.chocolate=false;
    this.name='';

  }
  onadd(){
   this.results +=1;
   console.log(this.results); 
  }
  onsub(){
  this.results -=1;
  console.log(this.results);
  }
  onOrder(){
    alert('Please enter your name')
      this.value=1;
      this.price=this.price*this.results;
    }

    onchocolate(){
      if(this.choco){
        this.price+=5;
        this.choco = "+Chocolate";
      }else{
        this.choco = "";
    }}
     onwhipped(){
        if(this.whipp){
          this.price+=5;
        this.whipp='+WhippedCream';
      }else{this.whipp='';
        
      }
     }
    }