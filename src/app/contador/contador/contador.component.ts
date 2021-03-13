import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  titulo: string = 'Contador App';
  numero: number = 10;
  funcion: number = 10;
  acumulado: number = 10;
  base: number = 5;
  cantidad: number = 5;

  sumar(){
    this.funcion +=1;
  }
  restar(){
    this.funcion -=1;
  }

  acumulador( valor: number){
    this.acumulado += valor;

  }
  suma(){
    this.base += this.cantidad;
  }
  resta(){
    this.base -= this.cantidad;
  }

  manual(valor: number ){
    this.base += valor

  }

}
