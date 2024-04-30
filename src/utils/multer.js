import multer from "multer"

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "../../public/images/profileImage")
    },
    filename: function(req, file, cb) {
        return cb(null, `${Date.now}`)
    }
})