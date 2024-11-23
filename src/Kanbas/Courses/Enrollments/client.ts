import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

// Get all enrollments for a course
export const findEnrollmentsForCourse = async (courseId: string) => {
  const response = await axios.get(
    `${REMOTE_SERVER}/api/courses/${courseId}/enrollments`
  );
  return response.data;
};

// Enroll a user in a course
export const enrollUserInCourse = async (courseId: string, userId: string) => {
  const response = await axios.post(
    `${REMOTE_SERVER}/api/courses/${courseId}/enroll`,
    { userId }
  );
  return response.data;
};

// Unenroll a user from a course
export const unenrollUserFromCourse = async (
  courseId: string,
  userId: string
) => {
  await axios.delete(`${REMOTE_SERVER}/api/courses/${courseId}/unenroll`, {
    data: { userId },
  });
};
// Get all enrollments for a user
export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axios.get(
    `${REMOTE_SERVER}/api/users/${userId}/enrollments`
  );
  return response.data;
};
