import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  // el constructor se inicializa antes que el componente este renderizado

  constructor() { }


  // generalmente en el ngOnInit se utiliza para inicializar servicios peticiones 
  ngOnInit(): void {
  }

  heroes: string[] = ['Hulk','Spiderman','Ironman','Thor' ,'Capitán América'];

  heroesBorados: string[] = [];



  // mi solucion
  borrarHeroe( i: number):void {
    this.heroesBorados.push(this.heroes[i]);
    this.heroes.splice(i,1);
  }

  // revivir heroe
  revivirHeroe(i: number):void{
    this.heroes.push(this.heroesBorados[i]);
    this.heroesBorados.splice(i,1);
  }
  // solucion vista de otros estudiantes
  // deletedHeroes: string[] = [];
 
  // deleteHero(i: number): void {
  //   this.deletedHeroes.push(this.heroes[i]);
  //   this.heroes.splice(i, 1);
  // }

}
