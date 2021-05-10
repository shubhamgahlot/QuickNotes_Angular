import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quicknotes',
  templateUrl: './quicknotes.component.html',
  styleUrls: ['./quicknotes.component.css']
})
export class QuicknotesComponent implements OnInit {




  constructor() { 

    
  }

  // An empty array that hold the values

  public items = [];

//  Two way data binding that pushes the code to div
  public newTask;

      
  ngOnInit(): void {
  }

  addToList(){

    if( this.newTask == ''){

      return null;
    }
    else{
      this.items.push(this.newTask);
      this.newTask = '';
    }

  }


  public deleteTask(index) {
    this.items.splice(index, 1);
}
   }
