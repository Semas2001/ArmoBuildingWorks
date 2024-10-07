// pages/api/upload.ts
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false, 
  },
};

const uploadDir = path.join(process.cwd(), 'public'); 

const uploadHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = uploadDir;
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error in file upload' });
      return;
    }

    // Handle files here, you might want to move them or save their paths
    const uploadedFiles = Array.isArray(files.files) ? files.files : [files.files];
    
    uploadedFiles.forEach((file) => {
      const oldPath = file.filepath;
      const newPath = path.join(uploadDir, file.originalFilename);

      fs.rename(oldPath, newPath, (err) => {
        if (err) console.error('Error moving file:', err);
      });
    });

    res.status(200).json({ message: 'Files uploaded successfully' });
  });
};

export default uploadHandler;
