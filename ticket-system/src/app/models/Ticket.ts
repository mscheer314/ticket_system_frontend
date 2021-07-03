export class Ticket {
  id?: number;
  title: string;
  description: string;
  createdOn: Date;
  resolutionDate?: Date;

  constructor(title: string, description: string, createdOn: Date) {
    this.title = title;
    this.description = description;
    this.createdOn = createdOn;
  }
}
