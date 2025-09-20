import { useState } from "react";
import { useNavigate } from "react-router";

import { SignIn } from "../Icons/SignIn";
import { Modal } from "../Shared/Modal";
import { HeaderWrapper } from "../Shared/styles";
import sticker1 from "../stickers/sticker1.png";
import sticker2 from "../stickers/sticker2.png";
import sticker3 from "../stickers/sticker3.png";
import { ContentBlock, ContentWrapper, SearchInput, SearchWrapper, ShowcaseWrapper, Wrapper } from "./styles";

export const Home = () => {
  const navigate = useNavigate();

  const [logInModalOpen, setLogInModalOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleIsLoggedInClick = () =>
    isLoggedIn ? navigate('/my-collection') : setLogInModalOpen(true);


  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <h1>Sticker Book</h1>
        </HeaderWrapper>
        <SearchWrapper>
          <SearchInput type="search" placeholder=" Search for Stickers ..." />
        </SearchWrapper>
        <ContentWrapper>
          <ContentBlock>
            <h3>( + )</h3>
            <p>Upload Sticker</p>
          </ContentBlock>
          <ContentBlock onClick={handleIsLoggedInClick}>
            <SignIn height='10rem' />
            {isLoggedIn ?
              <p>My Sticker Collection</p>
              :
              <p>Sign-in to favorite and save Stickers to your collections.</p>
            }
          </ContentBlock>
        </ContentWrapper>
        <ShowcaseWrapper>
          <img src={sticker1} alt="sticker1" className="sticker" />
          <img src={sticker2} alt="sticker2" className="sticker" />
          <img src={sticker3} alt="sticker3" className="sticker" />
        </ShowcaseWrapper>
        <br />
        <br />
        <div>
          Footer
        </div>
      </Wrapper>
      {logInModalOpen &&
        <Modal>
          Test
        </Modal>
      }
    </>
  );
}
