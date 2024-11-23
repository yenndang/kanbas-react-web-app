import { createSlice } from "@reduxjs/toolkit";
import * as client from "./Enrollments/client";

const initialState = {
  enrollments: [] as any[],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    addEnrollmentToState: (state, action) => {
      state.enrollments.push(action.payload);
    },
    removeEnrollmentFromState: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          enrollment.user !== action.payload.userId ||
          enrollment.course !== action.payload.courseId
      );
    },
  },
});

export const {
  setEnrollments,
  addEnrollmentToState,
  removeEnrollmentFromState,
} = enrollmentSlice.actions;

// Async Thunks for API integration
export const enroll =
  (userId: string, courseId: string) => async (dispatch: any) => {
    const newEnrollment = await client.enrollUserInCourse(courseId, userId);
    dispatch(addEnrollmentToState(newEnrollment));
  };

export const unenroll =
  (userId: string, courseId: string) => async (dispatch: any) => {
    await client.unenrollUserFromCourse(courseId, userId);
    dispatch(removeEnrollmentFromState({ userId, courseId }));
  };

export default enrollmentSlice.reducer;
