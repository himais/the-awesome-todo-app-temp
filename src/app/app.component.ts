import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public todoList = [];

  public addTask(value: any) {
    this.todoList.push(value);
  }

  public deleteTask(value: any) {
    const index = this.todoList.indexOf(value);
    this.todoList.splice(index, 1);
  }

  submitForm(value: any) {
    this.addTask(value.todo);
  }

  resetForm() {}
}
