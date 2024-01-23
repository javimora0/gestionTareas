import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('parametro'));
    });
  }

}
