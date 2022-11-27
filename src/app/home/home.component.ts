import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards: {iconUrl: string, title: string}[] = [
    {
      iconUrl: "../../assets/public/noun_admin_370865.svg",
      title: "Administrator",
    },
    {
      iconUrl: "../../assets/public/noun_Architect_2711767.svg",
      title: "Architect",
    },
    {
      iconUrl: "../../assets/public/noun_developer_3346388.svg",
      title: "Developer",
    },
    {
      iconUrl: "../../assets/public/noun_analytics_2500436.svg",
      title: "Business Analyst",
    },
    {
      iconUrl: "../../assets/public/noun_sales_1122981.svg",
      title: "Technical Presales",
    },
    {
      iconUrl: "../../assets/public/noun_data science_1875648.svg",
      title: "Data Scientist",
    }
  ]
}
