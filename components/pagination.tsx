import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./pagination.module.css";

export type PaginationType = {
  className?: string;
  arrowLeft?: string;
  arrowRight?: string;

  /** Style props */
  propBorderTop?: CSSProperties["borderTop"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propColor2?: CSSProperties["color"];
  propColor3?: CSSProperties["color"];
  propColor4?: CSSProperties["color"];
  propColor5?: CSSProperties["color"];
  propColor6?: CSSProperties["color"];
  propColor7?: CSSProperties["color"];
  propColor8?: CSSProperties["color"];
  nextLabelDisplay?: CSSProperties["display"];
  nextLabelMinWidth?: CSSProperties["minWidth"];
};

const Pagination: NextPage<PaginationType> = ({
  className = "",
  propBorderTop,
  arrowLeft,
  propColor,
  propColor1,
  propColor2,
  propColor3,
  propColor4,
  propColor5,
  propColor6,
  propColor7,
  propColor8,
  arrowRight,
  nextLabelDisplay,
  nextLabelMinWidth,
}) => {
  const paginationStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const previousLabelStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const numberStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const number1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const number2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const number3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const number4Style: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  const number5Style: CSSProperties = useMemo(() => {
    return {
      color: propColor6,
    };
  }, [propColor6]);

  const number6Style: CSSProperties = useMemo(() => {
    return {
      color: propColor7,
    };
  }, [propColor7]);

  const nextLabelStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor8,
      display: nextLabelDisplay,
      minWidth: nextLabelMinWidth,
    };
  }, [propColor8, nextLabelDisplay, nextLabelMinWidth]);

  return (
    <div
      className={[styles.pagination, className].join(" ")}
      style={paginationStyle}
    >
      <div className={styles.nextPage}>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <img
              className={styles.arrowLeftIcon}
              loading="lazy"
              alt=""
              src={arrowLeft}
            />
            <div className={styles.previousLabel} style={previousLabelStyle}>
              Previous
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paginationNumbers}>
        <div className={styles.paginationNumberBase}>
          <div className={styles.content}>
            <div className={styles.previousLabel} style={numberStyle}>
              1
            </div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content1}>
            <div className={styles.previousLabel} style={number1Style}>
              2
            </div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content2}>
            <div className={styles.previousLabel} style={number2Style}>
              3
            </div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content3}>
            <div className={styles.previousLabel} style={number3Style}>
              ...
            </div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content1}>
            <div className={styles.previousLabel} style={number4Style}>
              8
            </div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content1}>
            <div className={styles.previousLabel} style={number5Style}>
              9
            </div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content6}>
            <div className={styles.previousLabel} style={number6Style}>
              10
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nextPage}>
        <div className={styles.button}>
          <div className={styles.buttonBase}>
            <div className={styles.nextLabel} style={nextLabelStyle}>
              Next
            </div>
            <img
              className={styles.arrowLeftIcon}
              loading="lazy"
              alt=""
              src={arrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
