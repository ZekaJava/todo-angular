# Todo App - Angular Implementation

This is a Todo app built with Angular and TypeScript, using RxJS for state management.

## Project Setup

```bash
npm install
```

### Compile and Hot-Reload for Development

```bash
npm run start
```

### Type-Check, Compile and Minify for Production

```bash
npm run build
```

### Run Type-Checking

```bash
npm run type-check
```

## Features

- Add, delete, and toggle completion status of todos
- Filter todos by status (All, Active, Completed)
- Store todos in client-side state (RxJS BehaviorSubject)
- Responsive design


## Usage

- On the main screen you have greeen button "Try out kanban tool". When you click it, it redirects you to a new page with Kanban Board Example.
- There you have Kanban like board with four draggable columns ( To Do, In Progress, QA, Done ) and at the moment, each column has one draggable ticket in card form.
- One ticket has a title and description field.
- You can drag and drop each column or each ticket.
- Also, you can remove tickets by clicking on X button in the right corner of the ticket.

- On the right side of the board, you can see simple Add Ticket Form which has two input fields ( title and description ) and radio buttons with column names.
- If you want to add a new ticket, you must enter a ticket title and choose in which column you want to add the tiket, by checking one of the radio buttons. The description field is optional.
- "To Do" radio button is checked as a default value.
