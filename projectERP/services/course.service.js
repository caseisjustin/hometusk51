import Course from '../models/user.course.mdoel.js';

const addCourse = async ({ title, description }) => {
    const newCourse = new Course({ title, description });
    await newCourse.save();
    return { message: 'Course added', courseId: newCourse._id };
};

const getAllCourses = async () => {
    const courses = await Course.find().select('id title description createdAt');
    return courses;
};

const updateCourse = async (courseId, { title, description }) => {
    const course = await Course.findById(courseId);
    if (!course) {
        throw new Error('Course not found');
    }
    course.title = title;
    course.description = description;
    await course.save();
    return { message: 'Course updated' };
};

const deleteCourse = async (courseId) => {
    await Course.findByIdAndDelete(courseId);
    return { message: 'Course deleted' };
};

const getCourse = async (courseId) => {
    const course = await Course.findById(courseId).select('id title description createdAt');
    return course;
};

export default {
    addCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    getCourse 
}