import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent {

  @Input('title') title: string;
  @Input('description') description: string;
  @Input('subtitle') subtitle: string;

}
