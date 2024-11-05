import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../Database";

// Initial state with assignments from the database
const initialState = {
  assignments: db.assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
      const newAssignment = {
        ...payload,
        _id: new Date().getTime().toString(),
        course: payload.course,
      };
      state.assignments = [...state.assignments, newAssignment];
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
    updateAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === payload._id ? payload : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;
