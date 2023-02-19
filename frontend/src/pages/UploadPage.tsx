import { Flex, Heading, Tabs, TabList, Tab, Center, VStack, Text, Button, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import axios from 'axios';

import {
    ChangeEvent,
    useState
} from "react"

const UploadPage: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File>()
    const [spoonacularRes, setSpoonacularRes] = useState()

    const onFileChange = (event: ChangeEvent) => {
        setSelectedFile((event.target as HTMLInputElement).files![0])
    };

    // On file upload (click the upload button)
    const onFileUpload = () => {
        const apiUrl = 'https://api.spoonacular.com/food/images/analyze'; // The API endpoint
        const form = new FormData();
        form.append('file', selectedFile as File);
        const config = {
            params: {
                apiKey: "e80e011898bd44fd8a5c1a8a224a1a71", //Shouldn't be exposed ¯\_(ツ)_/¯
            },
        };
        // Post the form data to the API endpoint
        console.log("send")
        axios.post(apiUrl, form, config)
            .then(response => {
                // Log the response data
                const jsonObject = response.data;
                console.log(jsonObject)

                setSpoonacularRes(jsonObject)
            })
            .catch(error => {
                // Log the error message
                console.error(error.message);
            });
    };

    // file upload is complete
    const fileData = () => {
        if (spoonacularRes) {
            return (
                <div>
                    <h2>Upload done!</h2>
                    <p><b>Food Category: {spoonacularRes["category"]["name"]}</b></p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Press the Send button to upload</h4>
                </div>
            );
        }
    };

    return (
        <Flex className="container" flexDirection={"column"} h="100vh">
            <VStack marginTop={5} spacing={3}>
                <Heading as='h1' size='2xl' noOfLines={1}>
                    Add your Food.
                </Heading>
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab>Picture</Tab>
                        <Tab>Text</Tab>
                    </TabList>
                </Tabs>
                <Text>
                    Share what you're eating with us!
                </Text>
                <div>
                    <input type="file" onChange={onFileChange}>
                    </input>
                    <Button onClick={onFileUpload}>
                        Send
                    </Button>
                </div>
                {selectedFile != undefined ? <Image width={100} src={URL.createObjectURL(selectedFile as File)} /> : null}
                {fileData()}
            </VStack>
            <nav className="navbar">
                <Navbar />
            </nav>
        </Flex>
    );

};

export default UploadPage;
