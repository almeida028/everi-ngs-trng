import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'
import { NewsPageComponent } from '../news-page/news-page.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NamScvService } from '../nam-scv.service';
import { NamDtvDirective } from '../nam-dtv.directive';



@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NewsPageComponent,FormsModule,NamDtvDirective],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  commentVar=""
  commentArr:any={}
  selectedNews=""

  SelectMeFnc(EvtRsgVar:string )
  {
    this.selectedNews=EvtRsgVar
  }


  constructor(public NavVap: Router,public namService:NamScvService,
    public UrlVap: ActivatedRoute) { }
 
   

  GotoPageFnc()
  {
    this.NavVap.navigate(["User/Navya/Mobile/87654345"],{
      replaceUrl:true,
      state:{OTPVak:2344}
    });
    
  }
  addCommentFnc(commentVav:NgModel)
  {
    if(this.commentArr[this.selectedNews])
      
      this.commentArr[this.selectedNews].push(this.commentVar)
  else
    this.commentArr[this.selectedNews]=[this.commentVar]
    commentVav.reset()
  
    
  }
}
