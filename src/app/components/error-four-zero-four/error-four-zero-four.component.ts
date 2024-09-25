import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-four-zero-four',
  template: `
    <div class="container">
      <h1 class="errorMessage">404 Ticket not found</h1>
      <div></div>
    </div>
  `,
  styles: [
    `
      .errorMessage {
        margin-top: 150px;
        font-size: 90px;
        text-align: center;
      }
    `,
  ],
})
export class ErrorFourZeroFourComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
