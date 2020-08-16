import { Component, Input } from '@angular/core';
import { Section } from './../leftsideblockTypes';

@Component({
  selector: 'leftsideblock-section',
  templateUrl: './leftsideblock-section.component.html',
  styleUrls: ['./leftsideblock-section.component.css']
})
export class LeftsideblockSectionComponent {
  @Input() public section: Section;
}
