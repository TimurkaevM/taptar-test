import { useState } from 'react';

import style from './style.module.css';

function AffiliationButtons(props) {
  const handleChangeBookmark = () => {
    props.setBookmark(!props.bookmark);
  };

  const handleDeleteFileOpen = () => {
    props.setDeleteTag(true);
  };

  const [buttonAlbumHovered, setButtonAlbumHovered] = useState(false);
  const [buttonProcessedHovered, setButtonProcessedHovered] = useState(false);
  const [buttonCabinetHovered, setButtonCabinetHovered] = useState(false);
  const [buttonDeleteHovered, setButtonDeleteHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setButtonDeleteHovered(true)}
        onMouseLeave={() => setButtonDeleteHovered(false)}
        className={`${style.dialog__button}`}
        onClick={handleDeleteFileOpen}
      >
        {buttonDeleteHovered ? (
          <svg
            viewBox="0 0 15 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.29848 0H7.1864H5.81105C4.4281 0 3.2978 1.1322 3.2978 2.51325V3.22182H4.79854V2.55504V2.51325C4.79854 2.12192 5.02459 1.77808 5.35133 1.61091C5.49001 1.54062 5.64578 1.49883 5.81295 1.49883H7.1883H7.30038H8.40219C8.67384 1.49883 8.92269 1.60711 9.10506 1.78378C9.19814 1.87306 9.27223 1.97754 9.32732 2.09532C9.38621 2.2226 9.4185 2.36507 9.4185 2.51325V3.22182H10.9192V2.51325C10.9192 1.1303 9.78703 0 8.40598 0H7.30418H7.29848ZM0 20.4859C0 21.6732 0.965028 22.6382 2.15421 22.6382H12.0571C13.2463 22.6382 14.2113 21.6732 14.2113 20.4859V4.4509H0.00190151V20.4859H0ZM7.89877 7.89307V19.2036C7.89877 19.6501 7.53404 20.0148 7.08762 20.0148C6.6412 20.0148 6.27647 19.6501 6.27647 19.2036V7.89307C6.27647 7.44666 6.6412 7.08192 7.08762 7.08192C7.53404 7.08192 7.89877 7.44666 7.89877 7.89307ZM3.94179 7.89307V19.2036C3.94179 19.6501 3.57706 20.0148 3.13064 20.0148C2.68422 20.0148 2.31948 19.6501 2.31948 19.2036V7.89307C2.31948 7.44666 2.68422 7.08192 3.13064 7.08192C3.57706 7.08192 3.94179 7.44666 3.94179 7.89307ZM11.0104 20.0148C10.564 20.0148 10.1993 19.6501 10.1993 19.2036V7.89307C10.1993 7.44666 10.564 7.08192 11.0104 7.08192C11.4568 7.08192 11.8216 7.44666 11.8216 7.89307V19.2036C11.8216 19.6501 11.4568 20.0148 11.0104 20.0148Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.29624 16.9426C1.29624 18.629 2.69436 20 4.41223 20H12.5831C14.3009 20 15.6991 18.629 15.6991 16.9426V3.95445V3.92368H16.3307C16.6991 3.92368 17 3.62825 17 3.26666C17 2.90506 16.6991 2.60963 16.3307 2.60963H12.6771V2.0357C12.6771 0.915525 11.7429 0 10.6034 0H6.38715C5.24608 0 4.31348 0.917064 4.31348 2.0357V2.60963H0.669279C0.30094 2.60963 0 2.90506 0 3.26666C0 3.62825 0.30094 3.92368 0.669279 3.92368H1.30094V3.95445V16.9426H1.29624ZM12.5831 18.6859H4.41223C3.43103 18.6859 2.6348 17.9043 2.6348 16.9426V3.95445H14.3589V16.9426C14.3589 17.9043 13.5627 18.6859 12.5815 18.6859H12.5831ZM11.4373 2.60963H5.54859V2.06955V2.0357C5.54859 1.71873 5.73511 1.44022 6.0047 1.30482C6.11912 1.24788 6.24765 1.21403 6.38558 1.21403H10.6019C10.826 1.21403 11.0313 1.30174 11.1818 1.44484C11.2586 1.51716 11.3197 1.60178 11.3652 1.69718C11.4138 1.80028 11.4404 1.91568 11.4404 2.0357V2.60963H11.4373ZM4.54859 6.74258V15.904C4.54859 16.2656 4.84953 16.561 5.21787 16.561C5.58621 16.561 5.88715 16.2656 5.88715 15.904V6.74258C5.88715 6.38098 5.58621 6.08555 5.21787 6.08555C4.84953 6.08555 4.54859 6.38098 4.54859 6.74258ZM7.81348 6.74258V15.904C7.81348 16.2656 8.11442 16.561 8.48276 16.561C8.8511 16.561 9.15204 16.2656 9.15204 15.904V6.74258C9.15204 6.38098 8.8511 6.08555 8.48276 6.08555C8.11442 6.08555 7.81348 6.38098 7.81348 6.74258ZM11.0502 6.74258V15.904C11.0502 16.2656 11.3511 16.561 11.7194 16.561C12.0878 16.561 12.3887 16.2656 12.3887 15.904V6.74258C12.3887 6.38098 12.0878 6.08555 11.7194 6.08555C11.3511 6.08555 11.0502 6.38098 11.0502 6.74258Z"
              fill="white"
            />
          </svg>
        )}
        <p>В корзину</p>
      </div>
      <div
        onMouseEnter={() => setButtonAlbumHovered(true)}
        onMouseLeave={() => setButtonAlbumHovered(false)}
        onClick={() => props.setAlbumsModal(true)}
        className={`${style.dialog__button}`}
      >
        {buttonAlbumHovered ? (
          <svg
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.9499 16.3432H3.07055C2.74662 16.3432 2.47543 16.1049 2.42808 15.7904C2.40871 15.7293 2.39902 15.666 2.39902 15.6016V3.09069C2.39902 2.73222 2.69066 2.44137 3.0501 2.44137H16.9488C17.3083 2.44137 17.5999 2.73222 17.5999 3.09069V15.6939C17.5999 16.0523 17.3083 16.3432 16.9488 16.3432H16.9499ZM18.5685 1H1.43154C1.19479 1 1 1.19318 1 1.43037V20.5696C1 20.8057 1.19371 21 1.43154 21H18.5685C18.8052 21 19 20.8068 19 20.5696V1.43037C19 1.19426 18.8063 1 18.5685 1ZM3.72163 15.0445H16.2977V11.8935L12.4709 8.19077L9.04006 12.6812C8.81406 12.9775 8.38359 13.0236 8.10056 12.7821L5.66304 10.7161L3.72163 13.1105V15.0456V15.0445ZM8.42126 11.3483L11.8811 6.8213C12.1168 6.51328 12.5742 6.47894 12.8529 6.74832L16.2988 10.0829V3.74001H3.70118V11.0692L5.07115 9.381C5.30037 9.09766 5.72115 9.05903 5.9988 9.29514L8.42126 11.3483ZM8.92814 5.83499C9.78261 6.69037 9.17243 8.15428 7.96281 8.15428C7.20734 8.15428 6.59823 7.54467 6.59931 6.79233C6.60146 5.58277 8.07689 4.98283 8.92814 5.83499ZM7.47746 6.7934C7.47638 7.43091 8.44709 7.43306 8.44817 6.79447C8.44817 6.52616 8.23185 6.30936 7.96281 6.30936C7.69592 6.30936 7.47746 6.52616 7.47746 6.7934Z"
              fill="white"
              stroke="white"
              strokeWidth="0.199317"
              strokeMiterlimit="22.9256"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.46483 14.214C2.44852 14.1604 2.43935 14.1047 2.43935 14.0491V3.09659C2.43935 2.78219 2.69113 2.52861 3.00204 2.52861H15.001C15.3109 2.52861 15.5637 2.78322 15.5637 3.09659V14.1295C15.5637 14.4428 15.3119 14.6985 15.001 14.6985H3.01835C2.73904 14.6985 2.50459 14.4903 2.46381 14.214H2.46483ZM14.4393 10.802L11.1356 7.56005L8.17329 11.4906C8.07951 11.6143 7.93986 11.6947 7.78695 11.7112C7.63405 11.7277 7.4791 11.6802 7.36188 11.5792L5.2579 9.77013L3.58104 11.8668V13.5605H14.4393V10.802ZM3.56371 3.66457V10.0804L4.74618 8.60221C4.842 8.48263 4.98063 8.40738 5.1315 8.39398C5.28236 8.38058 5.43221 8.428 5.5474 8.52696L7.63914 10.3247L10.6259 6.3612C10.7238 6.23132 10.8716 6.15091 11.0316 6.13854C11.1916 6.1272 11.3496 6.1839 11.4648 6.29729L14.4393 9.21658V3.66457H3.56371ZM7.24261 7.52809C7.24261 7.52809 7.24159 7.52809 7.24057 7.52809C6.92661 7.52809 6.63099 7.40336 6.40877 7.17864C6.18654 6.95392 6.06422 6.65395 6.06524 6.33543C6.06626 5.67983 6.59429 5.14689 7.24363 5.14689C7.55759 5.14689 7.85321 5.27162 8.07543 5.49737C8.29664 5.72209 8.41896 6.02206 8.41896 6.33955C8.41896 6.65705 8.29562 6.95598 8.07339 7.1807C7.85117 7.40439 7.55556 7.52809 7.24261 7.52809ZM6.82365 6.33749C6.82365 6.45088 6.86748 6.55706 6.94597 6.63746C7.02548 6.71786 7.13048 6.76116 7.24261 6.76116C7.35474 6.76116 7.45973 6.71786 7.53925 6.63746C7.61876 6.55706 7.66157 6.45191 7.66157 6.33852C7.66157 6.22513 7.61876 6.11896 7.53925 6.03855C7.45973 5.95815 7.35576 5.91382 7.24363 5.91382H7.24261C7.01223 5.91382 6.82365 6.10349 6.82263 6.33749H6.82365ZM0.616718 0L17.3863 0.0350479C17.7258 0.0360788 18 0.314401 18 0.657664V19.3774C18 19.5423 17.9348 19.7011 17.8196 19.8175C17.7034 19.9351 17.5474 20 17.3833 20L0.61366 19.9639C0.27421 19.9629 0 19.6846 0 19.3423V0.622616C0 0.457685 0.0652395 0.298938 0.180428 0.182455C0.296636 0.0659726 0.452599 0.00103082 0.615698 0.00103082L0.616718 0ZM1.60449 1.26585H16.3996C16.6045 1.26585 16.7717 1.4349 16.7717 1.6421V18.3971C16.7717 18.6043 16.6045 18.7733 16.3996 18.7733H1.60449C1.39959 18.7733 1.23242 18.6043 1.23242 18.3971V1.6421C1.23242 1.4349 1.39959 1.26585 1.60449 1.26585Z"
              fill="white"
            />
          </svg>
        )}
        <p>Добавить в альбом</p>
      </div>
      <div
        onMouseEnter={() => setButtonCabinetHovered(true)}
        onMouseLeave={() => setButtonCabinetHovered(false)}
        className={`${style.dialog__button}`}
        onClick={handleChangeBookmark}
      >
        {buttonCabinetHovered ? (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 19.5313H2.78479C2.78479 16.7466 2.78479 13.9618 2.78479 11.177C2.78479 10.3648 2.74343 9.8698 3.48036 9.77455C3.86387 9.72442 12.8123 9.76578 13.924 9.76578C16.4506 9.76578 16.7463 9.4487 16.7463 11.1394C16.7463 13.9367 16.7463 16.734 16.7463 19.5313H19.5311V4.47944C19.5236 4.42931 19.4998 4.408 19.4284 4.33782L18.7967 3.71118C18.4195 3.33394 15.201 0.0503428 15.0582 0.0102378L12.5504 0.00146484L12.5516 3.36026C12.5529 3.73123 12.4188 3.99442 12.1556 4.10847C11.8673 4.23379 8.31928 4.15985 7.66757 4.15985C7.03091 4.15985 3.48287 4.23379 3.2084 4.11724C2.63064 3.87285 2.78479 2.94417 2.78479 2.28996C2.78479 1.52671 2.78479 0.764713 2.78479 0.00146484H0V19.5326V19.5313Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.1582 11.2532V19.5311H15.3738V11.2532C15.3738 11.1655 15.3475 11.1392 15.2598 11.1392H4.2735C4.18578 11.1392 4.15946 11.1655 4.15946 11.2532H4.1582Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.1582 2.78479H11.1766V0H4.1582V2.78479Z"
              fill="#fff"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.51483 0.00423658H10.6081V0L11.8528 0.00423658H11.9386L14.1451 0.0127097L14.3051 0.0571938C14.7182 0.171581 15.0445 0.533809 15.3432 0.824015C15.6854 1.15765 16.0244 1.49657 16.3612 1.83656C16.9121 2.38943 17.4566 2.95184 18.0106 3.50047L18.5445 4.03005C18.7839 4.26729 18.9354 4.5109 18.9862 4.85088L19 4.94197V19H0V0.00317743H3.51483V0.00423658ZM1.24576 17.7555H3.59958C3.59958 15.4021 3.59958 13.0487 3.59958 10.6952C3.59958 10.0089 3.56462 9.59056 4.1875 9.51006C4.51165 9.4677 12.0752 9.50265 13.0148 9.50265C15.1504 9.50265 15.4004 9.23468 15.4004 10.6635C15.4004 13.0275 15.4004 15.3915 15.4004 17.7555H17.7542V5.03517C17.7479 4.99281 17.7278 4.9748 17.6674 4.91549L17.1335 4.38592C16.8146 4.06712 14.0943 1.29216 13.9735 1.25826L11.8538 1.25085L11.8549 4.08936C11.8559 4.40287 11.7426 4.62529 11.5201 4.72167C11.2765 4.82758 8.27754 4.76509 7.7267 4.76509C7.18856 4.76509 4.18962 4.82758 3.95763 4.72908C3.46928 4.52255 3.59958 3.73772 3.59958 3.18485C3.59958 2.53983 3.59958 1.89587 3.59958 1.25085H1.24576V17.7566V17.7555ZM4.76059 10.7599V17.7555H14.2405V10.7599C14.2405 10.6857 14.2182 10.6635 14.1441 10.6635H4.85805C4.7839 10.6635 4.76165 10.6857 4.76165 10.7599H4.76059ZM4.76059 3.60321H10.6939V1.24979H4.76059V3.60321Z"
              fill="white"
            />
          </svg>
        )}
        <p>{props.bookmark ? 'Удалить из кабинета' : 'Сохранить в кабинет'}</p>
      </div>
      <div
        onMouseEnter={() => setButtonProcessedHovered(true)}
        onMouseLeave={() => setButtonProcessedHovered(false)}
        onClick={props.handleFailAddClick}
        className={`${style.dialog__button} ${
          props.credibilityError ||
          props.nameError ||
          props.yearError ||
          props.authorError ||
          props.commentError
            ? style.btn__error
            : ''
        }`}
      >
        {buttonProcessedHovered ? (
          <svg
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.56335 8.93705L14.5669 0.611043C15.3436 -0.198048 16.6212 -0.204154 17.4067 0.595777C18.1923 1.39571 18.1982 2.71163 17.4216 3.52072L7.93582 13.3886C7.3311 14.0175 6.40328 14.1763 5.63256 13.7947L5.53177 13.7428L0.578434 8.58899C-0.198211 7.7799 -0.192283 6.46398 0.593256 5.66405C1.37879 4.86412 2.65641 4.87022 3.43305 5.67931L6.56335 8.934V8.93705Z"
              fill="#fff"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.56311 8.93547L14.5662 0.611585C15.3443 -0.198525 16.6197 -0.204312 17.4062 0.597118C18.1927 1.39855 18.1984 2.71209 17.4202 3.5222L7.93676 13.3882C7.3328 14.016 6.4058 14.178 5.6333 13.7932L5.53218 13.7441L0.579749 8.59406C-0.198369 7.78395 -0.192751 6.47042 0.593795 5.66899C1.38034 4.86756 2.65567 4.87334 3.43379 5.68345L6.56311 8.93836V8.93547ZM6.29063 12.6128C6.53783 12.6967 6.81874 12.6301 7.00414 12.4363L16.4876 2.57032C16.7573 2.28967 16.7545 1.82964 16.482 1.55478C16.2095 1.27703 15.7629 1.27993 15.496 1.56057L6.56311 10.8537L2.50398 6.62955C2.2343 6.3489 1.78766 6.34601 1.51799 6.62376C1.2455 6.90151 1.24269 7.36154 1.51237 7.63929L6.29344 12.6128H6.29063Z"
              fill="white"
            />
          </svg>
        )}
        <p>Завершить обработку</p>
      </div>
      {props.nameError ||
      props.yearError ||
      props.authorError ||
      props.credibilityError ||
      props.commentError ? (
        <div className={style.error}>
          {props.nameError ||
            props.yearError ||
            props.authorError ||
            props.credibilityError ||
            props.commentError}
        </div>
      ) : null}
    </>
  );
}

export default AffiliationButtons;