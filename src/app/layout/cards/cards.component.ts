import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  contador:number= 0 ;

  incremento(){
    this.contador= this.contador+1;
  }
  decremento(){
    if(this.contador==0) return
    this.contador=this.contador-1;
  }
}
