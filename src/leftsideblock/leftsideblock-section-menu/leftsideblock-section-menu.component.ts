import { Component, Input } from '@angular/core';
import { Menu } from '../leftsideblockTypes';

@Component({
  selector: 'leftsideblock-section-menu',
  templateUrl: './leftsideblock-section-menu.component.html',
  styleUrls: ['./leftsideblock-section-menu.component.css']
})
export class LeftsideblockSectionMenuComponent {
  @Input() public menu: Menu;

  public doAction(): void {
    this.menu.action();
  }
}
