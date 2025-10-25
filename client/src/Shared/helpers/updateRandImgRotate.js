const MAX_ROTATE = 10;
export const updateImgRotate = (maxRotate = MAX_ROTATE) =>
  document.documentElement.style.setProperty(
    "--rand-img-rotate",
    `${Math.floor(Math.random() * (maxRotate * 2 + 1) + -maxRotate)}deg`,
  );
