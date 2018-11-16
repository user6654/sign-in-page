import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

import { userModel } from "../model/user";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  public users: userModel[];
  public signInForm: FormGroup;
  public loginMatchDisplay: string;

  constructor(private fb: FormBuilder) {
    this.users = [
      { username: "nemo", password: "qwer1234" },
      { username: "nema", password: "qwer1234" }
    ];
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.signInForm = this.fb.group({
      username: new FormControl(""),
      password: new FormControl("", { updateOn: "blur" })
    });
  }

  public onSubmit() {
    const user = this.signInForm.value;
    this.matchUser(user);
  }

  public matchUser(user: userModel) {
    this.users.some(compareToValidSignIns => {
      if (
        compareToValidSignIns.username === user.username &&
        compareToValidSignIns.password === user.password
      ) {
        this.loginMatchDisplay="Login Accepted";
        return true;
      } else {
        this.loginMatchDisplay="Invalid Login Inp=ut";
      }
    });
}
  ///*
  get username() {
    return this.signInForm.get("username").value;
  }

  get password() {
    return this.signInForm.get("password").value;
  }
  //*/
}
