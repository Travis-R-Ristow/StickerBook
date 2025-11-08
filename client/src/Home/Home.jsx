import { useState } from "react";
import { useNavigate } from "react-router";

import { SignIn } from "../Icons/SignIn";
import { Footer } from "../Shared/Footer";
import { Sticker } from "../Shared/Sticker";
import { HeaderWrapper } from "../Shared/styles";
import sticker1 from "../stickers/sticker1.png";
import sticker2 from "../stickers/sticker2.png";
import sticker3 from "../stickers/sticker3.png";
import { LoginModal } from "./LoginModal";
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
          <Sticker src={sticker1} alt="sticker1" />
          <Sticker src={sticker2} alt="sticker2" />
          <Sticker src={sticker3} alt="sticker3" />
        </ShowcaseWrapper>
        <br />
        <br />
        <Footer />
      </Wrapper>
      {logInModalOpen &&
        <LoginModal setLogInModalOpen={setLogInModalOpen} />
      }
    </>
  );
}
