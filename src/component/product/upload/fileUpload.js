const multer = require("multer"); 

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
      cb(null, "");
    },
  });

  const filefilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  exports.upload = multer({ storage: storage, fileFilter: filefilter });
