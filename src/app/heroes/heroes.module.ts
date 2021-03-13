import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

// el objetico de los modulos es agrupar los componenetes que tienen sentido entre si
// los modulos encapsulan las Cosas
// y la otra es la carga peresoza solo carga lo que necesita cargados bajo demanda
@NgModule({
    // en las declaraciones van nuestros componentes pipes etc 
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // que cosas quiero que sean visibles fuera de este modulo 
    exports:[
        ListadoComponent
    ],
    // a qui van modulos 
    imports:[
        CommonModule // a qui se encuentran directivas de angular e.j ngFor nfIf etc
    ],

})
export class HeroesModule{

}