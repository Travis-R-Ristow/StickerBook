import { Button } from "../../Shared/Buttons";
import { Modal } from "../../Shared/Modal";
import { Input, InputWrapper, Wrapper } from "./styles";

export const LoginModal = ({ setLogInModalOpen }) => {
  const handleCloseModal = () => setLogInModalOpen(false);

  return (
    <Modal title='Login' setModalClose={handleCloseModal}>
      <h3>Login to rate stickers and save private stickers/collections</h3>
      <InputWrapper>
        <Input value="" alt="email" placeholder="email" />
        <Input value="" alt="password" placeholder="password" />
      </InputWrapper>
      <Wrapper>
        <Button className="bigText green" onClick={handleCloseModal}>Back</Button>
        <Button className="bigText green">Login</Button>
      </Wrapper>
    </Modal>
  );
}
