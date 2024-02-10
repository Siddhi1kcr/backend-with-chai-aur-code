// import multer from "multer"

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './public/temp/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
// })
// export const upload = multer({ storage })

import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp/');
    },
    filename: function (req, file, cb) {
        const uniqueFilename = `${uuidv4()}${path.extname(file.originalname)}`;
        cb(null, uniqueFilename);
    }
});

export const upload = multer({ storage });

// // Optionally, you can handle errors in the storage configuration:
// storage.on('error', function(err) {
//     console.error('Multer storage error:', err);
// });
