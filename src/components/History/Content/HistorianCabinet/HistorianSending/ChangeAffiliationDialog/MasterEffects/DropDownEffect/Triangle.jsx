import style from './style.module.css';

export default function Triangle() {
  return (
    <div className={style.triangle}>
      <svg viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 23L0.00961679 0.500002L25.9904 0.5L13 23Z"
          fill="#BED1E6"
        />
      </svg>
    </div>
  );
}
