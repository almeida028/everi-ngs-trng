import { Component, Input,Output,EventEmitter, output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent {
@Input('title')title=""
@Input('detail')detail=""
@Input('commentVar')commentArr:string[]=[]
@Output() SelectMe =new EventEmitter()

SelectMeFnc(){
  this.SelectMe.emit(this.title)
}
}
