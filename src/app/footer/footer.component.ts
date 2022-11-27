import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  private months: string[] = [
    "January", "February",
    "March", "April", "May",
    "June", "July", "August",
    "September", "October",
    "November", "December"];
  private date: Date = new Date();
  confidentialText: string = "MAQ Software Confidential";
  formattedDate: string = `Last Updated: ${this.months[this.date.getMonth()]} ${this.date.getDate()}, ${this.date.getFullYear()}`;
}
