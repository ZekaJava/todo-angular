import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { KanbanBoard } from "src/app/models/kanbanBoard.model";
import { KanbanColumn } from "src/app/models/kanbanColumn.model";
import { Ticket } from "src/app/models/ticket.model";

@Component({
  selector: "app-jira-like-kanban",
  templateUrl: "./jira-like-kanban.component.html",
  styleUrls: ["./jira-like-kanban.component.scss"],
})
export class JiraLikeKanbanComponent {
  toDoTickets: Ticket[] = [
    {
      title: "First ticket",
      description: "This is a description for the first ticket",
    },
    {
      title: "Second ticket",
      description: "This is a description for the second ticket",
    },
    {
      title: "Third ticket",
      description: "This is a description for the third ticket",
    },
  ];
  inProgressTickets: Ticket[] = [
    {
      title: "First ticket in progress",
      description: "Description for the first ticket in progress",
    },
    {
      title: "Second ticket in progress",
      description: "Description for the second ticket in progress",
    },
    {
      title: "Third ticket in progress",
      description: "Description for the third ticket in progress",
    },
  ];
  QATickets: Ticket[] = [
    {
      title: "First QA ticket",
      description: "Description for the first QA ticket",
    },
    {
      title: "Second QA ticket",
      description: "Description for the second QA ticket",
    },
    {
      title: "Third QA ticket",
      description: "Description for the third QA ticket",
    },
  ];
  doneTickets: Ticket[] = [];

  kanbanBoard: KanbanBoard = new KanbanBoard("Test Board", [
    new KanbanColumn("To Do", "1", this.toDoTickets),
    new KanbanColumn("In Progress", "2", this.inProgressTickets),
    new KanbanColumn("QA", "3", this.QATickets),
    new KanbanColumn("Done", "4", this.doneTickets),
  ]);

  constructor(private todoService: TodoService) {}


  dropGrid(event: CdkDragDrop<Ticket[]>): void {
    moveItemInArray(
      this.kanbanBoard.kanbanColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  drop(event: CdkDragDrop<Ticket[]>): void {
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

  removeTicket(index: number) {
    this.toDoTickets.splice(index, 1);
  }
}
