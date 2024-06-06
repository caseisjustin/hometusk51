import mongoose from 'mongoose';

const userCourseSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
});

export default mongoose.model('UserCourse', userCourseSchema);