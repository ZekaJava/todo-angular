import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoPageComponent } from "./pages/todo-page/todo-page.component";
import { JiraLikeKanbanComponent } from "./components/jira-like-kanban/jira-like-kanban.component";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    JiraLikeKanbanComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, DragDropModule, MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
