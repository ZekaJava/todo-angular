import { Component } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { KanbanBoard } from "../../models/kanbanBoard.model";
import { KanbanColumn } from "../../models/kanbanColumn.model";
import { Ticket } from "../../models/ticket.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-jira-like-kanban",
  templateUrl: "./jira-like-kanban.component.html",
  styleUrls: ["./jira-like-kanban.component.scss"],
})
export class JiraLikeKanbanComponent {
  kanbanBoardForm: FormGroup = this.fb.group({
    title: ["", Validators.required],
    description: "",
    columnName: "toDo",
  });

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

  kanbanBoard: KanbanBoard = new KanbanBoard([
    new KanbanColumn("To Do", "1", this.toDoTickets),
    new KanbanColumn("In Progress", "2", this.inProgressTickets),
    new KanbanColumn("QA", "3", this.QATickets),
    new KanbanColumn("Done", "4", this.doneTickets),
  ]);

  constructor(private fb: FormBuilder) { }

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

  addTicket() {
    let ticketTitle = this.kanbanBoardForm.get("title")?.value;
    let ticketDescription = this.kanbanBoardForm.get("description")?.value;
    let newTicket = { title: ticketTitle, description: ticketDescription };
    const columnName = this.kanbanBoardForm.get("columnName")?.value;
    if (columnName === "toDo") {
      this.toDoTickets = [
        ...this.toDoTickets,
        newTicket,
      ];
    } else if (columnName === "inProgress") {
      this.inProgressTickets = [
        ...this.inProgressTickets,
        newTicket
      ];
    } else if (columnName === "QA") {
      this.QATickets = [
        ...this.QATickets,
        newTicket
      ];
    } else {
      this.doneTickets = [
        ...this.doneTickets,
        newTicket
      ];
    }
    this.kanbanBoard.kanbanColumns.forEach((kanbanColumn) => {
      if (kanbanColumn.name === "To Do") {
        kanbanColumn.tickets = Object.assign([], this.toDoTickets);
      } else if (kanbanColumn.name === "In Progress") {
        kanbanColumn.tickets = Object.assign([], this.inProgressTickets);
      } else if (kanbanColumn.name === "QA") {
        kanbanColumn.tickets = Object.assign([], this.QATickets);
      } else {
        kanbanColumn.tickets = Object.assign([], this.doneTickets);
      }
    })
    this.kanbanBoardForm.get("title")?.setValue("");
    this.kanbanBoardForm.get("description")?.setValue("");
  }

  removeTicket(column: KanbanColumn, index: number) {
    if (column.name === "To Do") {
      this.toDoTickets.splice(index, 1);
    } else if (column.name === "In Progress") {
      this.inProgressTickets.splice(index, 1);
    } else if (column.name === "QA") {
      this.QATickets.splice(index, 1);
    } else {
      this.doneTickets.splice(index, 1);
    }
    
  }
}
