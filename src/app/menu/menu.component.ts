import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router:Router){}

  onListBook(){
    this.router.navigate(['/allBook']);
  }
  onListCategory(){
    this.router.navigate(['/allCategory']);
  }
  onListCustomer(){
  this.router.navigate(['/allCustomer']);
  }
  onListLoan(){
  this.router.navigate(['/allLoan']);
  }

}
