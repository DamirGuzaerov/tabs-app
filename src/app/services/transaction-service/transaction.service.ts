import { Injectable } from '@angular/core';
import {IDataTable, ITransaction, TypeOfTransaction} from "../../types/types";
import {transactions,transactionTableConfig} from "../../data/transactions-data/transaction-data";


@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  transactionData: ITransaction[] = []
  transactionTableConfig: IDataTable = {columns:[]}
  constructor() {
    this.transactionData = JSON.parse(JSON.stringify(transactions)).data //Copy the array safely
    this.transactionTableConfig = JSON.parse(JSON.stringify(transactionTableConfig))
  }

  getTransactionListByType(type:TypeOfTransaction){
    return this.transactionData.filter(el=>el.type === type)
  }
}
