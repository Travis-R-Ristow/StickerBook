const MAX_ROTATE = 10;
export const updateImgRotate = () =>
  document.documentElement.style.setProperty(
    "--rand-img-rotate",
    `${Math.floor(Math.random() * (MAX_ROTATE * 2 + 1) + -MAX_ROTATE)}deg`,
  );
