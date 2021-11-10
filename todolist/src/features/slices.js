import { createSlice } from '@reduxjs/toolkit'

const initialState = ([{
    id:1,
    title:"Mengerjakan tugas",
    completed:true,
},
{
    id:2,
    title:"Belajar untuk ulangan",
    completed:false,
},]);

export const addSlice = createSlice({
  name: 'addToDo',
  initialState,
  reducers: {
    deleteItem: (state,id) => {
        let update = state.filter((data) => data.id !==id);
        state = (update);
    },
    clickCheck: (state,index) => {
        let update = state;
        update[index] = {...update[index],completed:!update[index].completed};
        state = (update);
    },
    setDataList: (state, action) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { deleteItem, clickCheck, setDataList } = addSlice.actions

export default addSlice.reducer