import { Component } from '@angular/core';

@Component({
  selector: 'app-static-content',
  templateUrl: './static-content.component.html',
  styleUrls: ['./static-content.component.css']
})
export class StaticContentComponent {
  topSection: {title: string, description: string; buttonText: string} = {
    title: "Recruit, hire, onboard and retain talent",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    buttonText: "View More",
  };
  bottomSection: {title: string, description: string; buttonText: string} = {
    title: "Start preparing for a certification",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    buttonText: "Choose a session",
  };
}
