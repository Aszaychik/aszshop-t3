import { Dropdown, Input, Link, Navbar, Text } from "@nextui-org/react";
import modal from "./modal";
import { TbBrandVercel, TbSearch } from 'react-icons/tb'
import {SSRProvider} from '@react-aria/ssr'; 
export default function App() {
  const collapseItems = [
    "Home",
    "Category",
    "Contact",
  ];
  return (
    <SSRProvider>
      <Navbar disableBlur containerCss={{bgColor:'$white', padding: "$5"}} variant="sticky" maxWidth='fluid'>
        <Navbar.Toggle showIn='xs'/>
        <Navbar.Brand css={{ml:'$8', mr: '$2', gap:"$10" }}>
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
              placeholder="Search..."
              clearable
              contentLeft={
                <TbSearch size={16}/>}
                css={{
                  w:"75%",
                  jc: "center",
                  "@xsMax": {
                    w: "90%",
                    jc: "center",
                  },
                }}
              
            />
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content variant="underline-rounded" enableCursorHighlight underlineHeight='bold' activeColor='neutral' gap="$10" >
          <Navbar.Link color='text' hideIn="xs" isActive href="#">Home</Navbar.Link>
          <Navbar.Link color='text' hideIn="xs" href="#">Category</Navbar.Link>
          <Navbar.Link color='text' hideIn="xs" href="#">Contact</Navbar.Link>
          <Navbar.Item>{modal()}</Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </SSRProvider>
  );
}