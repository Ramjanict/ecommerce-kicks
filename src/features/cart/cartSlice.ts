import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: string
  productId: string
  name: string
  brand: string
  price: number
  image: string
  size: number
  color: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      )
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, id: `${action.payload.productId}-${action.payload.size}-${action.payload.color}-${Date.now()}` })
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item) {
        if (action.payload.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload.id)
        } else {
          item.quantity = action.payload.quantity
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart } = cartSlice.actions

export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export const selectCartTotal = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
export const selectCartCount = (state: { cart: CartState }) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0)

export default cartSlice.reducer
