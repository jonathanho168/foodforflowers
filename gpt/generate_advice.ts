// Import fs and axios modules
const fs = require('fs');
const axios = require('axios');
const path = require('path')
require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Define constants
const analysesDir = 'analyses'; // The directory where photos are stored

new Promise((resolve, reject) => {
    const smallAnalyses = {}
    fs.readdir(analysesDir, (err, files) => {
        if (err) {
            console.error(err);
            reject(err);
        }
        // Loop through each photo file
        Promise.all(files.map(async (file) => {
            // Check if the file is a json file
            if (path.extname(file) === '.json') {
                // Read the json file
                const filePath = path.join(analysesDir, file);
                const data = await fs.promises.readFile(filePath, 'utf8');
                const jsonData = JSON.parse(data);
                // Do something with the JSON data
                const smallerJsonData = {
                    "food_name": jsonData.category.name,
                    "nutrition": {
                        "calories": jsonData.nutrition.calories.value + jsonData.nutrition.calories.unit,
                        "fat": jsonData.nutrition.fat.value + jsonData.nutrition.fat.unit,
                        "protein": jsonData.nutrition.protein.value + jsonData.nutrition.protein.unit,
                        "carbs": jsonData.nutrition.carbs.value + jsonData.nutrition.carbs.unit
                    }
                }
                smallAnalyses[path.parse(file).name] = smallerJsonData;
            }
        }))
            .then(() => resolve(smallAnalyses))
            .catch((err) => reject(err));
    })
}).then((result) => {
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: JSON.stringify(result, null, 2) +
            "Q: Generate a weekly recap for a user as a health professional would. This should be a kind, gentle, and specific recommendation for healthy eating habits based on the eating record below. Talk about how they did in comparison to their caloric goal of 1500 calories a day, without speaking about calories explicitly since it can harm the user. Tie your recommendations with a related area where the user succeeded. However, gently point out if there's an issue on dietary health.\n" +
            "A: ",
        max_tokens: 200,
    }).then((completion) => {
        console.log(completion.data.choices[0].text);
    })
});