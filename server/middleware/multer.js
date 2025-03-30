const multer = require("multer");
const path = require("path");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    console.log(__dirname);
    
    
    cb(null, path.join(__dirname, "..", "uploads"));
  },

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
     const fileFilter = (req, file, cb) => {
       const allowedFileTypes = /jpeg|jpg|png|pdf/;
       const extname = allowedFileTypes.test(
         path.extname(file.originalname).toLowerCase()
       );
       const mimetype = allowedFileTypes.test(file.mimetype);

       if (extname && mimetype) {
         cb(null, true);
       } else {
         cb(
           new Error("Invalid file type. Only JPEG, PNG, and PDF are allowed.")
         );
       }
     };


       const upload = multer({
         storage: storage,
         fileFilter: fileFilter,
         limits: { fileSize: 5 * 1024 * 1024 }, // Limit files to 5MB
       });


module.exports={upload}