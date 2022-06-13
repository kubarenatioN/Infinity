import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DataManagementService } from 'src/app/services/data-management.service';
import { IUser, IUserLogin, IUserRegister } from 'src/app/typings/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  public loginModel = {} as IUserLogin
  public registerModel: IUserRegister = {} as IUserRegister

  constructor(
    private dataManagement: DataManagementService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public login() {
    this.dataManagement.loginUser(this.loginModel)
      .subscribe(res => {
        if (!res) {
          console.error('No such user');
          return
        }
        this.successRedirect()
      })
  }

  public register() {
    // TODO: Validation
    if (this.registerModel.password === this.registerModel.passwordRepeat) {
      this.dataManagement.registerUser(this.registerModel)
        .subscribe(newUser => {
          if (!newUser) {
            console.error('User not registered');
            return
          }
          this.successRedirect()
        })
    } else {
      console.error('Passwords must match');
    }
    console.log(this.registerModel);
  }

  private successRedirect(): void {
    this.router.navigate(['/profile'])
  }
}
