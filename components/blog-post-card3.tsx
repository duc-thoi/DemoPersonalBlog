import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./blog-post-card3.module.css";

export type BlogPostCard3Type = {
  className?: string;
  image?: string;
  author?: string;
  heading?: string;
  supportingText?: string;
  tagName?: string;
  tagName1?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const BlogPostCard3: NextPage<BlogPostCard3Type> = ({
  className = "",
  image,
  author,
  heading,
  propMinWidth,
  supportingText,
  tagName,
  propMinWidth1,
  propMinWidth2,
  propBackgroundColor,
  tagName1,
  propColor,
}) => {
  const heading4Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const tagNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const badge10Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const badgeBase1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const tagName1Style: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.blogPostCard, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author}>{author}</div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading4Style}>
              {heading}
            </h2>
            <div className={styles.iconWrap}>
              <img
                className={styles.arrowUpRightIcon}
                alt=""
                src="/arrowupright.svg"
              />
            </div>
          </div>
          <div className={styles.supportingText}>{supportingText}</div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge}>
            <div className={styles.badgeBase}>
              <div className={styles.tagName} style={tagNameStyle}>
                {tagName}
              </div>
            </div>
          </div>
          <div className={styles.badge1} style={badge10Style}>
            <div className={styles.badgeBase1} style={badgeBase1Style}>
              <div className={styles.text} style={tagName1Style}>
                {tagName1}
              </div>
            </div>
          </div>
          <div className={styles.badge2}>
            <div className={styles.badgeBase2}>
              <div className={styles.text}>Presentation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard3;
