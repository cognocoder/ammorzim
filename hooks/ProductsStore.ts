import create from 'zustand'
import produce from 'immer'

interface ProductsStore {
	status: string
	setStatus: (value: string) => void
}

export const useProductsStore = create<ProductsStore>((set) => ({
	status: '',
	setStatus: (value: string) =>
		set(
			produce((state) => {
				state.status = value
			})
		),
}))
