export type TypeOfTransaction = 'income' | 'outcome' | 'loan' | 'investment'

export interface ITransaction {
  "type": TypeOfTransaction,
  "_id": string
  "amount": number;
  "name": {
    "first": string;
    "last": string;
  },
  "company": string;
  "email": string;
  "phone": string;
  "address": string;
}

export interface IDataTable {
  columns: IDataRow[],
}

export interface IDataRow{
  title: string,
  dataProperty: string
}

