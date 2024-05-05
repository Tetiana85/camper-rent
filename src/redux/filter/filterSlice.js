import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    inputValue: "",
    equipment: [],
    // equipment: ["ac", "automatic", "kitchen", "tv", "shower", "mechanic"],
    type: [],
    // type: ["paneltruck", "fullyintegrated", "alcove"],
  },
  reducers: {
    changeInputFilter: (state, action) => {
      state.inputValue = action.payload;
    },
    toogleEquipmentFilter: (state, action) => {
      const index = state.equipment.indexOf(action.payload);
      if (index === -1) {
        state.equipment.push(action.payload);
      } else {
        state.equipment.splice(index, 1);
      }
    },
    toogleTypeFilter: (state, action) => {
      const index = state.type.indexOf(action.payload);
      if (index === -1) {
        state.type.push(action.payload);
      } else {
        state.type.splice(index, 1);
      }
    },
    clearFilters: (state) => {
      state.inputValue = "";
      state.equipment = [];
      state.type = [];
    },
  },
});

export const {
  changeInputFilter,
  toogleEquipmentFilter,
  toogleTypeFilter,
  clearFilters,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
