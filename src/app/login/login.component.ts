import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogInServiceService } from '../log-in-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any={};

  constructor(private router:Router,private loginService:LogInServiceService) { }

  ngOnInit() {
    // this.getAllUsers();
  }

  oclickLogIn(){

    console.log("OnClick Login") ;
    console.log(this.user);

    this.loginService.logInAuthentication(this.user).subscribe(success=>{
      console.log(success.status);
      if(success.status==200){
        this.router.navigate(['/dashboard']);
      }

    },error=>{
      console.log(error);

    })

    // this.router.navigate(['/dashboard'])
  }

  oclickSignUp(){
    this.router.navigate(['/dashboard'])
  }

  getAllUsers(){
    this.loginService.getAllUsers().subscribe(success=>{
      console.log(success);
    }, error=>{
      console.log(error);
    })
  }
}
