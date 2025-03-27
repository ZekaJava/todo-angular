import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import { KanbanBoard } from "src/app/models/kanbanBoard.model";
import { KanbanColumn } from "src/app/models/kanbanColumn.model";

@Component({
  selector: "app-jira-like-kanban",
  templateUrl: "./jira-like-kanban.component.html",
  styleUrls: ["./jira-like-kanban.component.scss"],
})
export class JiraLikeKanbanComponent implements OnInit {
  toDoTickets: string[] = ["First ticket", "Second ticket", "Third ticket"];
  inProgressTickets: string[] = ["First in progress ticket", "Second  in progress ticket", "Third in progress ticket"];
  QATickets: string[] = ["First QA ticket", "Second QA ticket", "Third QA ticket"];
  doneTickets: string[] = [];

  kanbanBoard: KanbanBoard = new KanbanBoard("Test Board", [
    new KanbanColumn("To Do", "1", this.toDoTickets),
    new KanbanColumn("In Progress", "2", this.inProgressTickets),
    new KanbanColumn("QA", "3", this.QATickets),
    new KanbanColumn("Done", "4", this.doneTickets),
  ]);

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    console.log(this.kanbanBoard);
  }

  dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(
      this.kanbanBoard.kanbanColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
