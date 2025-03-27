import { Ticket } from "./ticket.model";

export class KanbanColumn {
   constructor(public name: string, public id: string, public tickets: Ticket[]) {}
}