import { Button } from "../../Shared/Buttons";
import { Modal } from "../../Shared/Modal";
import { Wrapper } from "./styles";

export const LoginModal = ({ setLogInModalOpen }) => {
  const handleCloseModal = () => setLogInModalOpen(false);

  return (
    <Modal title='Login' setModalClose={handleCloseModal}>
      <h3>Login to rate stickers and save private stickers/collections</h3>
      <Wrapper>
        <input value="" alt="email" placeholder="email" />
        <input value="" alt="password" placeholder="password" />
      </Wrapper>
      <Wrapper>
        <Button>Back</Button>
        <Button>Login</Button>
      </Wrapper>
    </Modal>
  );
}
