import userCourseService from '../services/userCourse.service.js';

export const setUserCourse = async (req, res) => {
  try {
    const result = await userCourseService.setUserCourse(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserCourses = async (req, res) => {
  try {
    const result = await userCourseService.getUserCourses(req.params.userId);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUserCourse = async (req, res) => {
  try {
    const result = await userCourseService.deleteUserCourse(req.params.userId, req.params.courseId);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};