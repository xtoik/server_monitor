import { AfterContentInit, Component, ContentChild, forwardRef, Input } from '@angular/core';
import { CollapsibleListComponent } from './collapsible-list.component'

@Component({
  selector: 'collist-item',
  templateUrl: './collapsible-list-item.component.html',
  styleUrls: [ './collapsible-list-item.component.css' ]
})
export class CollapsibleListItemComponent implements AfterContentInit {
  level: number = 0;
  @ContentChild(forwardRef(() => CollapsibleListComponent)) child: CollapsibleListComponent; 

  ngAfterContentInit() {
    if (this.child != null) {
      console.log("setting the level " + this.level + " to child");
      this.child.level = this.level;
    }
  }
  
  toogleExpanded(): void {
    if (this.child != null) {
      this.child.expanded = !this.child.expanded;
    }
  }
}