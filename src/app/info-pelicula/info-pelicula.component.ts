import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.component.html',
  styleUrls: ['./info-pelicula.component.css']
})
export class InfoPeliculaComponent implements OnInit {
  @Input() dataEntrante:any;
  public id:any;
  public image!: string;
  public titulo!: string;
  public desc!: string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap;
     // console.log(params.img); //Esto es lo que llega a info por parametros
      this.image = params.img;
      this.titulo = params.titulo;
      this.desc = params.desc;
    })


    
    

  }

}
