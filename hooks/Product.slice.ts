import create from 'zustand'
import produce from 'immer'

import { ProductInterface } from '@/interfaces/Product'

export interface ProductSliceInterface {
	array: ProductInterface[]
	setArray: (value: ProductInterface[]) => void

	filter: string
	setFilter: (value: string) => void
}

const useProductSlice = create<ProductSliceInterface>((set) => ({
	array: [],
	setArray: (value: ProductInterface[]) =>
		set(
			produce((state) => {
				state.array = value
			})
		),
	filter: '',
	setFilter(value: string) {
		set(
			produce((state) => {
				state.filter = value
			})
		)
	},
}))

export default useProductSlice
