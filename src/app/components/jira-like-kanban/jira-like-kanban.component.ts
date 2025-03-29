import { Component, OnInit } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { KanbanBoard } from "../../models/kanbanBoard.model";
import { KanbanColumn } from "../../models/kanbanColumn.model";
import { Ticket } from "../../models/ticket.model";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TicketService } from "src/app/services/ticket.service";

@Component({
  selector: "app-jira-like-kanban",
  templateUrl: "./jira-like-kanban.component.html",
  styleUrls: ["./jira-like-kanban.component.scss"],
})
export class JiraLikeKanbanComponent implements OnInit {
  kanbanBoardForm: FormGroup = this.fb.group({
    title: ["", Validators.required],
    description: "",
    columnName: "toDo",
  });

  toDoTickets: Ticket[] = [];
  inProgressTickets: Ticket[] = [];
  QATickets: Ticket[] = [];
  doneTickets: Ticket[] = [];

  kanbanBoard: KanbanBoard = new KanbanBoard([]);

  constructor(private ticketService: TicketService, private fb: FormBuilder) {}

  ngOnInit() {
    this.toDoTickets = this.ticketService.getToDoTickets();
    this.inProgressTickets = this.ticketService.getInProgressTickets();
    this.QATickets = this.ticketService.getQATickets();
    this.doneTickets = this.ticketService.getDoneTickets();

    this.kanbanBoard = new KanbanBoard([
      new KanbanColumn("To Do", "1", this.toDoTickets),
      new KanbanColumn("In Progress", "2", this.inProgressTickets),
      new KanbanColumn("QA", "3", this.QATickets),
      new KanbanColumn("Done", "4", this.doneTickets),
    ]);
  }

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
      this.toDoTickets = [...this.toDoTickets, newTicket];
    } else if (columnName === "inProgress") {
      this.inProgressTickets = [...this.inProgressTickets, newTicket];
    } else if (columnName === "QA") {
      this.QATickets = [...this.QATickets, newTicket];
    } else {
      this.doneTickets = [...this.doneTickets, newTicket];
    }

    this.reRenderKanbanBoard();

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

    this.reRenderKanbanBoard();
  }

  reRenderKanbanBoard() {
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
    });
  }
}
