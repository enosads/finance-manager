const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
export const toBrazilianCurrency = (value: number) => {
  return formatter.format(value)
}
