import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { IPlanet } from './iplanet';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  
  constructor(
    private dataService: DataService
    ) { }
    
    // planeta: any;
    
    ngOnInit() {
      
    }
    
  planeta: any = [];
  count = 0;

  getPlanetas() {
    this.dataService.getPlanetas().subscribe(response => {
      console.log(response)
      const newCount = Math.floor(Math.random() * response.count).toString()

      console.log(newCount)
      this.dataService.getPlanetas(newCount).subscribe(res => {
        console.log(res)
        this.planeta = res;
      })
    })
  }

}
