import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CommonPageComponent } from './pages/common-page/common-page.component';
import { NumberrPageComponent } from './pages/numberr-page/numberr-page.component';

const routes: Routes = [
                    {
                       path: '',
                        component: BasicsPageComponent
                    },
                    {
                       path: 'number',
                        component: NumberrPageComponent
                    },
                    {
                       path: 'common',
                        component: CommonPageComponent
                    },
                    {
                       path: '**',
                        component: BasicsPageComponent
                    },

                  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
