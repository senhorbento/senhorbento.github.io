import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Constants } from '../../core/constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  Constants: Constants = new Constants();
}
