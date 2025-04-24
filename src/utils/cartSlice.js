import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // Vanialla(older)- Reduc=> DON'T MUTATE THE STATE >> Returning is mandatory
      // const newState = [...state];
      // newState.items.push(action.payload);
      // return newState;

      //Redux toolkit >> We HAVE to mutate the state
      //Behind the seen redux used immer library to handle mutation of state.
      //mutatting the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },

    //OriginlState={items:["Pizza"]}
    clearCart: (state) => {
      //here state is like local copy of originalState
      // console.log(state);
      // console.log(current(state)); //current is use to get current info of state
      // state = []; //it will update only the local copy and not the original state
      // console.log(state);

      //RTK- either mutate the existiing state or return a new state
      //state.items.length = 0; // originalState=[]
      //OR
      return { items: [] }; // this new [] will be replaced inside the originalState= {items:[]}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
