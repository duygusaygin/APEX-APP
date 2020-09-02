import { Component, OnInit } from '@angular/core';
import { Tables } from './table.model';
import {formatDate } from '@angular/common';
import { ShortNamePipe } from 'app/shared/pipes/short-name.pipe';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss','../cards/advanced/advanced-cards.component.scss','../cards/basic/basic-cards.component.scss']
})
export class OrderComponent implements OnInit {
  public table: Tables[];
  
  constructor() {
    
    
    
    this.table = new Array<Tables>(
      new Tables(1,"icon-user-unfollow font-large-2 float-right"),
      new Tables(2,"icon-user-following font-large-2 float-right"),
      new Tables(3,"icon-user-following font-large-2 float-right"),
      new Tables(4,"icon-user-following font-large-2 float-right")
    );
   }

  ngOnInit(): void {
    
  }

}
