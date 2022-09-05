const { DataTypes } = require('sequelize')

import sequelize from '@/databases/sequelize'
import { ProductPriceValidator, ProductPatterns } from '@/validators/Product'

export const ProductModel = sequelize.define('Product', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			is: ProductPatterns.name,
		},
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			is: ProductPatterns.category,
		},
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			is: ProductPatterns.description,
		},
	},
	price: {
		type: DataTypes.NUMBER,
		allowNull: false,
		validate: {
			isGreaterThanZero: (value: number) => {
				if (!ProductPriceValidator(value))
					throw new Error(
						'Error: price property @ Product model must be greater than zero'
					)
			},
		},
	},
})

let sync = false

export async function SyncProduct() {
	if (!sync) {
		await ProductModel.sync()
		sync = true
	}

	return ProductModel
}

export default SyncProduct
