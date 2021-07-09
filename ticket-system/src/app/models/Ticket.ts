export class Ticket {
  id?: number;
  title: string;
  description: string;
  createdOn?: number;
  resolutionDate?: number;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
