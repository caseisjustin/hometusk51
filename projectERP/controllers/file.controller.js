import fileService from '../services/file.service.js';

export const uploadFile = async (req, res) => {
  try {
    const result = await fileService.uploadFile(req.file);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listFiles = async (req, res) => {
  try {
    const result = await fileService.listFiles();
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const result = await fileService.deleteFile(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getFile = async (req, res) => {
  try {
    const result = await fileService.getFile(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const downloadFile = async (req, res) => {
  try {
    const file = await fileService.getFile(req.params.id);
    res.download(file.filepath, file.filename);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateFile = async (req, res) => {
  try {
    const result = await fileService.updateFile(req.params.id, req.body.filename);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};