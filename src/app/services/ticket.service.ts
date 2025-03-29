import { Injectable } from "@angular/core";
import { Ticket } from "../models/ticket.model";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  private toDoTickets: Ticket[] = [
    {
      title: "To Do ticket",
      description: "This is a description for to do ticket",
    },
  ];
  private inProgressTickets: Ticket[] = [
    {
      title: "Ticket in progress",
      description: "Description for the ticket in progress",
    },
  ];
  private QATickets: Ticket[] = [
    {
      title: "QA ticket",
      description: "Description for the QA ticket",
    },
  ];
  private doneTickets: Ticket[] = [
    {
      title: "Done ticket",
      description: "Description for the done ticket",
    },
  ];

  constructor() {}

  getToDoTickets() {
    return this.toDoTickets;
  }

  getInProgressTickets() {
    return this.inProgressTickets;
  }

  getQATickets() {
    return this.QATickets;
  }

  getDoneTickets() {
    return this.doneTickets;
  }
}
