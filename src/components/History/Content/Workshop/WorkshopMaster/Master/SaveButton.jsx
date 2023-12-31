import { useSelector } from 'react-redux';

import style from './style.module.css';

function SaveButton() {
  const show = useSelector((state) => state.workshop.show);

  return (
    <a
      download
      className={style.document__link}
      href={`${process.env.REACT_APP_TEPTAR_HOST}/api/storage/download/${show.file?.path_to_file}`}
    >
      <div className={style.link__text}>Скачать оригинал</div>
      <div className={style.link__logo}>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 615.11 547.33"
        >
          <path
            className={style.link__path}
            d="M783.9,455.51V711.26a19.15,19.15,0,0,1-19.16,19.15h-465a19.15,19.15,0,0,1-19.15-19.15V455.51a19.16,19.16,0,0,0-19.16-19.15H243.86a19.15,19.15,0,0,0-19.15,19.15V767.18a19.15,19.15,0,0,0,19.15,19.15h576.8a19.15,19.15,0,0,0,19.16-19.15V455.51a19.16,19.16,0,0,0-19.16-19.15h-17.6A19.16,19.16,0,0,0,783.9,455.51Z"
            transform="translate(-224.71 -239)"
          />
          <path
            className={style.link__path}
            d="M640.51,490.64H573.29a13.07,13.07,0,0,1-13.07-13.07V252.07A13.07,13.07,0,0,0,547.16,239H517.37a13.07,13.07,0,0,0-13.07,13.07v225.5a13.07,13.07,0,0,1-13.06,13.07H424a13.06,13.06,0,0,0-9.24,22.3L523,621.19a13.05,13.05,0,0,0,18.48,0L649.75,512.94A13.06,13.06,0,0,0,640.51,490.64Z"
            transform="translate(-224.71 -239)"
          />
        </svg>
      </div>
    </a>
  );
}

export default SaveButton;
