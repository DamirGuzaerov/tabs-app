import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavigatorComponent} from "./pages/navigator/navigator.component";
import {SummaryComponent} from "./pages/summary/summary.component";

const routes: Routes = [
  { path: '', component: SummaryComponent, },
  { path: 'navigator', component: NavigatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
