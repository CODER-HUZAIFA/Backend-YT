import multer from "multer"

function fileUploadMulter (path) {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            return cb(null, path)
        },
        filename: function(req, file, cb) {
            return cb(null, `${Date.now()}-${file.originalname}`)
        }
    })

    return storage;
}

export {
    fileUploadMulter,
}