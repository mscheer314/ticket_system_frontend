export class Ticket {
  id: number;
  title: string;
  description: string;
  createdOn: Date;
  resolutionDate: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    createdOn: Date,
    resolutionDate: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdOn = createdOn;
    this.resolutionDate = resolutionDate;
  }
}
