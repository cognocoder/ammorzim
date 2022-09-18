export const ProductPriceValidator = function isGreaterThanZero(value: number) {
	if (value <= 0) return false
	return true
}

export const ProductPriceInputValidator = function (value: string) {
	const groups = ProductPatterns.price.exec(value)?.groups

	if (!groups) return 'Preço mal formatado'

	const num = groups.num || 0
	const cents = groups.cents || 0

	const amount = +`${num}.${cents}`

	if (amount <= 0) return 'Preço deve ser maior que zero'

	return true
}

export const ProductPriceInputMask = function (value: string) {
	const str = value.replace('R$', '').replace('.', ',')

	let [num, cents] = str.split(',')

	if (!cents) {
		cents = num
		num = '0'
	}

	num = num.replace(/\D/g, '')
	cents = cents.replace(/\D/g, '')

	let n: string = '0'
	let c: string

	if (cents?.length > 2) {
		n = num + cents.substring(0, cents.length - 2)
		c = cents.slice(-2)
	} else if (cents?.length < 2 && num.length) {
		c = num.slice(cents.length - 2) + cents
		n = num.substring(0, num.length - 1)
	} else if (cents?.length < 2) {
		c = cents
		while (c.length < 2) {
			c = '0' + c
		}
	} else {
		n = num
		c = cents
	}

	if (isNaN(+n)) {
		n = '0'
	}
	if (isNaN(+c) || c == '0') {
		c = '00'
	}

	return `R$ ${+n},${c}`
}

export const ProductPatterns = {
	name: /^.{2,}$/,
	category: /^.{4,}$/,
	description: /^[\s\S]{10,}$/,
	price: /^\s*(?<cur>R\$)?\s*(?<num>\d*)(?:(?:[\.\,])?(?<cents>\d{1,2})?)$/,
}
