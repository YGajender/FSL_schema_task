import cloudinary from 'cloudinary';
import dotenv from "dotenv";
dotenv.config();

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function uploadImages(files) {
    if (typeof files !== 'object' || files === null) {
      throw new TypeError('Expected files to be an object');
    }
  
    const fileArray = Object.values(files);
    const results = [];
  
    // Ensure that each file upload is awaited
    for (const file of fileArray) {
      const result = await upload(file);
      results.push(result);
    }
  
    return results;  
}
  
  export async function upload(file) {  
      
    const { data, mimetype, name } = file;
  
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload_stream( //function of cloudinery
        { resource_type: 'auto', public_id: name, mime_type: mimetype },
        (error, result) => {
          if (error) {
            reject('Error uploading image:', error);
          } else {
            console.log('Image uploaded successfully', result);
            resolve(result);  // Resolve with the result of the upload
          }
        }
      ).end(data);  // Upload the file
    });
}  