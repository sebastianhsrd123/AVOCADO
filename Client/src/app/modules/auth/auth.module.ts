import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '@shared/shared.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
