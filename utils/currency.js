const BRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function formatCurrencyRow(row) {
  const formattedRow = {
    ...row,
    vlPresta: BRL.format(row.vlPresta),
    vlMora: BRL.format(row.vlMora),
    vlMulta: BRL.format(row.vlMulta),
    vlOutAcr: BRL.format(row.vlOutAcr),
    vlIof: BRL.format(row.vlIof),
    vlDescon: BRL.format(row.vlDescon),
    vlAtual: BRL.format(row.vlAtual),
  };

  return formattedRow;
}