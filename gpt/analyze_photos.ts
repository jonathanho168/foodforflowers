// Import fs and axios modules
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const path = require('path')

// Define constants
const photosDir = 'photos'; // The directory where photos are stored
const apiUrl = 'https://api.spoonacular.com/food/images/analyze'; // The API endpoint
const apiKey = 'bf6c1c6bb92e4cfa9090c0d0a1de65c3'; // The API key

// Read all photos in the directory
fs.readdir(photosDir, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    // Loop through each photo file
    files.forEach(file => {
        // Check if the file is a jpg image
        if (path.extname(file) === '.jpg') {
            // Create a form data object
            const form = new FormData();
            // Append the photo file to the form data
            form.append('file', fs.createReadStream(path.join(photosDir, file)));
            // Create an axios config object with headers and params
            const config = {
                headers: {
                    ...form.getHeaders(),
                },
                params: {
                    apiKey: apiKey,
                },
            };
            // Post the form data to the API endpoint
            axios.post(apiUrl, form, config)
                .then(response => {
                    // Log the response data
                    console.log(response.data);
                })
                .catch(error => {
                    // Log the error message
                    console.error(error.message);
                });
        }
    });
});
