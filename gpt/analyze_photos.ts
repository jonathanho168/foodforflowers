// Import fs and axios modules
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const path = require('path')
require('dotenv').config();

// Define constants
const photosDir = 'photos'; // The directory where photos are stored
const apiUrl = 'https://api.spoonacular.com/food/images/analyze'; // The API endpoint
const apiKey = process.env.SPOONACULAR_API_KEY; // The API key

const outputDir = 'analyses'; // The directory where JSON files are saved

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
                    const jsonObject = response.data;
                    // Convert it to a string with indentation for readability
                    const jsonString = JSON.stringify(jsonObject, null, 2);
                    // Define an output file name based on photo file name and extension .json
                    const outputFile = path.basename(file, '.jpg') + '.json';
                    // Write the JSON string to output file synchronously
                    fs.writeFileSync(path.join(outputDir, outputFile), jsonString);
                })
                .catch(error => {
                    // Log the error message
                    console.error(error.message);
                });
        }
    });
});