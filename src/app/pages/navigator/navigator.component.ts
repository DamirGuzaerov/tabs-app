import {Component} from '@angular/core';
import {TransactionService} from "../../services/transaction-service/transaction.service";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css'],
})
export class NavigatorComponent{
  constructor(public trService: TransactionService) {

  }
}
