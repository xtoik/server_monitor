import { Component, Input } from '@angular/core';

@Component({
  selector: 'collist-item',
  templateUrl: './collapsible-list-item.component.html',
  styleUrls: [ './collapsible-list-item.component.css' ]
})
export class CollapsibleListItemComponent {
  @Input() level: number;

  expanded: boolean = false;
  
  toogleExpanded(): void {
    this.expanded = !this.expanded;
  }
}