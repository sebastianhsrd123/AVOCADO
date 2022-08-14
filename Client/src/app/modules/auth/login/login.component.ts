import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  
  authenticate(){
    console.log("Autenticado");
  }

  ngOnInit(): void {
  }

}
