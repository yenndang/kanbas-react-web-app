import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

// Load initial enrollment data from JSON file, not local storage, for a fresh start on reload
const loadEnrollments = (): Enrollment[] => {
  return require("../Database/enrollments.json");
};

const initialState = {
  enrollments: loadEnrollments(),
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enroll: (state, action) => {
      const newEnrollment: Enrollment = {
        _id: new Date().getTime().toString(),
        user: action.payload.userId,
        course: action.payload.courseId,
      };
      state.enrollments.push(newEnrollment);
      // Note: Not saving to localStorage here to prevent persistence across refreshes
    },
    unenroll: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: Enrollment) =>
          enrollment.user !== action.payload.userId ||
          enrollment.course !== action.payload.courseId
      );
      // Note: Not saving to localStorage here either
    },
    clearEnrollments: (state) => {
      // Clears enrollments, but only for the session
      state.enrollments = [];
      localStorage.removeItem("enrollments");
    },
  },
});

export const { enroll, unenroll, clearEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
