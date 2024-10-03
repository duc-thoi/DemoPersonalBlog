import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./blog-post-card2.module.css";

export type BlogPostCard2Type = {
  className?: string;
  author?: string;
  arrowUpRight?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];
  propMixBlendMode1?: CSSProperties["mixBlendMode"];
  propMixBlendMode2?: CSSProperties["mixBlendMode"];
};

const BlogPostCard2: NextPage<BlogPostCard2Type> = ({
  className = "",
  author,
  arrowUpRight,
  propColor,
  propColor1,
  propMixBlendMode,
  propMixBlendMode1,
  propMixBlendMode2,
}) => {
  const heading3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const supportingText3Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const badge7Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
    };
  }, [propMixBlendMode]);

  const badge8Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode1,
    };
  }, [propMixBlendMode1]);

  const badge9Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode2,
    };
  }, [propMixBlendMode2]);

  return (
    <div className={[styles.blogPostCard, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src="/image-5@2x.png" />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>{author}</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading3Style}>
              PM mental models
            </h2>
            <div className={styles.iconWrap}>
              <img
                className={styles.arrowUpRightIcon}
                alt=""
                src={arrowUpRight}
              />
            </div>
          </div>
          <div className={styles.supportingText} style={supportingText3Style}>
            Mental models are simple expressions of complex processes or
            relationships.
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge} style={badge7Style}>
            <div className={styles.badgeBase}>
              <div className={styles.tagName}>Product</div>
            </div>
          </div>
          <div className={styles.badge1} style={badge8Style}>
            <div className={styles.badgeBase1}>
              <div className={styles.tagName1}>Research</div>
            </div>
          </div>
          <div className={styles.badge2} style={badge9Style}>
            <div className={styles.badgeBase2}>
              <div className={styles.tagName}>Frameworks</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard2;
