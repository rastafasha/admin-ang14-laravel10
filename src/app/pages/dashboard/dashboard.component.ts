import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Panel Administrativo';
  public user: User;
  id:number;
  roleid:number;

  error: string;


  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.user = userService.user;
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {

    this.user = JSON.parse(localStorage.getItem('user'));
    // this.activatedRoute.params.subscribe( ({id}) => this.getUserProfile(id));
  }

  getUserProfile(id){
    this.userService.getUserById(id).subscribe((data: any) => {
      this.user = data.user;
      console.log(this.user)
    });
  }


}
