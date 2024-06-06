import courseService from '../services/course.service.js';

export const addCourse = async (req, res) => {
  try {
    const result = await courseService.addCourse(req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const result = await courseService.getAllCourses();
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const result = await courseService.updateCourse(req.params.id, req.body);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const result = await courseService.deleteCourse(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCourse = async (req, res) => {
  try {
    const result = await courseService.getCourse(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};