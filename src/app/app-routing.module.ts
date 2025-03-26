import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoPageComponent } from "./pages/todo-page/todo-page.component";
import { JiraLikeKanbanComponent } from "./components/jira-like-kanban/jira-like-kanban.component";


const routes: Routes = [
  { path: "", redirectTo: "todos", pathMatch: "full" },
  { path: "todos", component: TodoPageComponent },
  { path: "kanban", component: JiraLikeKanbanComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
