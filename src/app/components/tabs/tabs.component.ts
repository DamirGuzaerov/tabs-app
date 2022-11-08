import {Component, OnInit, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import {TabItemComponent} from "../tab-item/tab-item.component";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabItemComponent) tabs: QueryList<TabItemComponent> = new QueryList<TabItemComponent>();

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tabItem: TabItemComponent){
    this.tabs.toArray().forEach(tab => tab.active = false);

    tabItem.active = true;
  }

  addTab(tab: TabItemComponent) {
    if (this.tabs.length === 0) {
      tab.active = true;
    }
    this.tabs.toArray().push(tab);
  }
}
