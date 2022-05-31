import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss']
})
export class HeaderFooterComponent implements OnInit {
  title = 'newsmart'
  myimage:string = "assets/images/C:\Users\Dell\OneDrive\Desktop\cart\shoppingCart\src\assets\images\img1.jpg"

  form!:FormGroup
  k=1;
  j=1;
  laptopTotal=0;
  notebookTotal=0;
  penTotal=0;
  grandTotal=0;

  constructor(private formbuilder:FormBuilder) { }


  ngOnInit(): void {
    this.form = this.formbuilder.group({
      quantity:['']
 })
 this.laptopTotal=this.i*20000
 this.notebookTotal=this.j*100
 this.penTotal=this.k*150
 this.grandTotal=this.laptopTotal+this.notebookTotal+this.penTotal

  }

  laptopQuantity:number=1;
  i=1
  plus1(){
    
    if(this.i !=5){
      this.i++;
      this.laptopQuantity=this.i;
    }
    this.laptopTotal=this.laptopQuantity*20000
    this.grandTotal=this.laptopTotal+this.notebookTotal+this.penTotal
  }

  minus1(){
    
    if(this.i !=1){
      this.i--;
      this.laptopQuantity=this.i;
    }
    this.laptopTotal=this.laptopQuantity*20000
    this.grandTotal=this.laptopTotal+this.notebookTotal+this.penTotal
  }

  notebookQuantity:number=1;
  i1=1
  plus2(){
    
    if(this.j !=5){
      this.j++;
      this.notebookQuantity=this.j;
    }
    this.notebookTotal=this.notebookQuantity*100
    this.grandTotal=this.laptopTotal+this.notebookTotal+this.penTotal
  }

  minus2(){
    
    if(this.j !=1){
      this.j--;
      this.notebookQuantity=this.j;
    }
    this.notebookTotal=this.notebookQuantity*100
    this.grandTotal=this.laptopTotal+this.notebookTotal+this.penTotal
  }

  penQuantity:number=1;
  i2=1
  plus3(){
    
    if(this.k !=5){
      this.k++;
      this.penQuantity=this.k;
    }
    this.penTotal=this.penQuantity*150
    this.grandTotal=this.laptopTotal+this.notebookTotal+this.penTotal
  }

  minus3(){
    
    if(this.k !=1){
      this.k--;
      this.penQuantity=this.k;
    }
    this.penTotal=this.penQuantity*150
    this.grandTotal=this.laptopTotal+this.notebookTotal+this.penTotal
  }



}

