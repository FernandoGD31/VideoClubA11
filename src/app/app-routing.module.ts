// app.routing.ts
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoPeliculaComponent } from './info-pelicula/info-pelicula.component';

import { AppComponent } from './app.component';


const routes: Routes = [
    {
        path:'',
        component: HomeComponent         
    },
    {
        path:'info/:img/:titulo',
        component: InfoPeliculaComponent         
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {} 