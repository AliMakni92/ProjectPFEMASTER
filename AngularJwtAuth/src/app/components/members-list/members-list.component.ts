import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css']
})
export class MembersListComponent implements OnInit {
  users: any;
  currentUser = null;
  currentIndex = -1;
  username = '';
  roles: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.retrieveMembers();
  }
  retrieveMembers() {
    this.userService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  refreshList() {
    this.retrieveMembers();
    this.currentUser = null;
    this.currentIndex = -1;
  }
  setActiveMember(user, index) {
    this.currentUser = user;
    this.currentIndex = index;
  }

  removeAllUsers() {
    this.userService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveMembers();
        },
        error => {
          console.log(error);
        });
  }

  searchUsername() {
    this.userService.findByUsername(this.username)
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
