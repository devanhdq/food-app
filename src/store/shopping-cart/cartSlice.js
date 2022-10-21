// import {createSlice} from "@reduxjs/toolkit";
//
// const initState = {
//     cartItems: [],
//     totalQuantity: 0,
//     totalAmount: 0
// }
// const cartSlice = createSlice({
//     name: 'cart',
//     initState,
//     reducers: {
//         addItem(state, action) {
//             const newItem = action.payload;
//             const exitsItem = state.cartItems.find(item => item.id === newItem.id);
//
//             state.totalQuantity++;
//
//             if (!exitsItem) {
//                 state.cartItems.push({
//                     id: newItem.id,
//                     title: newItem.title,
//                     image01: newItem.image01,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price
//                 })
//             } else {
//                 exitsItem.quantity++;
//                 exitsItem.totalPrice = Number(exitsItem.totalPrice) + Number(newItem.price);
//             }
//             state.totalAmount = state.cartItems.reduce((total, item) => (
//                 total + Number(item.price) * Number(item.quantity)
//             ))
//
//         }
//     }
// })
//
// export const cartActions = cartSlice.actions;
// export default cartSlice;