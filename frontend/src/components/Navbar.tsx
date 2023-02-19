import { Button, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import * as Routes from "../constants/Routes";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface NavbarItemProps {
    to: string;
    label: string;
    icon: JSX.Element;
}

function NavbarItem(props: NavbarItemProps): JSX.Element {
    const { to, label, icon } = props;

    return (
        <NavLink to={to} key={label}>
            <Button
                variant="ghost"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                py={10}
                _focus={{ boxShadow: "none" }}
            >
                {icon}
                {label}
            </Button>
        </NavLink>
    );
}

export default function Navbar(): JSX.Element {
    return (
        <Flex
            bg={useColorModeValue("white", "gray.800")}
            px={4}
            py={3}
            position="fixed"
            bottom="0"
            width="full"
            borderTopWidth={1}
            borderTopColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent="space-between"
        >
            <NavbarItem
                to={Routes.HOME_PAGE}
                label="Garden"
                icon={<Icon as={LocalFloristIcon} />}
            />
            <NavbarItem
                to={Routes.UPLOAD_PAGE}
                label="Add"
                icon={<Icon as={AddCircleIcon} />}
            />
            <NavbarItem
                to={Routes.PROFILE_PAGE}
                label="Profile"
                icon={<Icon as={AccountCircleIcon} />}
            />
        </Flex>
    );
}
