export const ProductPriceValidator = function isGreaterThanZero(value: number) {
	if (value <= 0) return false
	return true
}

export const ProductPatterns = {
	name: /^.{2,}$/,
	category: /^.{4,}$/,
	description: /^.{10,}$/,
	price: /^0*[1-9]\d*([\.,]\d*)?$/,
}
