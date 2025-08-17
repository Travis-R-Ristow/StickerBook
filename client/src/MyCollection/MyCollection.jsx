import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { HeaderWrapper } from "../Shared/styles";
import sticker1 from "../stickers/sticker1.png"
import sticker2 from "../stickers/sticker2.png";
import sticker3 from "../stickers/sticker3.png";
import { Folder, FolderWrapper, NavBar, StickerWrapper, ToolBar, Wrapper } from "./styles";

export const MyCollection = () => {
  const navigate = useNavigate();

  const [folderSelected, setFolderSelected] = useState(null);

  useEffect(() => {
    const allStickers = document.getElementsByClassName("sticker");
    for (var i = 0; i < allStickers.length; i++) {
      const sticker = allStickers[i];
      sticker.addEventListener('mouseenter', updateImgRotate);
    }

    return (() => {
      for (var i = 0; i < allStickers.length; i++) {
        const sticker = allStickers[i];
        sticker.removeEventListener('mouseenter', updateImgRotate);
      }
    })
  }, []);


  return (
    <Wrapper>
      <NavBar>
        <div onClick={() => navigate('/')}>Home</div>
        <div onClick={() => navigate('/')}>Upload Image</div>
      </NavBar>
      <HeaderWrapper>
        <h2>My Stickers</h2>
      </HeaderWrapper>
      <ToolBar>
        <div>Create Folder</div>
        <div>Delete Folder</div>
        <div onClick={() => setFolderSelected(false)}>
          {folderSelected && "Back"}
        </div>
      </ToolBar>
      {!folderSelected &&
        <FolderWrapper>
          <Folder onClick={() => setFolderSelected(true)}>
            All Stickers
          </Folder>
          <Folder onClick={() => setFolderSelected(true)}>
            Folder 1
          </Folder>
          <Folder onClick={() => setFolderSelected(true)}>
            Folder 2
          </Folder>
          <Folder onClick={() => setFolderSelected(true)}>
            Folder 3
          </Folder>
          <Folder onClick={() => setFolderSelected(true)}>
            Folder 4
          </Folder>
          <Folder onClick={() => setFolderSelected(true)}>
            Folder 5
          </Folder>
          <Folder onClick={() => setFolderSelected(true)}>
            Folder 6
          </Folder>
        </FolderWrapper>
      }
      {folderSelected &&
        <FolderWrapper>
          <Folder className="not-clickable">
            Selected Folder
          </Folder>
        </FolderWrapper>
      }
      <StickerWrapper>
        <img src={sticker1} alt="sticker1" className="sticker" />
        <img src={sticker2} alt="sticker2" className="sticker" />
        <img src={sticker3} alt="sticker3" className="sticker" />
      </StickerWrapper>
    </Wrapper >
  );
};

const MAX_ROTATE = 10;
const updateImgRotate = () =>
  document.documentElement.style
    .setProperty(
      '--rand-img-rotate',
      `${Math.floor(Math.random() * (MAX_ROTATE * 2 + 1) + -MAX_ROTATE)}deg`
    );
