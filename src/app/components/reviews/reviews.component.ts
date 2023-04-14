import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() job: string = '';
  @Input() comment: string = '';

  constructor() { }

}
