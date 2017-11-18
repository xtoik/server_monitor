import { Component, ContentChild, forwardRef, Input } from '@angular/core';
import { CollapsibleListComponent } from './collapsible-list.component'
import { Collapsible } from './collapsible.interface'

@Component({
  selector: 'collist-item',
  templateUrl: './collapsible-list-item.component.html',
  styleUrls: [ './collapsible-list-item.component.css' ]
})
export class CollapsibleListItemComponent extends Collapsible {
  _level: number;
  @Input() expanded: boolean = false;
  @ContentChild(forwardRef(() => CollapsibleListComponent)) child: Collapsible; 

  get level(): number {
    return this._level;        
  }

  @Input()
  set level(value: number) {
    this._level = value;
    if (this.child != null) {
      this.child.level = this._level;
    }
  }
  
  toogleExpanded(): void {
    this.expanded = !this.expanded;
    if (this.child != null) {
      this.child.expanded = this.expanded;
    }
  }
}