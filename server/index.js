const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'temp_uploads/' });

app.post('/upload', upload.array('files'), (req, res) => {
  const destination = req.body.destinationPath;

  req.files.forEach(file => {
    const targetPath = path.join(destination, file.originalname);
    fs.renameSync(file.path, targetPath); // move file to destination
  });

  res.json({ success: true });
});

app.listen(5000, () => console.log('Server started on port 5000'));
