const options = {
	color: '#222',
	'background-color': '#dde',
	border: '1px solid #bbd',
	'border-radius': '4px',
	'color:error': '#921',
	'box-shadow': '4px 4px 4px #4448',
}

export const theme = {
	card: {
		...options,
	},
	container: {
		...options,
		'background-color': '#cce',
	},
	form: {
		...options,
	},
	header: {
		...options,
		'background-color': '#cce',
		'border-bottom': '1px solid #4448',
	},
}

export const dark = {}

export default theme
