export function validInstallments(row) {
  const {qtPrestacoes, vlTotal, vlPresta} = row;
  const expected = Math.ceil((vlTotal / qtPrestacoes) * 100) / 100;
  return +expected.toFixed(2) === +Number(vlPresta).toFixed(2);
}