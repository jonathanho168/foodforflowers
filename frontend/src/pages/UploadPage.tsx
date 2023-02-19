import { Flex, Heading, Tabs, TabList, Tab, Center, VStack, Text, Button } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

import {
    ChangeEvent,
    useState
} from "react"

const UploadPage: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File>()

    const onFileChange = (event: ChangeEvent) => {
        setSelectedFile((event.target as HTMLInputElement).files![0])
    };

    // On file upload (click the upload button)
    const onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append(
            "myFile",
            selectedFile!,
            selectedFile!.name
        );
        // Details of the uploaded file
        console.log(selectedFile);
    };

    // file upload is complete
    const fileData = () => {
        if (selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {selectedFile.name}</p>
                    <p>File Type: {selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {selectedFile.lastModified}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
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
                    <button onClick={onFileUpload}>
                        Upload!
                    </button>
                </div>
                {fileData()}
            </VStack>
            <nav className="navbar">
                <Navbar />
            </nav>
        </Flex>
    );

};

export default UploadPage;
