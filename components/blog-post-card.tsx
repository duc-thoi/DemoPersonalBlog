import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./blog-post-card.module.css";

export type BlogPostCardType = {
  className?: string;
  image?: string;
  author?: string;
  heading?: string;
  arrowUpRight?: string;
  supportingText?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propColor?: CSSProperties["color"];
  propMinWidth1?: CSSProperties["minWidth"];
  propColor1?: CSSProperties["color"];
  propMixBlendMode?: CSSProperties["mixBlendMode"];
  propMixBlendMode1?: CSSProperties["mixBlendMode"];
  propMixBlendMode2?: CSSProperties["mixBlendMode"];
  textDisplay?: CSSProperties["display"];
  textMinWidth?: CSSProperties["minWidth"];
  nestedBadgeDisplay?: CSSProperties["display"];
  nestedBadgeMinWidth?: CSSProperties["minWidth"];
  badgeMinWidth?: CSSProperties["minWidth"];
};

const BlogPostCard: NextPage<BlogPostCardType> = ({
  className = "",
  propFlex,
  propMinWidth,
  image,
  propHeight,
  author,
  heading,
  propColor,
  propMinWidth1,
  arrowUpRight,
  supportingText,
  propColor1,
  propMixBlendMode,
  propMixBlendMode1,
  propMixBlendMode2,
  textDisplay,
  textMinWidth,
  nestedBadgeDisplay,
  nestedBadgeMinWidth,
  badgeMinWidth,
}) => {
  const blogPostCardStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const imageIconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const headingStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth1,
    };
  }, [propColor, propMinWidth1]);

  const supportingTextStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
    };
  }, [propMixBlendMode]);

  const badge1Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode1,
    };
  }, [propMixBlendMode1]);

  const badge2Style: CSSProperties = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode2,
      minWidth: badgeMinWidth,
    };
  }, [propMixBlendMode2, badgeMinWidth]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      display: textDisplay,
      minWidth: textMinWidth,
    };
  }, [textDisplay, textMinWidth]);

  const nestedBadgeStyle: CSSProperties = useMemo(() => {
    return {
      display: nestedBadgeDisplay,
      minWidth: nestedBadgeMinWidth,
    };
  }, [nestedBadgeDisplay, nestedBadgeMinWidth]);

  return (
    <div
      className={[styles.blogPostCard, className].join(" ")}
      style={blogPostCardStyle}
    >
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>{author}</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={headingStyle}>
              {heading}
            </h2>
            <div className={styles.iconWrap}>
              <img
                className={styles.arrowUpRightIcon}
                loading="lazy"
                alt=""
                src={arrowUpRight}
              />
            </div>
          </div>
          <div className={styles.supportingText} style={supportingTextStyle}>
            {supportingText}
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge} style={badgeStyle}>
            <div className={styles.badgeBase}>
              <div className={styles.text} style={textStyle}>
                Design
              </div>
            </div>
          </div>
          <div className={styles.badge1} style={badge1Style}>
            <div className={styles.badgeBase1}>
              <div className={styles.nestedBadge} style={nestedBadgeStyle}>
                Research
              </div>
            </div>
          </div>
          <div className={styles.badge2} style={badge2Style}>
            <div className={styles.badgeBase2}>
              <div className={styles.text1}>Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
