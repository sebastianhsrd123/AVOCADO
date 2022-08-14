import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { InmodalComponent } from '@shared/components/modals/inmodal/inmodal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },

  
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path:'home',
        loadChildren: ()=>
          import('@modules/product/product.module').then( (m) => m.ProductModule)
      }]
  },
  
  {
    path: 'auth',
    loadChildren: ()=>
      import('@modules/auth/auth.module').then( (m)=> m.AuthModule)
    },
    
    {
      path: '**',
      redirectTo:'/home',
      pathMatch: 'full'
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
