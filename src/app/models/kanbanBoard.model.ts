import { KanbanColumn } from "./kanbanColumn.model";

export class KanbanBoard {
   constructor(public kanbanColumns: KanbanColumn[]) {}
}