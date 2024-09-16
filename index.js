/*
Observaçoẽs:
  1. Como estamos lidando com uma massa de dados e priorizando performance, optei por retornar e prosseguir com a próxima linha caso o documento seja inválido.
  2. Não sei se deixei passar alguma coisa na validação de parcelas, mas segui exatamente as instruções e nenhum registro foi considerado válido.
*/

import fs from "fs";
import { parse } from "csv-parse";
import { validDocument } from "./utils/document.js";
import { validInstallments } from "./validators/installments.js";
import { formatCurrencyRow } from "./utils/currency.js";


const data = []
const documentErrors = []
const installmentsErrors = []

fs.createReadStream("./data.csv")
  .pipe(parse({
    delimiter: ",",
    columns: true,
    ltrim: true,
  })
  )
  .on("data", function (row) {

    if (!validDocument(row.nrCpfCnpj)) {
      documentErrors.push(row);
      return
    }

    if (!validInstallments(row)) {
      installmentsErrors.push(row);
    }

    data.push(formatCurrencyRow(row))
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("Document errors", documentErrors);
    console.log("--------------------");
    console.log("Installments errors", installmentsErrors);
    console.log("--------------------");
    console.log("Formatted Data", data);
  });
