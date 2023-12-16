import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openWorkplaceButtons } from '../../../../../../redux/ducks/application';

import style from './style.module.css';

function PauseBtn() {
  const body = document.querySelector('body');

  const dispatch = useDispatch();

  const [buttonStopHovered, setButtonStopHovered] = useState(false);

  const handleOpenStatus = () => {
    body.style.overflow = 'hidden';
    dispatch(openWorkplaceButtons('pause'));
  };

  return (
    <button
      onMouseEnter={() => setButtonStopHovered(true)}
      onMouseLeave={() => setButtonStopHovered(false)}
      onClick={handleOpenStatus}
      className={style.add__btn}
    >
      {buttonStopHovered ? (
        <svg
          className={style.svg}
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 14.1251C0 17.9497 3.13122 20.9665 6.89808 20.9665H14.0369C17.8169 20.9665 20.9331 17.9348 20.9331 14.1251V6.87511C20.9331 3.04488 17.7943 0.0336914 14.0369 0.0336914H6.89808C3.09361 0.0336914 0 3.09526 0 6.87511V14.1251ZM7.44722 17.0971C6.73259 17.0971 6.01984 17.1419 5.32213 16.9404C4.26335 16.6344 3.70292 15.8415 3.70292 14.7408C3.70292 11.9106 3.70292 9.0822 3.70292 6.25197C3.70292 4.9516 4.76547 3.8975 6.07626 3.8975H7.44534C8.07535 3.8975 8.67902 4.14563 9.12473 4.5878C9.57043 5.02996 9.82056 5.62884 9.82056 6.25384C9.82056 9.08406 9.82056 11.9124 9.82056 14.7426C9.82056 16.043 8.75801 17.0971 7.44722 17.0971ZM11.1125 6.25384C11.1125 4.95347 12.1751 3.89936 13.4859 3.89936H14.855C15.485 3.89936 16.0886 4.1475 16.5343 4.58966C16.98 5.03183 17.2302 5.63071 17.2302 6.25571C17.2302 9.08593 17.2302 11.9143 17.2302 14.7445C17.2302 16.0449 16.1676 17.099 14.8568 17.099C14.1422 17.099 13.4294 17.1438 12.7317 16.9423C11.673 16.6363 11.1125 15.8434 11.1125 14.7426C11.1125 11.9124 11.1125 9.08406 11.1125 6.25384ZM11.9456 6.25384C11.9456 9.08406 11.9456 11.9124 11.9456 14.7426C11.9456 16.4516 13.6909 16.2706 14.855 16.2706C15.705 16.2706 16.3952 15.5859 16.3952 14.7426C16.3952 11.9124 16.3952 9.08406 16.3952 6.25384C16.3952 5.84712 16.2334 5.46093 15.9438 5.17362C15.6542 4.8863 15.263 4.72586 14.855 4.72586H13.4859C12.6358 4.72586 11.9456 5.41056 11.9456 6.25384ZM8.98744 14.7426C8.98744 11.9124 8.98744 9.08406 8.98744 6.25384C8.98744 5.84712 8.82571 5.46093 8.5361 5.17362C8.24648 4.8863 7.85532 4.72586 7.44722 4.72586H6.07814C5.2281 4.72586 4.53792 5.41056 4.53792 6.25384C4.53792 9.08406 4.53792 11.9124 4.53792 14.7426C4.53792 16.4516 6.28312 16.2706 7.44722 16.2706C8.29726 16.2706 8.98744 15.5859 8.98744 14.7426Z"
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
            d="M1.79106 14.853V8.1468C1.79106 6.96634 2.11769 5.86188 2.68419 4.91447C3.43612 3.65971 4.61334 2.68359 6.01853 2.1854C6.69051 1.94728 7.41352 1.81725 8.16715 1.81725H14.7661C15.5214 1.81725 16.2461 1.94728 16.9198 2.18709C19.3814 3.06357 21.1439 5.40253 21.1439 8.1468V14.853C21.1439 15.0742 21.132 15.292 21.1099 15.5065C21.1082 15.5285 21.1048 15.5521 21.1031 15.5741C21.0997 15.596 21.098 15.618 21.0946 15.6416C20.836 17.7256 19.5346 19.5528 17.6462 20.5019C17.602 20.5239 17.5578 20.5458 17.5118 20.5678C17.4659 20.5897 17.4183 20.6117 17.3723 20.632C16.5762 20.9849 15.6949 21.1825 14.7678 21.1825H8.16885C7.06307 21.1825 6.02364 20.9039 5.1169 20.4124C5.07437 20.3905 5.03354 20.3668 4.99271 20.3432C4.95188 20.3195 4.91276 20.2976 4.87363 20.2723C2.95638 19.1222 1.79276 17.0703 1.79276 14.853H1.79106ZM1 8.1468V14.853C1 16.969 1.93906 18.9584 3.57561 20.3178C3.60283 20.3415 3.63175 20.3634 3.65897 20.3871C4.17954 20.8076 4.75624 21.1504 5.37718 21.4105C6.26181 21.782 7.20087 21.9695 8.16885 21.9695H14.7678C15.7358 21.9695 16.6748 21.782 17.5578 21.4105C18.0392 21.2095 18.4917 20.9579 18.9136 20.6607C18.9442 20.6387 18.9749 20.6168 19.0055 20.5948C19.0361 20.5729 19.065 20.5509 19.0956 20.5289C20.659 19.3502 21.6747 17.5922 21.8941 15.6568C21.8958 15.6349 21.8992 15.6129 21.9009 15.5893C21.9026 15.5673 21.906 15.5437 21.9077 15.5217C21.9281 15.3005 21.9383 15.0776 21.9383 14.853V8.1468C21.9383 7.18757 21.7478 6.25367 21.3735 5.3772C21.2153 5.00735 21.0282 4.65271 20.8122 4.31664C20.5332 3.88431 20.2082 3.48238 19.8391 3.11592C19.1807 2.46236 18.4152 1.95066 17.5595 1.59095C17.2311 1.45247 16.896 1.34101 16.5541 1.25319C15.9739 1.10458 15.3768 1.03027 14.7678 1.03027H8.16885C8.07528 1.03027 7.98172 1.03196 7.88815 1.03534C7.37609 1.05561 6.87254 1.12822 6.38259 1.25319L6.37749 1.25488C6.18015 1.30554 5.98621 1.36465 5.79227 1.4322C5.66639 1.47611 5.5422 1.5234 5.41801 1.57406C5.4044 1.57913 5.39079 1.58588 5.37718 1.59095C4.52318 1.94897 3.75764 2.46236 3.09928 3.11592C2.72842 3.48407 2.40179 3.88769 2.12279 4.32002C1.9969 4.51592 1.87952 4.71857 1.77405 4.92629C1.73662 5.0006 1.69919 5.07491 1.66517 5.1509C1.63114 5.22521 1.59712 5.3012 1.5648 5.37551C1.47463 5.58829 1.39468 5.80446 1.32493 6.024C1.25858 6.2351 1.20244 6.44957 1.15651 6.66574C1.05274 7.14873 1.0017 7.64523 1.0017 8.1468H1Z"
            fill="#BED1E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0661 7.57111C12.0661 6.36869 13.0493 5.39258 14.2606 5.39258H15.5263C16.1081 5.39258 16.6661 5.62225 17.0778 6.03094C17.4895 6.43962 17.7208 6.99354 17.7208 7.57111C17.7208 10.1887 17.7208 12.8063 17.7208 15.4239C17.7208 16.6264 16.7375 17.6025 15.5263 17.6025C14.8662 17.6025 14.2062 17.6447 13.5614 17.4572C12.5815 17.1735 12.0644 16.4406 12.0644 15.4223C12.0644 12.8046 12.0644 10.187 12.0644 7.56942L12.0661 7.57111ZM12.8367 7.57111C12.8367 6.79089 13.4746 6.1576 14.2606 6.1576H15.5263C15.904 6.1576 16.2663 6.30621 16.5334 6.57135C16.8005 6.83649 16.9502 7.1962 16.9502 7.57111C16.9502 10.1887 16.9502 12.8063 16.9502 15.4239C16.9502 16.2042 16.3122 16.8375 15.5263 16.8375C14.4511 16.8375 12.8367 17.0046 12.8367 15.4223C12.8367 12.8046 12.8367 10.187 12.8367 7.56942V7.57111ZM5.21703 7.57111C5.21703 6.36869 6.20033 5.39258 7.41158 5.39258H8.67727C9.25908 5.39258 9.81707 5.62225 10.2288 6.03094C10.6405 6.43962 10.8718 6.99354 10.8718 7.57111C10.8718 10.1887 10.8718 12.8063 10.8718 15.4239C10.8718 16.6264 9.88852 17.6025 8.67727 17.6025C8.01721 17.6025 7.35714 17.6447 6.71239 17.4572C5.7325 17.1735 5.21533 16.4406 5.21533 15.4223C5.21533 12.8046 5.21533 10.187 5.21533 7.56942L5.21703 7.57111ZM5.98768 7.57111C5.98768 6.79089 6.62563 6.1576 7.41158 6.1576H8.67727C9.05494 6.1576 9.41729 6.30621 9.68438 6.57135C9.95147 6.83649 10.1012 7.1962 10.1012 7.57111C10.1012 10.1887 10.1012 12.8063 10.1012 15.4239C10.1012 16.2042 9.46322 16.8375 8.67727 16.8375C7.60211 16.8375 5.98768 17.0046 5.98768 15.4223C5.98768 12.8046 5.98768 10.187 5.98768 7.56942V7.57111Z"
            fill="#BED1E6"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.79106 14.853V8.1468C1.79106 6.96634 2.11769 5.86188 2.68419 4.91447C3.43612 3.65971 4.61334 2.68359 6.01853 2.1854C6.69051 1.94728 7.41352 1.81725 8.16715 1.81725H14.7661C15.5214 1.81725 16.2461 1.94728 16.9198 2.18709C19.3814 3.06357 21.1439 5.40253 21.1439 8.1468V14.853C21.1439 15.0742 21.132 15.292 21.1099 15.5065C21.1082 15.5285 21.1048 15.5521 21.1031 15.5741C21.0997 15.596 21.098 15.618 21.0946 15.6416C20.836 17.7256 19.5346 19.5528 17.6462 20.5019C17.602 20.5239 17.5578 20.5458 17.5118 20.5678C17.4659 20.5897 17.4183 20.6117 17.3723 20.632C16.5762 20.9849 15.6949 21.1825 14.7678 21.1825H8.16885C7.06307 21.1825 6.02364 20.9039 5.1169 20.4124C5.07437 20.3905 5.03354 20.3668 4.99271 20.3432C4.95188 20.3195 4.91276 20.2976 4.87363 20.2723C2.95638 19.1222 1.79276 17.0703 1.79276 14.853H1.79106ZM1 8.1468V14.853C1 16.969 1.93906 18.9584 3.57561 20.3178C3.60283 20.3415 3.63175 20.3634 3.65897 20.3871C4.17954 20.8076 4.75624 21.1504 5.37718 21.4105C6.26181 21.782 7.20087 21.9695 8.16885 21.9695H14.7678C15.7358 21.9695 16.6748 21.782 17.5578 21.4105C18.0392 21.2095 18.4917 20.9579 18.9136 20.6607C18.9442 20.6387 18.9749 20.6168 19.0055 20.5948C19.0361 20.5729 19.065 20.5509 19.0956 20.5289C20.659 19.3502 21.6747 17.5922 21.8941 15.6568C21.8958 15.6349 21.8992 15.6129 21.9009 15.5893C21.9026 15.5673 21.906 15.5437 21.9077 15.5217C21.9281 15.3005 21.9383 15.0776 21.9383 14.853V8.1468C21.9383 7.18757 21.7478 6.25367 21.3735 5.3772C21.2153 5.00735 21.0282 4.65271 20.8122 4.31664C20.5332 3.88431 20.2082 3.48238 19.8391 3.11592C19.1807 2.46236 18.4152 1.95066 17.5595 1.59095C17.2311 1.45247 16.896 1.34101 16.5541 1.25319C15.9739 1.10458 15.3768 1.03027 14.7678 1.03027H8.16885C8.07528 1.03027 7.98172 1.03196 7.88815 1.03534C7.37609 1.05561 6.87254 1.12822 6.38259 1.25319L6.37749 1.25488C6.18015 1.30554 5.98621 1.36465 5.79227 1.4322C5.66639 1.47611 5.5422 1.5234 5.41801 1.57406C5.4044 1.57913 5.39079 1.58588 5.37718 1.59095C4.52318 1.94897 3.75764 2.46236 3.09928 3.11592C2.72842 3.48407 2.40179 3.88769 2.12279 4.32002C1.9969 4.51592 1.87952 4.71857 1.77405 4.92629C1.73662 5.0006 1.69919 5.07491 1.66517 5.1509C1.63114 5.22521 1.59712 5.3012 1.5648 5.37551C1.47463 5.58829 1.39468 5.80446 1.32493 6.024C1.25858 6.2351 1.20244 6.44957 1.15651 6.66574C1.05274 7.14873 1.0017 7.64523 1.0017 8.1468H1Z"
            stroke="#BED1E6"
            strokeWidth="0.198683"
            strokeMiterlimit="22.9256"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.0661 7.57111C12.0661 6.36869 13.0493 5.39258 14.2606 5.39258H15.5263C16.1081 5.39258 16.6661 5.62225 17.0778 6.03094C17.4895 6.43962 17.7208 6.99354 17.7208 7.57111C17.7208 10.1887 17.7208 12.8063 17.7208 15.4239C17.7208 16.6264 16.7375 17.6025 15.5263 17.6025C14.8662 17.6025 14.2062 17.6447 13.5614 17.4572C12.5815 17.1735 12.0644 16.4406 12.0644 15.4223C12.0644 12.8046 12.0644 10.187 12.0644 7.56942L12.0661 7.57111ZM12.8367 7.57111C12.8367 6.79089 13.4746 6.1576 14.2606 6.1576H15.5263C15.904 6.1576 16.2663 6.30621 16.5334 6.57135C16.8005 6.83649 16.9502 7.1962 16.9502 7.57111C16.9502 10.1887 16.9502 12.8063 16.9502 15.4239C16.9502 16.2042 16.3122 16.8375 15.5263 16.8375C14.4511 16.8375 12.8367 17.0046 12.8367 15.4223C12.8367 12.8046 12.8367 10.187 12.8367 7.56942V7.57111ZM5.21703 7.57111C5.21703 6.36869 6.20033 5.39258 7.41158 5.39258H8.67727C9.25908 5.39258 9.81707 5.62225 10.2288 6.03094C10.6405 6.43962 10.8718 6.99354 10.8718 7.57111C10.8718 10.1887 10.8718 12.8063 10.8718 15.4239C10.8718 16.6264 9.88852 17.6025 8.67727 17.6025C8.01721 17.6025 7.35714 17.6447 6.71239 17.4572C5.7325 17.1735 5.21533 16.4406 5.21533 15.4223C5.21533 12.8046 5.21533 10.187 5.21533 7.56942L5.21703 7.57111ZM5.98768 7.57111C5.98768 6.79089 6.62563 6.1576 7.41158 6.1576H8.67727C9.05494 6.1576 9.41729 6.30621 9.68438 6.57135C9.95147 6.83649 10.1012 7.1962 10.1012 7.57111C10.1012 10.1887 10.1012 12.8063 10.1012 15.4239C10.1012 16.2042 9.46322 16.8375 8.67727 16.8375C7.60211 16.8375 5.98768 17.0046 5.98768 15.4223C5.98768 12.8046 5.98768 10.187 5.98768 7.56942V7.57111Z"
            stroke="#BED1E6"
            strokeWidth="0.198683"
            strokeMiterlimit="22.9256"
          />
        </svg>
      )}
      <p>Приостановить обработку и закрыть</p>
    </button>
  );
}

export default PauseBtn;
