import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    useColorModeValue,
    Icon
} from '@chakra-ui/react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';


const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Navbar() {
    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={20} justifyContent={'space-between'}>
                <Flex alignItems={'center'}>
                    <HStack
                        as={'nav'}
                        spacing={4}
                        display={'flex'}>
                        <NavLink key={'Garden'}><Flex flexDirection={'column'} alignItems={'center'}>< Icon as={LocalFloristIcon} />Garden</Flex></NavLink>
                        <NavLink key={'Upload a Meal'}><Flex flexDirection={'column'} alignItems={'center'}><Icon as={AddCircleIcon} /> Upload a Meal </Flex></NavLink>
                        <NavLink key={'Profile'}><Flex flexDirection={'column'} alignItems={'center'}>< Icon as={AccountCircleIcon} /> Profile </Flex></NavLink>
                    </HStack>
                </Flex>
            </Flex>
        </Box>
    );
}