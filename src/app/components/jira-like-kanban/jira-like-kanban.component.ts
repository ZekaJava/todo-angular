import { Component } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { KanbanBoard } from "src/app/models/kanbanBoard.model";
import { KanbanColumn } from "src/app/models/kanbanColumn.model";

@Component({
  selector: "app-jira-like-kanban",
  templateUrl: './jira-like-kanban.component.html',
  styleUrls: [ './jira-like-kanban.component.scss' ]
})
export class JiraLikeKanbanComponent {
  public kanbanBoard: KanbanBoard = new KanbanBoard("Test Board", [
    new KanbanColumn("To Do"),
    new KanbanColumn("In Progress"),
    new KanbanColumn("QA"),
    new KanbanColumn("Done"),
    
  ]);

  constructor(private todoService: TodoService) { }
}
