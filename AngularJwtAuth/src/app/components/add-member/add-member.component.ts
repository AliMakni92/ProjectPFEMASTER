import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  uploadedFiles: Array < File > ;
  user = {
    username: '',
    password: '',
    name:'',
    email:'',
    adress:'',
    department:'',
    factureabonment:'',
  };
  submitted = false;

  constructor(private userService: UserService, private http : HttpClient) { }

  ngOnInit() {
  }
  saveUser() {
    const data = {
      username: this.user.username,
      password: this.user.password,
      name: this.user.name,
      email: this.user.email,
      adress: this.user.adress,
      department: this.user.department,
     // factureabonment: this.user.factureabonment
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
}
upload() {
  let formData = new FormData();
  for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
  }
  this.http.post('/', formData)
  .subscribe((response) => {
       console.log('response received is ', response);
  })
}
}
