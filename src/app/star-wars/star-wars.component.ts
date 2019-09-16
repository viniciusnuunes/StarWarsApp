import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { IPlanet } from './iplanet';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { IFilm } from './ifilm';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  planeta: any = [];
  filme: any[] = []
  listaDefilmes: string[];
  moradores: string[];
  
  constructor(
    private dataService: DataService
  ) { }
      
  ngOnInit() {

    console.log('Iniciando')
    this.getPlaneta()
    
  }

  sortearNumero() {
    return Math.floor(Math.random() * 61).toString()
  }

  getPlaneta() {
    this.filme = []
    this.dataService.getPlanetas(this.sortearNumero()).subscribe(data => {
      this.planeta = data
      this.listaDefilmes = data.films
      
      for (let f = 0; f < this.listaDefilmes.length; f++) {
        this.dataService.getFilmes(this.listaDefilmes[f]).subscribe(name => {
          console.log(name.title)
          this.filme.push(name.title)
          console.log(this.filme)
        })
      }
    })
  }

  // Método para pegar a quantidade de registros dinamicamente
  // getPlaneta() {
  //   this.dataService.getPlanetas().subscribe(planetas => {      
  //     const newCount = this.sortearNumero(planetas.count)
  //     console.log('Planeta nº: ' + newCount)
      
  //     this.dataService.getPlanetas(newCount).subscribe(planeta => {
  //       console.log(planeta)
  //       this.planeta = planeta;
  //     })
  //   })
  // }

}
