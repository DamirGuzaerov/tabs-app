import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummaryComponent } from './pages/summary/summary.component';
import {NavigatorComponent} from "./pages/navigator/navigator.component";
import {AppRoutingModule} from "./app-routing.module";
import { TabItemComponent } from './components/tab-item/tab-item.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    SummaryComponent,
    TabItemComponent,
    TabsComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
