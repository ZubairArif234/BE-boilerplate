const multer = require("multer");
const storage = multer.memoryStorage();
const uploader = multer({
  storage: storage,
  dest: "uploads/",
  // limits: { fileSize: 2 * 1024 * 1024 }, // 2MB in bytes
});
module.exports = uploader;
