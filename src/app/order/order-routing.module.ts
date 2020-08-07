import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order.component';

const routes: Routes = [
    {
        path: '',
        component: OrderComponent,
        data: {
            title: 'Sipariş'
        },

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrderRoutingModule { }

export const routedComponents = [OrderComponent];