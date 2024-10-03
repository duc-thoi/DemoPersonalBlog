import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./blog-post-card5.module.css";

export type BlogPostCard5Type = {
  className?: string;
  image?: string;
  author?: string;
  heading?: string;
  supportingText?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor2?: CSSProperties["color"];
  propMixBlendMode1?: CSSProperties["mixBlendMode"];
  textDisplay?: CSSProperties["display"];
  textMinWidth?: CSSProperties["minWidth"];
  badgeMinWidth?: CSSProperties["minWidth"];
};

const BlogPostCard5: NextPage<BlogPostCard5Type> = ({
  className = "",
  image,
  author,
  heading,
  propColor,
  supportingText,
  propColor1,
  propMixBlendMode,
  propBackgroundColor,
  propColor2,
  propMixBlendMode1,
  textDisplay,
  textMinWidth,
  badgeMinWidth,
}) => {
  const heading1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const supportingText1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const badge3Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
    };
  }, [propMixBlendMode]);

  const badgeBaseStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
      display: textDisplay,
      minWidth: textMinWidth,
    };
  }, [propColor2, textDisplay, textMinWidth]);

  const badge4Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode1,
      minWidth: badgeMinWidth,
    };
  }, [propMixBlendMode1, badgeMinWidth]);

  return (
    <div className={[styles.blogPostCard, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>{author}</div>
          <div className={styles.headingAndText1}>
            <div className={styles.heading} style={heading1Style}>
              {heading}
            </div>
            <div className={styles.supportingText} style={supportingText1Style}>
              {supportingText}
            </div>
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge} style={badge3Style}>
            <div className={styles.badgeBase} style={badgeBaseStyle}>
              <div className={styles.text} style={text1Style}>
                Design
              </div>
            </div>
          </div>
          <div className={styles.badge1} style={badge4Style}>
            <div className={styles.badgeBase1}>
              <div className={styles.text1}>Research</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard5;
