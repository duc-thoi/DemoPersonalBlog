import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./blog-post-card4.module.css";

export type BlogPostCard4Type = {
  className?: string;
  image?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propFlex1?: CSSProperties["flex"];
  propFlex2?: CSSProperties["flex"];
  propFlex3?: CSSProperties["flex"];
  propFlex4?: CSSProperties["flex"];
  propFlex5?: CSSProperties["flex"];
  headingFlex?: CSSProperties["flex"];
  headingDisplay?: CSSProperties["display"];
  headingMinWidth?: CSSProperties["minWidth"];
  supportingTextAlignSelf?: CSSProperties["alignSelf"];
};

const BlogPostCard4: NextPage<BlogPostCard4Type> = ({
  className = "",
  propAlignSelf,
  image,
  propAlignSelf1,
  propFlex,
  propFlex1,
  propFlex2,
  propFlex3,
  propFlex4,
  propFlex5,
  headingFlex,
  headingDisplay,
  headingMinWidth,
  supportingTextAlignSelf,
}) => {
  const blogPostCard1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const authorStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const badgeBase2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const text2Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const badgeBase3Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex2,
    };
  }, [propFlex2]);

  const text3Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex3,
    };
  }, [propFlex3]);

  const badgeBase4Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex4,
    };
  }, [propFlex4]);

  const text4Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex5,
    };
  }, [propFlex5]);

  const heading5Style: CSSProperties = useMemo(() => {
    return {
      flex: headingFlex,
      display: headingDisplay,
      minWidth: headingMinWidth,
    };
  }, [headingFlex, headingDisplay, headingMinWidth]);

  const supportingText4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: supportingTextAlignSelf,
    };
  }, [supportingTextAlignSelf]);

  return (
    <div
      className={[styles.blogPostCard, className].join(" ")}
      style={blogPostCard1Style}
    >
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.content}>
        <div className={styles.headingAndText}>
          <div className={styles.author} style={authorStyle}>
            Sunday , 1 Jan 2023
          </div>
          <div className={styles.headingAndIcon}>
            <h2 className={styles.heading} style={heading5Style}>
              Bill Walsh leadership lessons
            </h2>
            <div className={styles.iconWrap}>
              <img
                className={styles.arrowUpRightIcon}
                loading="lazy"
                alt=""
                src="/arrowupright1.svg"
              />
            </div>
          </div>
          <div className={styles.supportingText} style={supportingText4Style}>
            Like to know the secrets of transforming a 2-14 team into a 3x Super
            Bowl winning Dynasty?
          </div>
        </div>
        <div className={styles.categories}>
          <div className={styles.badge}>
            <div className={styles.badgeBase} style={badgeBase2Style}>
              <div className={styles.text} style={text2Style}>
                Leadership
              </div>
            </div>
          </div>
          <div className={styles.badge1}>
            <div className={styles.badgeBase1} style={badgeBase3Style}>
              <div className={styles.text} style={text3Style}>
                Management
              </div>
            </div>
          </div>
          <div className={styles.badge2}>
            <div className={styles.badgeBase2} style={badgeBase4Style}>
              <div className={styles.text} style={text4Style}>
                Presentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard4;
