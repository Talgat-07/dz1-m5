import {createSlice} from '@reduxjs/toolkit';

const userDataString = localStorage.getItem('user');
let user;
if (userDataString !== null) {
  user = JSON.parse(userDataString)
}
const initialState = user || {
  email: null,
  token: null,
  id: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      localStorage.setItem('user', JSON.stringify({
        email: state.email,
        token: state.token,
        id: state.id
      }))
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      localStorage.setItem('user', JSON.stringify({
        email: state.email,
        token: state.token,
        id: state.id
      }))
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;