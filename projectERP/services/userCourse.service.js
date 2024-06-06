import UserCourse from '../models/user.course.mdoel.js';

const setUserCourse = async ({ userId, courseId }) => {
  const newUserCourse = new UserCourse({ userId, courseId });
  await newUserCourse.save();
  return { message: 'Course set for user' };
};

const getUserCourses = async (userId) => {
  const userCourses = await UserCourse.find({ userId }).populate('courseId', 'id title description createdAt');
  return userCourses.map(uc => ({
    id: uc.courseId._id,
    title: uc.courseId.title,
    description: uc.courseId.description,
    createdAt: uc.courseId.createdAt
  }));
};

const deleteUserCourse = async (userId, courseId) => {
  await UserCourse.findOneAndDelete({ userId, courseId });
  return { message: 'User course deleted' };
};

export default {
    setUserCourse, 
    getUserCourses, 
    deleteUserCourse
}