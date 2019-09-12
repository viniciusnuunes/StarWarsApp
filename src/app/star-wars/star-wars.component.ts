import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { IPlanet } from './iplanet';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  planeta: IPlanet[];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    
  }

  getPlanetas() {
    this.dataService.getPlanetas().subscribe( response => {
      console.log(response)
      this.planeta = response
      console.log(this.planeta)
    })
  }

}
