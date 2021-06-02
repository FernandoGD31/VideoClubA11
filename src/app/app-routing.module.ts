// app.routing.ts
import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { InfoPeliculaComponent } from './info-pelicula/info-pelicula.component';
import { CarritoComponent } from './carrito/carrito.component';


const routes: Routes = [
    {
        path:'',
        component: HomeComponent         
    },
    {
        path:'info/:img/:titulo',
        component: InfoPeliculaComponent         
    },

    {
        path:'contacto', component: ContactoComponent
    },
    {
        path:'login', component: LoginComponent
    },
    {
        path:'carrito', component: CarritoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {} 
