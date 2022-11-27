import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-role-card',
  templateUrl: './role-card.component.html',
  styleUrls: ['./role-card.component.css']
})
export class RoleCardComponent {
  @Input() iconUrl: string = '';
  @Input() Title: string = '';
}
