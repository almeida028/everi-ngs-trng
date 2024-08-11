import { Component } from '@angular/core';
import {NamScvService} from '../nam-scv.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  constructor(
    public namService: NamScvService,
    public NavVap: Router
  ){
 
}

}
