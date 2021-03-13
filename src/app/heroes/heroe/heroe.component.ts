import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nombre : string = 'IronMan';
  edad   : number = 45;

  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }
  // regresa un string
  obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`
  }
// Concepto de one way data binding - enlazado en una sola vía
cambiarNombre():void{
  this.nombre = 'Spiderman';
}
cambiarEdad():void{
  this.edad = 30;
}

}
