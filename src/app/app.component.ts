import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  users;


  constructor(af: AngularFire) {
    af.database.list('/users').subscribe(x => {
      this.users = x;
      console.log(this.users);
    })
  }
  update() {
    this.users.database.object('users/user1').update({
      "disabled":"true"
    });
      
    
  }
}
