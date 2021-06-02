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
        title:'Card1',
        contenido:'cont1',
        img:'assets/img/caratulas/1.jpg'
      },
      {
        title:'Card2',
        contenido:'cont2',
        img:'assets/img/caratulas/2.jpg'
      },
      {
        title:'Card3',
        contenido:'cont1',
        img:'assets/img/caratulas/3.jpg'
      },
      {
        title:'Card4',
        contenido:'cont4',
        img:'assets/img/caratulas/4.jpeg'
      },
      {
        title:'Card5',
        contenido:'cont5',
        img:'assets/img/caratulas/5.jpg'
      },
      {
        title:'Card5',
        contenido:'cont5',
        img:'assets/img/caratulas/6.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/7.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/8.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/9.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/10.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/11.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/12.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/13.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/14.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/15.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/16.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/17.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/18.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/19.jpg'
      },
      {
        title:'Card6',
        contenido:'cont6',
        img:'assets/img/caratulas/20.jpg'
      },
      
    ]
  }

}
