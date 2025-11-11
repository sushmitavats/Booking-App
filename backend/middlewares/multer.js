import multer from 'multer';
import fs from 'fs';
import path from 'path';

// ensure uploads folder exists
const uploadPath = 'uploads/';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, uploadPath);
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname)); // make it unique
  }
});

const upload = multer({ storage });
export default upload;




