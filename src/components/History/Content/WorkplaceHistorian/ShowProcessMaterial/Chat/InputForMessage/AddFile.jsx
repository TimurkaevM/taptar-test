import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { addFile } from '../../../../../../../redux/ducks/messages';
import styles from '../chat.module.css';

function AddFile() {
  const dispatch = useDispatch();

  const id = useParams().id;
  function fileUploadHandler(event) {
    const file = event.target.files[0];

    if (!event.target.files.length) {
      return;
    }
    const type = file.type.split('/');
    // if (!file.type.match(props.format)) {
    //   return;
    // }

    if (type[0] === 'image') {
      dispatch(addFile(file, 'photo', id));
    } else if (type[0] === 'application') {
      dispatch(addFile(file, 'document', id));
    } else {
      dispatch(addFile(file, type[0], id));
    }
  }

  return (
    <React.Fragment>
      <label htmlFor="oneFailAdd" className={styles['input-btn']}>
        <svg
          width="25"
          height="23"
          viewBox="0 0 25 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.42427 0H16.0608C17.3943 0 18.485 1.08457 18.485 2.41051V10.2203C18.0257 10.3421 17.5965 10.554 17.2224 10.8495V4.771H1.26261V20.5398C1.26261 21.175 1.78546 21.6949 2.42427 21.6949H16.0608C16.1264 21.6949 16.1907 21.6893 16.2535 21.6789C16.4449 22.072 16.6856 22.4391 16.9734 22.7718C16.6912 22.8868 16.3831 22.9503 16.0608 22.9503H2.42427C1.09077 22.9503 0 21.8658 0 20.5398V2.41085C0 1.08492 1.09077 0 2.42427 0Z"
            fill="#878787"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.39379 2.51084C9.39379 3.10852 9.67739 3.46518 10.3532 3.46518H15.9593C17.3288 3.46518 17.1793 1.80794 16.1109 1.80794H10.2016C9.80697 1.80794 9.39379 2.14098 9.39379 2.51084Z"
            fill="#FEFEFE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.5803 23.0001H21.0704C21.5055 22.9716 21.9428 22.8664 22.333 22.6705C23.5184 22.0749 24.3936 21.0007 24.3936 19.6356V12.1026C24.3936 11.8821 24.1701 11.6998 23.977 11.6348C23.6909 11.5386 23.4353 11.6424 23.2652 11.8849C23.1244 12.0856 23.1813 12.5183 23.1813 12.7555L23.1824 19.2348C23.1827 20.534 22.3777 21.654 21.0236 21.771C20.0554 21.8544 19.1836 21.3546 18.7411 20.4989C18.5919 20.2107 18.4844 19.8609 18.4844 19.5352V13.7602C18.4844 13.5716 18.6262 13.2691 18.7568 13.1333C18.9604 12.9218 19.2859 12.8319 19.5741 12.8552C19.9209 12.8833 20.2174 13.0687 20.3711 13.3834C20.5084 13.665 20.479 15.7178 20.4776 16.1096C20.4749 16.967 20.456 17.8248 20.4539 18.6819C20.4532 18.9469 20.4228 19.2595 20.5639 19.4963C20.8632 19.9988 21.7165 19.8405 21.7165 19.1837V13.8102C21.7165 13.1035 21.4074 12.4787 20.8332 12.0606C20.3173 11.6852 19.6391 11.5219 19.0093 11.6449C18.6915 11.707 18.3957 11.8404 18.1445 12.0446C17.4125 12.6395 17.2214 13.2254 17.2214 14.1617V19.2338C17.2214 20.6594 17.8766 21.9245 19.1515 22.6062C19.5881 22.8396 20.0872 22.9681 20.5803 23.0001Z"
            fill="#878787"
          />
          <path
            d="M5.07575 3.46518C5.536 3.46518 5.9091 3.09419 5.9091 2.63656C5.9091 2.17892 5.536 1.80794 5.07575 1.80794C4.6155 1.80794 4.2424 2.17892 4.2424 2.63656C4.2424 3.09419 4.6155 3.46518 5.07575 3.46518Z"
            fill="#FEFEFE"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.51248 1.80794C2.97282 1.80794 3.34583 2.17884 3.34583 2.63656C3.34583 3.09428 2.97282 3.46518 2.51248 3.46518C2.05214 3.46518 1.67913 3.09428 1.67913 2.63656C1.67913 2.17884 2.05214 1.80794 2.51248 1.80794ZM7.63869 1.80794C8.09903 1.80794 8.47204 2.17884 8.47204 2.63656C8.47204 3.09428 8.09903 3.46518 7.63869 3.46518C7.17836 3.46518 6.80534 3.09428 6.80534 2.63656C6.80534 2.17884 7.17836 1.80794 7.63869 1.80794Z"
            fill="#FEFEFE"
          />
        </svg>
        <div className={styles.btnText}>Файл с компьютера</div>
      </label>
      <input
        className={styles['input-btnFile']}
        // accept={`${props.format}/*`}
        onChange={(event) => fileUploadHandler(event)}
        type="file"
        id="oneFailAdd"
        name="oneFailAdd"
      />
    </React.Fragment>
  );
}

export default AddFile;
