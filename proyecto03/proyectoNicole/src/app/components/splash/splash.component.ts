import { Component } from '@angular/core';
import { ResourcesService } from '../../../service/resources.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  constructor(private resourcesService: ResourcesService, private router: Router) {}

  ngOnInit() {
    this.resourcesService.getData().subscribe(response => {
      
      let potterhead = localStorage.getItem("peliculas");
      if(!potterhead) {
        localStorage.setItem("peliculas", JSON.stringify(response));
      }

    })

  
    }
}
