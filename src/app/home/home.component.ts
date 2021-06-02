import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public listadeCaratulas:Array<any> = []

  ngOnInit(): void {
    this.listadeCaratulas = [
      {
        title:'GLASS',
        genero:'Suspenso',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/1.jpg'
      },
      {
        title:'EL VICIO DEL PODER',
        genero:'Drama',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/2.jpg'
      },
      {
        title:'UNO MAS DE LA FAMILIA',
        genero:'Drama',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/3.jpg'
      },
      {
        title:'LOS LUNNIS',
        genero:'Suspenso',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/4.jpeg'
      },
      {
        title:'DIOS NO ESTA MUERTO',
        genero:'Drama',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/5.jpg'
      },
      {
        title:'CREED II',
        genero:'Acción',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/6.jpg'
      },
      {
        title:'GREEN BOOK',
        genero:'Drama',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/7.jpg'
      },
      {
        title:'CardTHE PRODIGY6',
        genero:'Terror',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/8.jpg'
      },
      {
        title:'MARIA REINA DE ESCOCIA',
        genero:'Drama',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/9.jpg'
      },
      {
        title:'LA LEGO PELICULA 2',
        genero:'FAMILAR',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/10.jpg'
      },
      {
        title:'ALITA',
        genero:'Acción',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/11.jpg'
      },
      {
        title:'FELIZ DIA DE TU MUERTE 2',
        genero:'Terror',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/12.jpg'
      },
      {
        title:'VIUDA NEGRA',
        genero:'Acción',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/13.jpg'
      },
      {
        title:'GREENLAND',
        genero:'Suspenso',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/14.jpg'
      },
      {
        title:'LA MALDICION',
        genero:'Terror',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/15.jpg'
      },
      {
        title:'JUNGLE CRUISE',
        genero:'Acción',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/16.jpg'
      },
      {
        title:'UN LUGAR TRANQUILO 2',
        genero:'Terror',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/17.jpg'
      },
      {
        title:'TOP GUN',
        genero:'Acción',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/18.jpg'
      },
      {
        title:'JOJO RABBIT',
        genero:'Comedia',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/19.jpg'
      },
      {
        title:'EL FARO',
        genero:'Suspenso',
        precio:'$50.00',
        desc:'David Dunn busca mantenerse un paso por delante de la ley mientras imparte justicia en las calles de Filadelfia. Sus talentos especiales pronto lo colocan en un curso de colisión con la Bestia, un loco psicótico que tiene una fuerza sobrehumana y 23 personalidades distintas.',
        img:'assets/img/caratulas/20.jpg'
      },
      
    ]
  }

}
