import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthRoutingModule } from '@modules/auth/auth-routing.module'

@Component({
  selector: 'app-inmodal',
  templateUrl: './inmodal.component.html',
  styleUrls: ['./inmodal.component.css']
})
export class InmodalComponent implements OnInit{


  @Input() title = '';
  public loginForm: FormGroup;
  public show = false;

  constructor(private formBuilder: FormBuilder)
    {
      this.loginForm = this.formBuilder.group({
        email: ['',
          [
            Validators.required,
            Validators.pattern(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/
            )
          ]
        ],
        password: ['', 
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(20)
          ]
        ]
      });
    }
  
  changeStatusModal(){
    if(this.show == false){
      this.show = true;
    }
    else{
      this.show = false;
    }
  }
  authenticate(){
    console.log("Autenticado");
  }

  ngOnInit(): void {
  }


}
