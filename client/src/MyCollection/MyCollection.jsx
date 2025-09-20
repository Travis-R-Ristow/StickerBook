import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { HeaderWrapper } from "../Shared/styles";
import sticker1 from "../stickers/sticker1.png"
import sticker2 from "../stickers/sticker2.png";
import sticker3 from "../stickers/sticker3.png";
const My_Stickers = [sticker1, sticker2, sticker3];
import { Folder, FolderWrapper, NavBar, StickerWrapper, ToolBar, Wrapper } from "./styles";

export const MyCollection = () => {
  const navigate = useNavigate();

  const [folderSelected, setFolderSelected] = useState();
  const stickersRef = useRef([]);

  useEffect(() => {
    const allStickers = stickersRef.current;
    for (var i = 0; i < allStickers.length; i++) {
      const sticker = allStickers[i];
      if (!sticker) {
        continue;
      }
      sticker.addEventListener('mouseenter', updateImgRotate);
    }

    return (() => {
      for (var i = 0; i < allStickers.length; i++) {
        const sticker = allStickers[i];
        if (!sticker) {
          continue;
        }
        sticker.removeEventListener('mouseenter', updateImgRotate);
      }
    })
  }, []);


  return (
    <Wrapper>
      <NavBar>
        <div onClick={() => navigate('/')}>Home</div>
        <div onClick={() => navigate('/')}>Upload Sticker</div>
        <div onClick={() => navigate('/log-out')}>Log Out</div>
      </NavBar>
      <HeaderWrapper>
        <h2>My Stickers</h2>
      </HeaderWrapper>
      <ToolBar>
        <div>Edit Folder</div>
        <div>Create Folder</div>
        <div className="red">Delete Folder</div>
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
          <Folder onClick={() => setFolderSelected(false)}>
            Parent Folder
          </Folder>
        </FolderWrapper>
      }
      <StickerWrapper>
        {My_Stickers.map((s, i) =>
          <img src={s} alt={`sticker${i}`} key={`sticker${i}`} ref={img => stickersRef.current[i] = img} />
        )}
      </StickerWrapper>
      <div>
        <br />
        <br />
        <br />
      </div>
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
