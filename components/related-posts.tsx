import type { NextPage } from "next";
import BlogPostCard4 from "./blog-post-card4";
import BlogPostCard2 from "./blog-post-card2";
import BlogPostCard from "./blog-post-card";
import Pagination from "./pagination";
import styles from "./related-posts.module.css";

export type RelatedPostsType = {
  className?: string;
};

const RelatedPosts: NextPage<RelatedPostsType> = ({ className = "" }) => {
  return (
    <section className={[styles.relatedPosts, className].join(" ")}>
      <div className={styles.headingAndContentParent}>
        <div className={styles.headingAndContent}>
          <h2 className={styles.heading}>All blog posts</h2>
          <div className={styles.content}>
            <div className={styles.row}>
              <BlogPostCard4 image="/image-4@2x.png" />
              <BlogPostCard2
                author="Sunday , 1 Jan 2023"
                arrowUpRight="/arrowupright1.svg"
                propColor="#fff"
                propColor1="#c0c5d0"
                propMixBlendMode="lighten"
                propMixBlendMode1="lighten"
                propMixBlendMode2="lighten"
              />
              <BlogPostCard
                propFlex="unset"
                propMinWidth="unset"
                image="/image-6@2x.png"
                propHeight="240px"
                author="Sunday , 1 Jan 2023"
                heading="What is Wireframing?"
                propColor="#fff"
                propMinWidth1="198px"
                arrowUpRight="/arrowupright1.svg"
                supportingText="Introduction to Wireframing and its Principles. Learn from the best in the industry."
                propColor1="#c0c5d0"
                propMixBlendMode="lighten"
                propMixBlendMode1="lighten"
                propMixBlendMode2="lighten"
                textDisplay="inline-block"
                textMinWidth="48px"
                nestedBadgeDisplay="inline-block"
                nestedBadgeMinWidth="64px"
                badgeMinWidth="69px"
              />
            </div>
            <div className={styles.row}>
              <BlogPostCard
                propFlex="unset"
                propMinWidth="unset"
                image="/image-7@2x.png"
                propHeight="240px"
                author="Sunday , 1 Jan 2023"
                heading="How collaboration makes us better designers"
                propColor="#fff"
                propMinWidth1="224px"
                arrowUpRight="/arrowupright1.svg"
                supportingText="Collaboration can make our teams stronger, and our individual designs better."
                propColor1="#c0c5d0"
                propMixBlendMode="lighten"
                propMixBlendMode1="lighten"
                propMixBlendMode2="lighten"
                textDisplay="inline-block"
                textMinWidth="48px"
                nestedBadgeDisplay="inline-block"
                nestedBadgeMinWidth="64px"
                badgeMinWidth="69px"
              />
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image-8@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>
                        Our top 10 Javascript frameworks to use
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
                    <div className={styles.supportingText}>
                      JavaScript frameworks make development easy with extensive
                      features and functionalities.
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.text}>Software Development</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text}>Tools</div>
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeBase2}>
                        <div className={styles.text}>SaaS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image-9@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading2}>
                        Podcast: Creating a better CX Community
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
                    <div className={styles.supportingText1}>
                      Starting a community doesn’t need to be complicated, but
                      how do you get started?
                    </div>
                  </div>
                  <div className={styles.categories1}>
                    <div className={styles.badge3}>
                      <div className={styles.badgeBase3}>
                        <div className={styles.text3}>Podcasts</div>
                      </div>
                    </div>
                    <div className={styles.badge4}>
                      <div className={styles.badgeBase4}>
                        <div className={styles.text}>Customer Success</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text5}>Presentation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          propBorderTop="1px solid rgba(234, 236, 240, 0.34)"
          arrowLeft="/arrowleft1.svg"
          propColor="#efefef"
          propColor1="#112211"
          propColor2="#efefef"
          propColor3="#efefef"
          propColor4="#efefef"
          propColor5="#efefef"
          propColor6="#efefef"
          propColor7="#efefef"
          propColor8="#efefef"
          arrowRight="/arrowright1.svg"
          nextLabelDisplay="inline-block"
          nextLabelMinWidth="33px"
        />
      </div>
    </section>
  );
};

export default RelatedPosts;
