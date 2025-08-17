import { useNavigate } from "react-router";

import { SignIn } from "../Icons/SignIn";
import { ContentBox, HeaderWrapper } from "../Shared/styles";
import { ContentWrapper, SearchInput, SearchWrapper, ShowcaseWrapper, Wrapper } from "./styles";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <HeaderWrapper>
        <h1>Sticker Book</h1>
      </HeaderWrapper>
      <SearchWrapper>
        <SearchInput type="search" placeholder=" Search for Stickers ..." />
      </SearchWrapper>
      <ContentWrapper>
        <ContentBox>
          <h3>( + )</h3>
          <p>Upload Sticker</p>
        </ContentBox>
        <ContentBox onClick={() => navigate('/my-collection')}>
          <SignIn height='10rem' />
          {/* <p>Sign-in to favorite and save Stickers to your collections.</p> */}
          <p>My Sticker Collection</p>
        </ContentBox>
      </ContentWrapper>
      <ShowcaseWrapper>
        ... some stickers ...
      </ShowcaseWrapper>
      <br />
      <div>
        Footer
      </div>
    </Wrapper>
  );
}
