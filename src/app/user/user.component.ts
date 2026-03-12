import { Component, signal } from "@angular/core";
import { DUMMY_USERS } from "../dummy-users";

const randomUserId = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: "app-user",
  standalone: true,
  imports: [],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomUserId]);

  get imagePath() {
    return "assets/users/" + this.selectedUser().avatar;
  }

  onSelectUser() {
    const randomUserId = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomUserId];
    this.selectedUser.set(DUMMY_USERS[randomUserId]);
  }
}
