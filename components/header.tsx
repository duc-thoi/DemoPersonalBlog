import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./header.module.css";

export type HeaderType = {
  className?: string;
};

const Header: NextPage<HeaderType> = ({ className = "" }) => {
  const router = useRouter();

  const onIconoutlinemoonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <header className={[styles.header, className].join(" ")}>
      <div className={styles.navbar}>
        <a className={styles.yourName}>Your Name</a>
        <div className={styles.menu}>
          <div className={styles.blog}>
            <div className={styles.blogContainer}>
              <a className={styles.blog1}>Blog</a>
            </div>
          </div>
          <div className={styles.projects}>
            <a className={styles.projects1}>Projects</a>
          </div>
          <div className={styles.projects}>
            <a className={styles.projects1}>About</a>
          </div>
          <div className={styles.projects}>
            <a className={styles.newsletter1}>Newsletter</a>
          </div>
          <div className={styles.toggleMode}>
            <img
              className={styles.iconoutlinesun}
              loading="lazy"
              alt=""
              src="/iconoutlinesun1.svg"
            />
            <div
              className={styles.iconoutlinemoon}
              onClick={onIconoutlinemoonContainerClick}
            >
              <img
                className={styles.moonIcon}
                loading="lazy"
                alt=""
                src="/moon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
