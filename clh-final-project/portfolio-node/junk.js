//gallery upload
server.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//gallery storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

//gallery filefilter
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//Init upload
const upload = multer({ storage: storage, fileFilter: fileFilter });

//upload route
server.post("/upload", upload.single("image"), (req, res, next) => {
  try {
    return res.status(201).json({
      message: "File uploded successfully",
    });
  } catch (error) {
    console.error(error);
  }
});




----------------------------------------------------------------------------------------------------


//Multer Setup
const storage = multer.diskStorage({
  destination: "/uploads",
filename: function (req, file, callback) {
  crypto.pseudoRandomBytes(16, function (err, raw) {
    if (err) return callback(err);
    callback(null, raw.toString("hex") + path.extname(file.originalname));
  });
},
});

//route to receive file
server.post(
"/",
upload.single("image", (req, res) => {
  if (!req.file) {
    console.log("No files received");
    return res.send({
      success: false,
    });
  } else {
    console.log("files received");
    return res.send({
      success: true,
    });
  }
})
);

--------------------------------------------------------------------------------------------------------------------

//gallery upload
server.use("/uploads", express.static(path.join(__dirname, "/uploads")));

//gallery storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname);

    const host = req.hostname;
    const filePath =
      req.protocol +
      "://" +
      host +
      ":" +
      process.env.PORT +
      "/uploads" +
      "/" +
      file.originalname;
    console.log("The file path to store on db is", filePath);
  },
});


//gallery filefilter
const fileFilter = (req, file, cb) => {
  if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//Init upload
const upload = multer({ storage: storage, fileFilter: fileFilter });

//upload route
server.post("/upload", upload.single("image"), (req, res, next) => {
  try {
    return res.status(201).json({
      message: "File uploded successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

---------------------------------------------------------------------------------------
import React from "react";

const Dashboard = () => (
  <form action="/upload" enctype="multipart/form-data" method="POST">
    <input type="file" name="myImage" />
    <input type="submit" value="Upload a file" />
  </form>
);

export default Dashboard;
