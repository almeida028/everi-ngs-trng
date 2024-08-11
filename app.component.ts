// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css',
// })
// export class AppComponent {
//   title = 'Tutorial';
//   type = 'Good';
//   colorArray = ['yellow', 'cyan', 'pink', 'red'];
//   currentColorIndex = 0;
//   currentColor = this.colorArray[this.currentColorIndex];

//   constructor(public httpConnection: HttpClient) {
//     this.httpConnection.get("https://jsonplaceholder.typicode.com/users")
//     .subscribe(ResRsgVar => {
//       console.log(ResRsgVar)
//     })
//   }


//   ngOnInit() {
//     setInterval(() => {
//       this.currentColorIndex =
//         (this.currentColorIndex + 1) % this.colorArray.length;
//       this.currentColor = this.colorArray[this.currentColorIndex];
//     }, 1000);
//   }
//   todoArray = [
//     'Play cricket', 
//     'watch movie', 
//     'meditation'
//   ];

//   formInput = {
//     nameVar: '',
//     numVar: '',
//   };
//   jiraArray = [
//     {
//       assigned: 'true',
//       assignedTo: 'jayanth',
//       description: 'qwero',
//       type: 'ToDo',
//     },
//     {
//       assigned: 'true',
//       assignedTo: 'sriya',
//       description: 'qwertyo',
//       type: 'ToDo',
//     },
//     {
//       assigned: 'true',
//       assignedTo: 'riya',
//       description: 'wertyu',
//       type: 'ToDo',
//     },
//     {
//       assigned: 'true',
//       assignedTo: 'sujan',
//       description: 'werty',
//       type: 'ToDo',
//     },
//   ];

//   prodArray = [
//     {
//       name: 'Sujan',
//       prod: 'Home theatre',
//       cost: 20000,
//     },
//     {
//       name: 'Jayanth',
//       prod: 'Home theatre',
//       cost: 2000,
//     },
//     {
//       name: 'Jayanth',
//       prod: 'Home theatre',
//       cost: 20000,
//     },
//     {
//       name: 'Jayanth',
//       prod: 'Home theatre',
//       cost: 20000,
//     },
//     {
//       name: 'Jayanth',
//       prod: 'Home theatre',
//       cost: 10000,
//     },
//   ];

//   sortByName(a: any, b: any) {
//     return a.name.localeCompare(b.name);
//   }

//   sortByCost(a: any, b: any) {
//     return a.cost - b.cost;
//   }

//   filterCost() {
//     return this.prodArray.filter((itmVar) => itmVar.cost > 2000);
//   }

//   getTotalCost() {
//     var total = 0;
//     for (let i = 0; i < this.prodArray.length; i++) {
//       total += this.prodArray[i].cost;
//     }
//     return total;
//   }

//   toShort(a: number): string {
//     let suffix = '';
//     let num = 0;

//     if (a >= 10000000) {
//       suffix = 'Cr';
//       num = a / 10000000;
//     } else if (a >= 100000) {
//       suffix = 'L';
//       num = a / 100000;
//     } else if (a >= 1000) {
//       suffix = 'K';
//       num = a / 1000;
//     } else {
//       return a.toString();
//     }

//     return num + suffix;
//   }
//   clickFnc() {
//     alert('why did you click me');
//   }

//   draggedItem: any;

//   onDragStart(event: DragEvent, jira: any): void {
//     // event.dataTransfer?.setData('text/plain', '');
//     this.draggedItem = jira;
//   }

//   onDragOver(event: DragEvent): void {
//     event.preventDefault();
//   }

//   onDrop(event: DragEvent, newType: string): void {
//     console.log(this.jiraArray);
//     event.preventDefault();
//     if (this.draggedItem) {
//       this.draggedItem.type = newType;
//       this.draggedItem = null;
//     }
//   }

//   isEditing: boolean = false;
//   currentIndex: number = -1; 
//   todo: string = '';

//   submitFnc() {
//     if (this.todo.trim()) {
//       if (this.isEditing) {
        
//         if (this.currentIndex !== -1) {
//           this.todoArray[this.currentIndex] = this.todo;
//           this.isEditing = false;
//           this.currentIndex = -1;
//         }
//       } else { 
       
//         this.todoArray.push(this.todo);
//       }
//       this.todo = '';
//     }
//   }

//   editFnc(index: number) {
//     this.todo = this.todoArray[index];
//     this.isEditing = true;
    
//     this.currentIndex = index; 
//   }

//   delFnc(index: number) {
//     this.todoArray.splice(index, 1);
//   }
// }





import { Component } from '@angular/core';
import { RouterOutlet , RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  NamFomVar = {
    NamCol: "",
    ProdCol: "",
    CostCol: 0
  };
  prodAryVar!: any
  EdtIdxVar = -1;

  constructor(public httpConnection: HttpClient) {
    this.getProdFnc();
  }

  getProdFnc() {
    this.httpConnection.get("http://localhost:8000/prod")
      .subscribe({
        next: (ResRsgVar: any) => {
          // console.log('Products:', ResRsgVar);
          this.prodAryVar = ResRsgVar;
          console.log(this.prodAryVar);
        },
        error: (err) => {
          console.error('Error occurred:', err);
        }
      });
  }

  AddProdFnc(NamFomVar: NgForm) {
    // console.log('Form Data:', this.NamFomVar);
    this.httpConnection.post(
      "http://localhost:8000/prod",
      this.NamFomVar
    ).subscribe({
      next: (ResRsgVar: any) => {
        // console.log('Response:', ResRsgVar);
        this.getProdFnc(); // Refresh the product list
        // this.resetForm();
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }

  DeleteProdFnc(id: number) {
    console.log('Deleting product with id:', id);
    // var indexValue =  this.prodAryVar[id];
    // console.log(indexValue)
    this.httpConnection.delete(`http://localhost:8000/prod/${id}`).subscribe({
      next: (ResRsgVar: any) => {
        // console.log('Delete Response:', ResRsgVar);
        this.getProdFnc(); // Refresh the product list
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }

  UptBtnFnc(index: number) {
    if (this.EdtIdxVar >= 0) {
      const updatedRow = this.prodAryVar[index];
      updatedRow.NamCol = this.NamFomVar.NamCol;
      updatedRow.ProdCol = this.NamFomVar.ProdCol;
      updatedRow.CostCol = this.NamFomVar.CostCol;
 
      this.httpConnection.put(`http://localhost:8000/prod/${updatedRow.UidCol}`, updatedRow)
        .subscribe({
          next: (ResRsgVar: any) => {
            console.log('Updated:', ResRsgVar);
            this.getProdFnc();
            // this.resetForm();
          },
          error: (err) => {
            console.error('Error occurred:', err);
          }
        });
 
      this.EdtIdxVar = -1;
    }
  }

  editRow(index: number) {
    const selectedRow = this.prodAryVar[index];
    this.NamFomVar.NamCol = selectedRow.NamCol;
    this.NamFomVar.ProdCol = selectedRow.ProdCol;
    this.NamFomVar.CostCol = selectedRow.CostCol;
    this.EdtIdxVar = index;
  }
}