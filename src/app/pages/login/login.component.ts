import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/_shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  loading = false;
  captcha = {
    first: this.getRandomInt(1, 20),
    second: this.getRandomInt(1, 20)
  };
  captchaTotal = this.captcha.first + this.captcha.second;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    if (localStorage.getItem("isLoggedIn")) {
      this.router.navigate(["/dashboard"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      captchaResult: ["", Validators.required]
    });
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  get f() {
    return this.loginForm;
  }

  generateCaptcha() {
    this.captcha.first = this.getRandomInt(1, 20);
    this.captcha.second = this.getRandomInt(1, 20);
  }

  onSubmit() {
    this.submitted = true;
    if (this.f.valid == false) {
      return;
    }
    if (this.f.value.captchaResult != this.captchaTotal) {
      return;
    }
    this.loading = true;
    this.auth
      .login({
        username: this.f.value.username,
        password: this.f.value.password
      })
      .subscribe(result => {
        if (result["success"] == 1) {
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("authData", result["data"]);
          this.router.navigate(["/dashboard"]);
        } else {
          alert(result["message"]);
          this.submitted = this.loading = false;
          this.loginForm.reset();
        }
      });
    this.generateCaptcha();
  }
}
