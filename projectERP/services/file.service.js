import File from "../models/file.model.js";

const uploadFile = async (file) => {
    const newFile = new File({
        filename: file.originalname,
        filepath: file.path
    });
    await newFile.save();
    return { message: 'File uploaded', fileId: newFile._id };
};

const listFiles = async () => {
    const files = await File.find().select('id filename createdAt');
    return files;
};

const deleteFile = async (fileId) => {
    await File.findByIdAndDelete(fileId);
    return { message: 'File deleted' };
};

const getFile = async (fileId) => {
    const file = await File.findById(fileId).select('id filename filepath createdAt');
    return file;
};

const updateFile = async (fileId, filename) => {
    const file = await File.findById(fileId);
    if (!file) {
        throw new Error('File not found');
    }
    file.filename = filename;
    await file.save();
    return { message: 'File updated' };
};

export default {
    uploadFile, 
    listFiles, 
    deleteFile, 
    getFile, 
    updateFile
}