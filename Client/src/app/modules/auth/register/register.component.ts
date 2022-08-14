import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  @Input() title='';
  public RegisterForm: FormGroup;
  public show=false;

  constructor(
    private formBuilder: FormBuilder)
    {
      this.RegisterForm = this.formBuilder.group({
        name:['',
        [ Validators.required,
          Validators.maxLength(35),
          Validators.minLength(3),
          Validators.pattern(
            /[a-zA-Z]*\s?[a-zA-Z]+$/
            )
        ]
      ],
        lastname:['',
        [ Validators.required,
          Validators.maxLength(35),
          Validators.minLength(3),
          Validators.pattern(
            /[a-zA-Z]+\s?[a-zA-Z]+?\s?[a-zA-Z]+?\s?[a-zA-Z]+?\s?[a-zA-Z]+?$/
            )
        ]
      ],
        email:['',
        [Validators.required,
        Validators.pattern(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]],
        dir:['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40),
        ]],
        password:['', 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]
      ],
        RepeatPassword:['', 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20)
        ]
      ]

      })
    }

  changeStatusModal(){
    if(this.show == false){
      this.show = true;
    }
    else{
      this.show = false;
    }
  
  }

  Registered(){
    console.log("Registrado");
  }

}
