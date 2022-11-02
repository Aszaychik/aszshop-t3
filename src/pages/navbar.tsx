import { Input, Navbar, Text } from "@nextui-org/react";
import modal from "./modal";
import { TbBrandVercel, TbSearch } from 'react-icons/tb'
import {SSRProvider} from '@react-aria/ssr'; 
export default function App() {
  return (
    <SSRProvider>
      <Navbar variant="sticky">
        <Navbar.Brand css={{ mr: "$4", gap:"$10" }}>
          <TbBrandVercel/>
          <Text b color='inherit' css={{ mr: "$11" }} hideIn='xs'>
            ASZSHOP
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight" enableCursorHighlight gap="$10" >
          <Navbar.Link isActive href="#">Home</Navbar.Link>
          <Navbar.Link href="#">Category</Navbar.Link>
          <Navbar.Link href="#">Settings</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>{modal()}</Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </SSRProvider>
  );
}