/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insert row
const newRowID: RowID = CRUD.insertRow(row);
// -> Insert row {firstName: "Guillaume", lastName: "Salva"}

// Update row
const updatedRow: RowElement = {
  ...row,
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);
// -> Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

// Delete row
CRUD.deleteRow(newRowID);
// -> Delete row id 125
