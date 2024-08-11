import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[changeColor]',
  standalone: true
})
export class NamDtvDirective {

  NamElement!:HTMLElement
  constructor(private LmnRsgVar:ElementRef)
		{
			this.NamElement = LmnRsgVar.nativeElement;
		}

    ngOnInit(){

    this.NamElement.innerHTML = "this is from directive";
			this.NamElement.style.color = "green";
      this.NamElement.style.background="cyan"
    }
}
