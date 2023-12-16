import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openMaterialPostBookmark } from '../../../../../../redux/ducks/application';
import IsMaterialButtons from './IsMaterialButtons';

import style from './style.module.css';

function MessageSendBtn() {
  const body = document.querySelector('body');

  const [buttonProcessedHovered, setButtonProcessedHovered] = useState(false);

  const material = useSelector(
    (state) => state.historianSendMaterial.materials,
  );

  const dispatch = useDispatch();

  const handleOpen = () => {
    body.style.overflow = 'hidden';
    dispatch(openMaterialPostBookmark());
  };

  return (
    <div className={!material.isMaterial ? style.message : style.messageTop}>
      {!material.is_material ? null : <IsMaterialButtons />}
      <button
        onMouseEnter={() => setButtonProcessedHovered(true)}
        onMouseLeave={() => setButtonProcessedHovered(false)}
        onClick={handleOpen}
        className={style.add__btn}
      >
        {buttonProcessedHovered ? (
          <svg
            className={style.svg}
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.48919 10.7713L8.10022 14.5845C8.38978 14.8906 8.79101 15.0633 9.21305 15.0633C9.59724 15.0633 9.96251 14.9225 10.2445 14.6653C12.5194 12.5944 14.7943 10.5216 17.0691 8.45069L17.0597 8.44131L17.1846 8.32114C17.4382 8.07895 17.4457 7.67528 17.2035 7.42369L15.9544 6.13196C15.7103 5.88038 15.3034 5.87287 15.0497 6.11319C13.1969 7.87617 11.2987 9.59034 9.40798 11.3139L9.29065 11.419C8.1816 10.2475 7.10472 9.05901 5.98432 7.90058C5.74018 7.64899 5.33327 7.64148 5.07967 7.88181L3.77758 9.12097C3.56182 9.32561 3.52019 9.65606 3.67538 9.90952L3.68106 9.91891C3.9498 10.2024 4.21476 10.4878 4.48729 10.7694L4.48919 10.7713ZM6.69782 7.22468C7.60436 8.16156 8.45224 9.10219 9.34553 10.0466C11.0318 8.51265 12.72 6.9806 14.3703 5.40912C15.0157 4.79329 16.0471 4.81582 16.6679 5.45606L17.917 6.74779C18.6456 7.50067 18.4583 8.28359 17.8735 9.04211L17.864 9.05338L17.8545 9.06276C15.5399 11.1693 13.2253 13.2778 10.9126 15.3844C10.4489 15.8068 9.84517 16.0415 9.21494 16.0415C8.52037 16.0415 7.85986 15.758 7.38482 15.2548L3.77758 11.4453C3.49558 11.1543 3.21927 10.8539 2.93917 10.5591L2.93349 10.5535L2.9297 10.5479C2.44142 9.92454 2.53226 8.96138 3.10193 8.41878L4.40402 7.17962C5.04939 6.56379 6.08084 6.58632 6.7016 7.22655L6.69782 7.22468ZM0 6.86419V14.1358C0 17.9716 3.14167 21 6.91925 21H14.0808C17.8735 21 21 17.9584 21 14.1358V6.86419C21 3.0228 17.8508 0 14.0808 0H6.91925C3.10193 0 0 3.07161 0 6.86419Z"
              fill="#4686CC"
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
              d="M10.4326 11.0805C11.991 9.66254 13.5511 8.24454 15.077 6.79088C15.674 6.22198 16.6268 6.24066 17.1999 6.83333L18.3546 8.02717C19.0286 8.72344 18.8558 9.44857 18.3153 10.1499L18.3067 10.1601L18.2964 10.1686C16.1581 12.1181 14.0181 14.066 11.8798 16.0155C11.4504 16.4061 10.8927 16.6218 10.3094 16.6218C9.66618 16.6218 9.05718 16.3586 8.61755 15.895L5.28348 12.3712C5.02175 12.1012 4.76686 11.8244 4.50855 11.5509L4.50342 11.5459L4.49829 11.5408C4.04668 10.9634 4.1305 10.0735 4.65738 9.57254L5.85997 8.42625C6.45699 7.85735 7.40982 7.87603 7.98289 8.4687C8.8194 9.33479 9.60459 10.206 10.4291 11.0788L10.4326 11.0805ZM17.5728 9.60311L17.5643 9.59461L17.6806 9.48423C17.915 9.26177 17.9218 8.88646 17.6977 8.65551L16.543 7.46167C16.3189 7.22901 15.9409 7.22222 15.7065 7.44469C13.9941 9.07666 12.239 10.6611 10.4907 12.254L10.3829 12.3525C9.35655 11.2673 8.36266 10.1703 7.326 9.09874C7.10191 8.86608 6.72385 8.85929 6.48949 9.08176L5.2869 10.228C5.08847 10.4182 5.04912 10.7239 5.1911 10.9566L5.19624 10.9651C5.44428 11.2266 5.68891 11.4915 5.94037 11.753L9.27786 15.2802C9.54472 15.5638 9.91593 15.7234 10.306 15.7234C10.6601 15.7234 10.9988 15.5927 11.2605 15.3549C13.3629 13.4393 15.4653 11.5221 17.5694 9.6065L17.5728 9.60311ZM1.79374 14.8641V8.13755C1.79374 6.95391 2.12048 5.84498 2.69013 4.89568C3.44453 3.63731 4.62488 2.65915 6.03446 2.15818C6.70846 1.91873 7.43377 1.78797 8.18988 1.78797H14.8084C15.5662 1.78797 16.2933 1.91873 16.9673 2.15987C19.4374 3.03954 21.2028 5.38476 21.2028 8.13755V14.8641C21.2028 15.0849 21.1909 15.304 21.1686 15.5197C21.1669 15.5417 21.1635 15.5638 21.1618 15.5876C21.1601 15.6097 21.1566 15.6317 21.1532 15.6538C20.8949 17.7426 19.588 19.5767 17.6943 20.5294C17.6498 20.5514 17.6053 20.5735 17.5591 20.5956C17.513 20.6177 17.4651 20.6397 17.4189 20.6601C16.6217 21.015 15.7373 21.212 14.8067 21.212H8.18817C7.07967 21.212 6.03617 20.9318 5.1261 20.4394C5.08504 20.4173 5.04228 20.3935 5.00122 20.3697C4.96017 20.3459 4.92082 20.3239 4.88148 20.3001C2.9587 19.1453 1.79203 17.0888 1.79203 14.8641H1.79374ZM1 8.13755V14.8641C1 16.9869 1.94257 18.9806 3.58309 20.3442C3.61046 20.368 3.63954 20.3901 3.66691 20.4122C4.18866 20.8333 4.76686 21.1764 5.38954 21.4396C6.27737 21.8115 7.21823 22 8.18988 22H14.8084C15.7783 22 16.7209 21.8115 17.607 21.4396C18.0894 21.2375 18.5428 20.9862 18.967 20.6873C18.9978 20.6652 19.0286 20.6431 19.0577 20.6211C19.0885 20.599 19.1175 20.5769 19.1483 20.5548C20.717 19.3729 21.7348 17.6101 21.9555 15.6674C21.9572 15.6453 21.9607 15.6232 21.9624 15.6012C21.9641 15.5791 21.9675 15.5553 21.9692 15.5332C21.9897 15.3108 22 15.0883 22 14.8624V8.13586C22 7.17297 21.8084 6.23726 21.4338 5.35759C21.2747 4.98569 21.0865 4.63076 20.871 4.29452C20.5921 3.86147 20.2654 3.459 19.8942 3.09049C19.2339 2.43498 18.4658 1.92043 17.6087 1.56211C17.2803 1.42455 16.9433 1.31077 16.6012 1.22416C16.0196 1.07642 15.4208 1 14.8101 1H8.19159C8.09751 1 8.00342 1.0017 7.91105 1.00509C7.39785 1.02377 6.89321 1.0968 6.40054 1.22246C6.39883 1.22246 6.39712 1.22416 6.39541 1.22416C6.19868 1.27511 6.00196 1.33455 5.80865 1.40078C5.68206 1.44493 5.55718 1.49248 5.43402 1.54343C5.42033 1.54852 5.40665 1.55531 5.39296 1.56041C4.53763 1.92043 3.76784 2.43328 3.10753 3.08879C2.7346 3.459 2.40787 3.86317 2.12903 4.29622C2.00244 4.49321 1.88612 4.69529 1.77835 4.90417C1.74071 4.97889 1.70479 5.05361 1.66887 5.13003C1.63465 5.20475 1.60044 5.27948 1.56794 5.3559C1.47727 5.56987 1.39687 5.78554 1.32845 6.00631C1.26173 6.21858 1.20528 6.43256 1.15909 6.64993C1.05474 7.13561 1.00342 7.63149 1.00342 8.13586L1 8.13755Z"
              fill="#BED1E6"
              stroke="#BED1E6"
              strokeWidth="0.2"
            />
          </svg>
        )}
        <p>Отправить материал</p>
      </button>
    </div>
  );
}

export default MessageSendBtn;