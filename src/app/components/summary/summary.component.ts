import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})

export class SummaryComponent {

}
