import { Dropdown, Input, Link, Navbar, Text } from "@nextui-org/react";
import modal from "./modal";
import { TbBrandVercel, TbSearch } from 'react-icons/tb'
import {SSRProvider} from '@react-aria/ssr'; 
export default function App() {
  const collapseItems = [
    {key :"Home"},
    {key :"Contact"},
  ];
  const dropdownItems = [
    {key :"Laptop"},
    {key :"Smartphone"},
    {key :"Motherboard"},
    {key :"CPU"},
    {key :"Power Supply"},
    {key :"Mouse & Keyboard"},
  ]
  return (
    <SSRProvider>
      <Navbar disableBlur containerCss={{bgColor:'$white'}} variant="sticky" maxWidth='fluid'>
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
        <Navbar.Content variant="underline" underlineHeight='bold' activeColor='neutral' gap="$10" >
          <Navbar.Link color='text' hideIn="xs" isActive href="#">Home</Navbar.Link>
          <Dropdown >
            <Navbar.Item hideIn="xs">
              <Dropdown.Button
                auto
                light
                css={{
                  px: 0,
                  dflex: "center",
                  svg: { pe: "none" },
                }}
                ripple={false}>Category
              </Dropdown.Button>
              </Navbar.Item>
              <Dropdown.Menu variant="flat">
                {dropdownItems.map((item) => (
                  <Dropdown.Item key={item.key}>{item.key}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
          </Dropdown>
          <Navbar.Link color='text' hideIn="xs" href="#">Contact</Navbar.Link>
          <Navbar.Item>{modal()}</Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
        {collapseItems.map((item) => (
          <Navbar.CollapseItem
            key={item.key}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
                dflex: "center",
                fontSize: '$md',
                fontWeight: "$normal"
              }}
              href="#"
            >
              {item.key}
            </Link>
          </Navbar.CollapseItem>
        ))}
          <Navbar.CollapseItem>
            <Dropdown >
                  <Dropdown.Button
                    auto
                    light
                    
                    css={{
                      px: 0,
                      dflex: "center",
                      fontSize: '$md',
                      fontWeight: "$normal"
                    }}
                    ripple={false}>Category
                  </Dropdown.Button>
                  <Dropdown.Menu variant="flat">
                    {dropdownItems.map((item) => (
                      <Dropdown.Item key={item.key}>{item.key}</Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
              </Dropdown>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </SSRProvider>
  );
}