import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { IPlanet } from './iplanet';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  planeta: any = [];  
  
  constructor(
    private dataService: DataService
  ) { }
      
  ngOnInit() {
    
  }

  getPlanetas() {
    this.dataService.getPlanetas().subscribe(planetas => {      
      const newCount = Math.floor(Math.random() * planetas.count).toString()
      
      this.dataService.getPlanetas(newCount).subscribe(planeta => {
        console.log(planeta)
        this.planeta = planeta;
      })
    })
  }

}
