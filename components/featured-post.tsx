import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./featured-post.module.css";

export type FeaturedPostType = {
  className?: string;
  author?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];
  propMixBlendMode1?: CSSProperties["mixBlendMode"];

  /** Action props */
  onImageClick?: () => void;
};

const FeaturedPost: NextPage<FeaturedPostType> = ({
  className = "",
  author,
  propBackgroundColor,
  propColor,
  propColor1,
  propMixBlendMode,
  propMixBlendMode1,
  onImageClick,
}) => {
  const sectionStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const heading2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const supportingText2Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const badge5Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
    };
  }, [propMixBlendMode]);

  const badge6Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode1,
    };
  }, [propMixBlendMode1]);

  return (
    <section className={[styles.featuredPost, className].join(" ")}>
      <div className={styles.section} style={sectionStyle}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.blogPostCard}>
              <img
                className={styles.imageIcon}
                alt=""
                src="/image-3@2x.png"
                onClick={onImageClick}
              />
              <div className={styles.content1}>
                <div className={styles.headingAndText}>
                  <div className={styles.author}>{author}</div>
                  <div className={styles.headingAndIcon} onClick={onImageClick}>
                    <label className={styles.heading} style={heading2Style}>
                      Grid system for better Design User Interface
                    </label>
                    <div className={styles.iconWrap}>
                      <img
                        className={styles.arrowUpRightIcon}
                        alt=""
                        src="/arrowupright.svg"
                      />
                    </div>
                  </div>
                  <div
                    className={styles.supportingText}
                    style={supportingText2Style}
                  >
                    A grid system is a design tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.
                  </div>
                </div>
                <div className={styles.categories}>
                  <div className={styles.badge} style={badge5Style}>
                    <div className={styles.badgeBase}>
                      <div className={styles.text}>Design</div>
                    </div>
                  </div>
                  <div className={styles.badge1} style={badge6Style}>
                    <div className={styles.badgeBase1}>
                      <div className={styles.text1}>Interface</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;
