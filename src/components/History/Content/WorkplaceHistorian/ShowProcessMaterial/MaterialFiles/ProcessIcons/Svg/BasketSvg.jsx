import style from '../../listStyles.module.css';

function BasketSvg() {
  return (
    <svg
      className={style.iconSvg}
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={style.iconPath}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.21999 15.2483C1.21999 16.7661 2.53587 18 4.15268 18H11.8429C13.4597 18 14.7756 16.7661 14.7756 15.2483V3.55901V3.53131H15.3701C15.7168 3.53131 16 3.26543 16 2.93999C16 2.61456 15.7168 2.34867 15.3701 2.34867H11.9314V1.83213C11.9314 0.823973 11.0522 0 9.97972 0H6.01143C4.93749 0 4.05975 0.825358 4.05975 1.83213V2.34867H0.62991C0.283238 2.34867 0 2.61456 0 2.93999C0 3.26543 0.283238 3.53131 0.62991 3.53131H1.22441V3.55901V15.2483H1.21999ZM11.8429 16.8174H4.15268C3.22921 16.8174 2.47981 16.1139 2.47981 15.2483V3.55901H13.5143V15.2483C13.5143 16.1139 12.7649 16.8174 11.8414 16.8174H11.8429ZM10.7645 2.34867H5.2222V1.86259V1.83213C5.2222 1.54685 5.39775 1.2962 5.65148 1.17433C5.75917 1.1231 5.88014 1.09263 6.00996 1.09263H9.97824C10.1892 1.09263 10.3824 1.17156 10.5241 1.30035C10.5963 1.36544 10.6539 1.44161 10.6967 1.52747C10.7424 1.62025 10.7675 1.72411 10.7675 1.83213V2.34867H10.7645ZM4.28102 6.06832V14.3136C4.28102 14.639 4.56426 14.9049 4.91093 14.9049C5.25761 14.9049 5.54084 14.639 5.54084 14.3136V6.06832C5.54084 5.74288 5.25761 5.477 4.91093 5.477C4.56426 5.477 4.28102 5.74288 4.28102 6.06832ZM7.35386 6.06832V14.3136C7.35386 14.639 7.6371 14.9049 7.98377 14.9049C8.33044 14.9049 8.61368 14.639 8.61368 14.3136V6.06832C8.61368 5.74288 8.33044 5.477 7.98377 5.477C7.6371 5.477 7.35386 5.74288 7.35386 6.06832ZM10.4001 6.06832V14.3136C10.4001 14.639 10.6834 14.9049 11.0301 14.9049C11.3767 14.9049 11.66 14.639 11.66 14.3136V6.06832C11.66 5.74288 11.3767 5.477 11.0301 5.477C10.6834 5.477 10.4001 5.74288 10.4001 6.06832Z"
      />
    </svg>
  );
}

export default BasketSvg;