import { Component } from '@angular/core';
import { NamScvService } from '../nam-scv.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
constructor(public namService:NamScvService){
  
}
}
