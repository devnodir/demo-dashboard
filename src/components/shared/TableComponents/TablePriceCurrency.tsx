
const TablePriceCurrency = (price: number) => {
	return `${new Intl.NumberFormat().format(price)} UZS`
}

export default TablePriceCurrency