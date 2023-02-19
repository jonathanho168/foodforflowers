import { Flex } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";

const UploadPage: React.FC = () => {
    return (
        <Flex className="container" flexDirection={"column"} h="100vh">
            Test Add Page
            <nav className="navbar">
                <Navbar />
            </nav>
        </Flex>
    );
};

export default UploadPage;
