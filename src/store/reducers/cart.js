const INITIAL_STATE = [
  { id: 1, price: 100, qty: 2 },
  { id: 1, price: 100, qty: 2 }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const { id, price, qty } = action.payload;

      return {
        cart: [...state, { id, price, qty }]
      };
    }
    default:
      return state;
  }
}
