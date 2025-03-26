import { KanbanColumn } from "./kanbanColumn.model";

export class KanbanBoard {
   constructor(public name: string, public kanbanColumns: KanbanColumn[]) {}
}