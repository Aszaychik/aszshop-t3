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
          <Text b color='inherit' hideIn='xs'>
            ASZSHOP
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            w:"100%",
            jc: "center",
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              w:"100%",
              jc: "center",
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              clearable
              contentLeft={
                <TbSearch fill="var(--nextui-colors-accents6)" size={16}/>}
                css={{
                  w:"75%",
                  jc: "center",
                }}
              
            />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content variant="underline-rounded" enableCursorHighlight gap="$10" >
          <Navbar.Link hideIn="xs" isActive href="#">Home</Navbar.Link>
          <Navbar.Link hideIn="xs" href="#">Category</Navbar.Link>
          <Navbar.Link hideIn="xs" href="#">Contact</Navbar.Link>
          <Navbar.Item>{modal()}</Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </SSRProvider>
  );
}