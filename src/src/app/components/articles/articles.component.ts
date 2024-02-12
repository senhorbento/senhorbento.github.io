import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';



@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

}
