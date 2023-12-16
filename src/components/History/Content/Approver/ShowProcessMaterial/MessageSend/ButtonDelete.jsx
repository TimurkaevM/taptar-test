import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openApproverReject } from '../../../../../../redux/ducks/application';

import style from './style.module.css';

function ButtonDelete() {
  const body = document.querySelector('body');

  const dispatch = useDispatch();

  const openReject = () => {
    body.style.overflow = 'hidden';
    dispatch(openApproverReject());
  };

  const [buttonDeleteHovered, setButtonDeleteHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setButtonDeleteHovered(true)}
      onMouseLeave={() => setButtonDeleteHovered(false)}
      onClick={openReject}
      className={style.add__btn}
    >
      {buttonDeleteHovered ? (
        <svg
          className={style.svg}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 8.51757V16.4824C1 20.6844 4.44142 24 8.5798 24H16.4223C20.5772 24 24 20.668 24 16.4824V8.51757C24 4.30946 20.5503 1 16.4223 1H8.5798C4.40005 1 1 4.36485 1 8.51757ZM6.8136 7.52658H9.57045C9.78347 6.09857 11.0244 5.02346 12.501 5.02346C13.9777 5.02346 15.2186 6.10062 15.4316 7.52658H18.1885C18.4739 7.52658 18.7076 7.75843 18.7076 8.04157C18.7076 8.27752 18.5442 8.47859 18.325 8.53809V17.7791C18.325 18.9897 17.326 19.9806 16.1058 19.9806H8.8983C7.67809 19.9806 6.67917 18.9897 6.67917 17.7791V8.53809C6.45994 8.47859 6.29656 8.27752 6.29656 8.04157C6.29656 7.75843 6.53026 7.52658 6.81566 7.52658H6.8136ZM12.501 6.05343C11.5972 6.05343 10.8258 6.67511 10.6273 7.52658H14.3769C14.1762 6.67511 13.4069 6.05343 12.5031 6.05343H12.501ZM15.3737 10.319V17.1882C15.3737 17.4714 15.14 17.7032 14.8546 17.7032C14.5692 17.7032 14.3355 17.4714 14.3355 17.1882V10.319C14.3355 10.0359 14.5692 9.80401 14.8546 9.80401C15.14 9.80401 15.3737 10.0359 15.3737 10.319ZM17.2847 8.55656H7.71531V17.7791C7.71531 18.4234 8.24683 18.9507 8.89623 18.9507H16.1038C16.7532 18.9507 17.2847 18.4234 17.2847 17.7791V8.55656ZM13.0201 10.319V17.1882C13.0201 17.4714 12.7864 17.7032 12.501 17.7032C12.2156 17.7032 11.9819 17.4714 11.9819 17.1882V10.319C11.9819 10.0359 12.2156 9.80401 12.501 9.80401C12.7864 9.80401 13.0201 10.0359 13.0201 10.319ZM10.6666 10.319V17.1882C10.6666 17.4714 10.4329 17.7032 10.1475 17.7032C9.86206 17.7032 9.62836 17.4714 9.62836 17.1882V10.319C9.62836 10.0359 9.86206 9.80401 10.1475 9.80401C10.4329 9.80401 10.6666 10.0359 10.6666 10.319Z"
            fill="#4686CC"
            stroke="#4686CC"
            strokeWidth="0.197594"
            strokeMiterlimit="22.9256"
          />
        </svg>
      ) : (
        <svg
          className={style.svg}
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.973 7.29847H16.2987C16.5402 7.29847 16.7372 7.49397 16.7372 7.73367C16.7372 7.93427 16.6001 8.10257 16.4135 8.15357V15.9565C16.4135 16.9799 15.5709 17.8146 14.5416 17.8146H8.45841C7.42742 17.8146 6.58653 16.9782 6.58653 15.9565V8.15357C6.39985 8.10257 6.26284 7.93427 6.26284 7.73367C6.26284 7.49397 6.45979 7.29847 6.70127 7.29847H9.02699C9.20682 6.09318 10.2549 5.18368 11.5 5.18368C12.7451 5.18368 13.7932 6.09318 13.973 7.29847ZM13.0824 7.29847C12.9146 6.57937 12.2638 6.05408 11.5 6.05408C10.7379 6.05408 10.0871 6.57937 9.91755 7.29847H13.0824ZM7.46167 8.16887V15.9565C7.46167 16.5005 7.91037 16.9459 8.45841 16.9459H14.5416C15.0896 16.9459 15.5383 16.5005 15.5383 15.9565V8.16887H7.46167ZM13.0482 14.4567V10.6564C13.0482 10.4167 13.2451 10.2212 13.4866 10.2212C13.7281 10.2212 13.9251 10.4167 13.9251 10.6564V14.4567C13.9251 14.6964 13.7281 14.8919 13.4866 14.8919C13.2451 14.8919 13.0482 14.6964 13.0482 14.4567ZM9.07495 14.4567V10.6564C9.07495 10.4167 9.2719 10.2212 9.51337 10.2212C9.75485 10.2212 9.9518 10.4167 9.9518 10.6564V14.4567C9.9518 14.6964 9.75485 14.8919 9.51337 14.8919C9.2719 14.8919 9.07495 14.6964 9.07495 14.4567ZM11.0616 14.4567V10.6564C11.0616 10.4167 11.2585 10.2212 11.5 10.2212C11.7415 10.2212 11.9384 10.4167 11.9384 10.6564V14.4567C11.9384 14.6964 11.7415 14.8919 11.5 14.8919C11.2585 14.8919 11.0616 14.6964 11.0616 14.4567Z"
            fill="#BED1E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.79465 14.8634V8.13657C1.79465 6.95337 2.12176 5.84498 2.69206 4.89468C3.4456 3.63669 4.6273 2.65749 6.03678 2.15769C6.70984 1.918 7.43598 1.7888 8.19295 1.7888H14.8122C15.5709 1.7888 16.297 1.9197 16.9718 2.15939C19.4414 3.03829 21.2071 5.38428 21.2071 8.13657V14.8634C21.2071 15.0844 21.1951 15.3037 21.1728 15.5196C21.1711 15.5417 21.1677 15.5638 21.166 15.5876C21.1642 15.6097 21.1608 15.6318 21.1574 15.6539C20.8988 17.7432 19.5921 19.5775 17.6996 20.5295C17.6551 20.5516 17.6106 20.5737 17.5643 20.5958C17.5181 20.6179 17.4701 20.64 17.4239 20.6604C16.6258 21.0157 15.7421 21.2129 14.8105 21.2129H8.19124C7.08147 21.2129 6.03849 20.9324 5.1291 20.4394C5.088 20.4173 5.04518 20.3935 5.00408 20.3697C4.96297 20.3459 4.92358 20.3238 4.88419 20.3C2.96265 19.1457 1.79465 17.0887 1.79465 14.8634ZM1 8.13657V14.8634C1 16.9867 1.94193 18.9808 3.58433 20.3442C3.61173 20.368 3.64084 20.3901 3.66824 20.4122C4.19059 20.8338 4.76774 21.1772 5.39113 21.439C6.27826 21.8113 7.22019 22 8.19124 22H14.8105C15.7815 22 16.7217 21.8113 17.6089 21.439C18.0918 21.2367 18.5457 20.9851 18.9687 20.6876C18.9995 20.6655 19.0303 20.6434 19.0595 20.6213C19.0903 20.5992 19.1194 20.5771 19.1485 20.555C20.7173 19.3735 21.7345 17.6106 21.9555 15.6675C21.9572 15.6454 21.9606 15.6233 21.9623 15.6012C21.964 15.5791 21.9675 15.5553 21.9692 15.5332C21.9897 15.3122 22 15.0878 22 14.8634V8.13657C22 7.17437 21.8099 6.23937 21.4331 5.35878C21.2756 4.98648 21.0872 4.63118 20.8697 4.29458C20.5905 3.86109 20.2634 3.45819 19.8935 3.08929C19.2324 2.43479 18.4652 1.9197 17.6072 1.561C17.2783 1.4233 16.9427 1.3094 16.6001 1.2227C16.0196 1.0748 15.4202 1 14.8088 1H8.18953C8.09533 1 8.00114 1.0017 7.90866 1.0051C7.39488 1.0238 6.88966 1.0969 6.39814 1.2227L6.393 1.2244C6.19605 1.2754 5.9991 1.3349 5.80729 1.4012C5.68056 1.4454 5.55554 1.493 5.43223 1.544C5.41853 1.5491 5.40483 1.5559 5.39113 1.561C4.53482 1.9197 3.76586 2.43479 3.10651 3.08929C2.73487 3.45819 2.40605 3.86279 2.1269 4.29798C2.00016 4.49518 1.88371 4.69748 1.77752 4.90658C1.73985 4.98138 1.70388 5.05618 1.66792 5.13268C1.63366 5.20748 1.59941 5.28228 1.56687 5.35878C1.4761 5.57298 1.39561 5.78888 1.32711 6.00818C1.26032 6.22067 1.2038 6.43487 1.15756 6.65077C1.05309 7.13527 1.00171 7.63167 1.00171 8.13657H1Z"
            fill="#BED1E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.973 7.29847H16.2987C16.5402 7.29847 16.7372 7.49397 16.7372 7.73367C16.7372 7.93427 16.6001 8.10257 16.4135 8.15357V15.9565C16.4135 16.9799 15.5709 17.8146 14.5416 17.8146H8.45841C7.42742 17.8146 6.58653 16.9782 6.58653 15.9565V8.15357C6.39985 8.10257 6.26284 7.93427 6.26284 7.73367C6.26284 7.49397 6.45979 7.29847 6.70127 7.29847H9.02699C9.20682 6.09318 10.2549 5.18368 11.5 5.18368C12.7451 5.18368 13.7932 6.09318 13.973 7.29847ZM13.0824 7.29847C12.9146 6.57937 12.2638 6.05408 11.5 6.05408C10.7379 6.05408 10.0871 6.57937 9.91755 7.29847H13.0824ZM7.46167 8.16887V15.9565C7.46167 16.5005 7.91037 16.9459 8.45841 16.9459H14.5416C15.0896 16.9459 15.5383 16.5005 15.5383 15.9565V8.16887H7.46167ZM13.0482 14.4567V10.6564C13.0482 10.4167 13.2451 10.2212 13.4866 10.2212C13.7281 10.2212 13.9251 10.4167 13.9251 10.6564V14.4567C13.9251 14.6964 13.7281 14.8919 13.4866 14.8919C13.2451 14.8919 13.0482 14.6964 13.0482 14.4567ZM9.07495 14.4567V10.6564C9.07495 10.4167 9.2719 10.2212 9.51337 10.2212C9.75485 10.2212 9.9518 10.4167 9.9518 10.6564V14.4567C9.9518 14.6964 9.75485 14.8919 9.51337 14.8919C9.2719 14.8919 9.07495 14.6964 9.07495 14.4567ZM11.0616 14.4567V10.6564C11.0616 10.4167 11.2585 10.2212 11.5 10.2212C11.7415 10.2212 11.9384 10.4167 11.9384 10.6564V14.4567C11.9384 14.6964 11.7415 14.8919 11.5 14.8919C11.2585 14.8919 11.0616 14.6964 11.0616 14.4567Z"
            stroke="#BED1E6"
            strokeWidth="0.5"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.79465 14.8634V8.13657C1.79465 6.95337 2.12176 5.84498 2.69206 4.89468C3.4456 3.63669 4.6273 2.65749 6.03678 2.15769C6.70984 1.918 7.43598 1.7888 8.19295 1.7888H14.8122C15.5709 1.7888 16.297 1.9197 16.9718 2.15939C19.4414 3.03829 21.2071 5.38428 21.2071 8.13657V14.8634C21.2071 15.0844 21.1951 15.3037 21.1728 15.5196C21.1711 15.5417 21.1677 15.5638 21.166 15.5876C21.1642 15.6097 21.1608 15.6318 21.1574 15.6539C20.8988 17.7432 19.5921 19.5775 17.6996 20.5295C17.6551 20.5516 17.6106 20.5737 17.5643 20.5958C17.5181 20.6179 17.4701 20.64 17.4239 20.6604C16.6258 21.0157 15.7421 21.2129 14.8105 21.2129H8.19124C7.08147 21.2129 6.03849 20.9324 5.1291 20.4394C5.088 20.4173 5.04518 20.3935 5.00408 20.3697C4.96297 20.3459 4.92358 20.3238 4.88419 20.3C2.96265 19.1457 1.79465 17.0887 1.79465 14.8634ZM1 8.13657V14.8634C1 16.9867 1.94193 18.9808 3.58433 20.3442C3.61173 20.368 3.64084 20.3901 3.66824 20.4122C4.19059 20.8338 4.76774 21.1772 5.39113 21.439C6.27826 21.8113 7.22019 22 8.19124 22H14.8105C15.7815 22 16.7217 21.8113 17.6089 21.439C18.0918 21.2367 18.5457 20.9851 18.9687 20.6876C18.9995 20.6655 19.0303 20.6434 19.0595 20.6213C19.0903 20.5992 19.1194 20.5771 19.1485 20.555C20.7173 19.3735 21.7345 17.6106 21.9555 15.6675C21.9572 15.6454 21.9606 15.6233 21.9623 15.6012C21.964 15.5791 21.9675 15.5553 21.9692 15.5332C21.9897 15.3122 22 15.0878 22 14.8634V8.13657C22 7.17437 21.8099 6.23937 21.4331 5.35878C21.2756 4.98648 21.0872 4.63118 20.8697 4.29458C20.5905 3.86109 20.2634 3.45819 19.8935 3.08929C19.2324 2.43479 18.4652 1.9197 17.6072 1.561C17.2783 1.4233 16.9427 1.3094 16.6001 1.2227C16.0196 1.0748 15.4202 1 14.8088 1H8.18953C8.09533 1 8.00114 1.0017 7.90866 1.0051C7.39488 1.0238 6.88966 1.0969 6.39814 1.2227L6.393 1.2244C6.19605 1.2754 5.9991 1.3349 5.80729 1.4012C5.68056 1.4454 5.55554 1.493 5.43223 1.544C5.41853 1.5491 5.40483 1.5559 5.39113 1.561C4.53482 1.9197 3.76586 2.43479 3.10651 3.08929C2.73487 3.45819 2.40605 3.86279 2.1269 4.29798C2.00016 4.49518 1.88371 4.69748 1.77752 4.90658C1.73985 4.98138 1.70388 5.05618 1.66792 5.13268C1.63366 5.20748 1.59941 5.28228 1.56687 5.35878C1.4761 5.57298 1.39561 5.78888 1.32711 6.00818C1.26032 6.22067 1.2038 6.43487 1.15756 6.65077C1.05309 7.13527 1.00171 7.63167 1.00171 8.13657H1Z"
            stroke="#BED1E6"
            strokeWidth="0.5"
          />
        </svg>
      )}
      <p className={style.text}>Отклонить</p>
    </button>
  );
}

export default ButtonDelete;
