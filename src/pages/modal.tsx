import React from "react";
import { Loading } from "@nextui-org/react";
import Image from 'next/image'
import { signIn, signOut, useSession } from "next-auth/react";
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import { AiOutlineGoogle } from 'react-icons/ai'
export default function App() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const { data: session, status } = useSession();
  if (status === "loading") {
    return  <Loading type="points-opacity" />
  }
  return (
    <div>
      {session ? (
      <>
      <Button auto css={{ backgroundColor: "$none" }} onClick={handler} className="relative">
        <Image className="rounded-full"
          src={`${session.user?.image}`}
          fill
          alt={`${session.user?.name} Profile Pict`}
        />
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
          <Modal.Header>
           <Text id="modal-title" size={18}>Hi
             <Text b size={18}> {session.user?.name}
             </Text>
           </Text>
          </Modal.Header>
          <Modal.Body>
            <Image className="mx-auto rounded-full"
              src={`${session.user?.image}`}
              width='200'
              height='200' alt={`${session.user?.name} Profile Pict`}/>
          </Modal.Body>
          <Modal.Footer justify="center">
            <Button auto flat onClick={closeHandler}>
            Close
            </Button>
            <Button auto color="error" onClick={() => signOut()}>
            Logout
            </Button>
          </Modal.Footer>
      </Modal>
      </>
      ):(
      <>
      <Button auto bordered onClick={handler} css={{color:"$black", borderColor:"$black", borderRadius:"unset"}}>
        Login
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>Login to
            <Text b size={18}> Aszshop
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            contentLeft={<MdOutlineEmail fill="currentColor" />}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            contentLeft={<MdOutlineLock fill="currentColor" />}
          />
          <Button onClick={() => signIn("google")} icon={<AiOutlineGoogle />} className="hover:bg-blue-700">Login with Google</Button>
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
          <Button auto onClick={closeHandler} className="hover:bg-blue-700">
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>
      </>
      )}
    </div>
  );
}