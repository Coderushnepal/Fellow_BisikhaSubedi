//gallery upload
server.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//gallery storage
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.myImage + "-" + Date.now() + path.extname(file.originalname));
  },
});

//gallery filefilter
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//Init upload
const upload = multer({ storage: storage }).single("myImage");

//upload route
server.post("/upload", (req, res, next) => {
  upload(req, res, (err) => {
    console.log(req.file);
    res.send("test");
  });
});
