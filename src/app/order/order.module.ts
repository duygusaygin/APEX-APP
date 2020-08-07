import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import {OrderComponent} from './order.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderRoutingModule } from "./order-routing.module";



@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        OrderRoutingModule
    ],
    exports: [],
    declarations: [
        OrderComponent
        
    ],
    providers: [],
})
export class OrderModule { }
