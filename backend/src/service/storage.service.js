// USED TO HANDLE FILE STORAGE, SUCH AS UPLOADING IMAGES TO CLOUDINARY OR IMAGEKIT

const { ImageKit } = require('@imagekit/nodejs');

// new imagekit instance with your credentials used to upload images to imagekit

const imageKit = new ImageKit({
  privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(buffer) {
  const result = await imageKit.files.upload({
  file : buffer.toString('base64'), // the file buffer from multer
  fileName : "image.jpg", // the original name of the uploaded file
})
return result; // return the result of the upload, which contains the URL of the uploaded image
}

//the file buffer is used here as in buffer the actual file data is stored, which can be directly uploaded to imagekit without needing to save it to disk first. This allows for faster uploads and reduces the need for temporary storage on the server.

module.exports = uploadFile; // to export the uploadFile function for use in other files