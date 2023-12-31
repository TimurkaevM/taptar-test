import style from '../listStyles.module.css';

function ListItemHeader() {
  return (
    <div className={style.list__header}>
      <div className={style.header__img}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          space="preserve"
          width="100%"
          height="100%"
          version="1.1"
          style={{
            shapeRendering: 'geometricPrecision',
            textRendering: 'geometricPrecision',
            imageRendering: 'optimizeQuality',
            fillRule: 'evenodd',
            clipRule: 'evenodd',
          }}
          viewBox="0 0 77.16 61.77"
          xlink="http://www.w3.org/1999/xlink"
          xodm="http://www.corel.com/coreldraw/odm/2003"
        >
          <g id="Слой_x0020_1">
            <metadata id="CorelCorpID_0Corel-Layer" />
            <path
              fill="#000"
              fillRule="nonzero"
              d="M14.47 46.32l48.22 0c1.14,0 2.07,0.93 2.07,2.07 0,1.14 -0.94,2.07 -2.07,2.07l-48.22 0c-1.14,0 -2.07,-0.93 -2.07,-2.07 0,-1.14 0.93,-2.07 2.07,-2.07zm0 -7.61l48.22 0c1.14,0 2.07,0.93 2.07,2.07 0,1.14 -0.94,2.07 -2.07,2.07l-48.22 0c-1.14,0 -2.07,-0.93 -2.07,-2.07 0,-1.14 0.93,-2.07 2.07,-2.07zm0 -7.88l48.22 0c1.14,0 2.07,0.93 2.07,2.07 0,1.14 -0.94,2.07 -2.07,2.07l-48.22 0c-1.14,0 -2.07,-0.93 -2.07,-2.07 0,-1.14 0.93,-2.07 2.07,-2.07zm-0.04 -19.09l26.66 0c1.14,0 2.07,0.93 2.07,2.07 0,1.14 -0.94,2.07 -2.07,2.07l-26.66 0c-1.14,0 -2.07,-0.93 -2.07,-2.07 0,-1.14 0.93,-2.07 2.07,-2.07zm-14.44 41.48c0,4.72 3.84,8.56 8.56,8.56l60.04 0c4.72,0 8.56,-3.84 8.56,-8.56l0 -36.34c0,-1.07 -0.43,-2.1 -1.18,-2.86l-4.09 -4.09 -7.19 -7.19 -0.04 -0.04 -1.51 -1.51c-0.76,-0.76 -1.79,-1.18 -2.86,-1.18l-1.27 0 -4.04 0 -5.32 0 -41.09 0c-4.72,0 -8.56,3.84 -8.56,8.56 0,14.98 0,29.83 0,44.66zm66.17 -43.29l5.12 5.12 -4.97 0c-2.47,0 -4.48,-2.01 -4.48,-4.48l0 -4.97 4.33 4.33zm-8.06 -5.88c-0.2,0.48 -0.31,1.01 -0.31,1.55l0 4.97c0,4.7 3.82,8.52 8.52,8.52l4.97 0c0.65,0 1.28,-0.16 1.83,-0.44l0 34.58c0,2.49 -2.02,4.52 -4.52,4.52l-60.04 0c-2.5,0 -4.52,-2.03 -4.52,-4.52l0 -44.66c0,-2.49 2.02,-4.52 4.52,-4.52l49.55 0zm-43.68 15.59l26.66 0c1.14,0 2.07,0.93 2.07,2.07 0,1.14 -0.94,2.07 -2.07,2.07l-26.66 0c-1.14,0 -2.07,-0.93 -2.07,-2.07 0,-1.14 0.93,-2.07 2.07,-2.07z"
            />
          </g>
        </svg>
      </div>
      <p className={style.list__name}>Документ</p>
    </div>
  );
}

export default ListItemHeader;
