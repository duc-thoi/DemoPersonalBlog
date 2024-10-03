import type { NextPage } from "next";
import BlogPostCard2 from "./blog-post-card2";
import BlogPostCard3 from "./blog-post-card3";
import Pagination from "./pagination";
import styles from "./recent-posts.module.css";

export type RecentPostsType = {
  className?: string;
};

const RecentPosts: NextPage<RecentPostsType> = ({ className = "" }) => {
  return (
    <section className={[styles.recentPosts, className].join(" ")}>
      <div className={styles.recentPostsWrapper}>
        <div className={styles.headingAndContent}>
          <h2 className={styles.heading}>All blog posts</h2>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-4@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>
                      Alec Whitten • 1 Jan 2023
                    </div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>
                        Bill Walsh leadership lessons
                      </h2>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.supportingText}>
                      Like to know the secrets of transforming a 2-14 team into
                      a 3x Super Bowl winning Dynasty?
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.text}>Leadership</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.text}>Management</div>
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
              <BlogPostCard2
                author="Demi WIlkinson • 1 Jan 2023"
                arrowUpRight="/arrowupright.svg"
              />
              <BlogPostCard3
                image="/image-6@2x.png"
                author="Candice Wu • 1 Jan 2023"
                heading="What is Wireframing?"
                supportingText="Introduction to Wireframing and its Principles. Learn from the best in the industry."
                tagName="Design"
                tagName1="Research"
              />
            </div>
            <div className={styles.row}>
              <BlogPostCard3
                image="/image-7@2x.png"
                author="Natali Craig • 1 Jan 2023"
                heading="How collaboration makes us better designers"
                propMinWidth="224px"
                supportingText="Collaboration can make our teams stronger, and our individual designs better."
                tagName="Design"
                propMinWidth1="48px"
                propMinWidth2="54px"
                propBackgroundColor="#eef4ff"
                tagName1="Research"
                propColor="#3538cd"
              />
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon1}
                  alt=""
                  src="/image-8@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Drew Cano • 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading2}>
                        Our top 10 Javascript frameworks to use
                      </h2>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.supportingText1}>
                      JavaScript frameworks make development easy with extensive
                      features and functionalities.
                    </div>
                  </div>
                  <div className={styles.categories1}>
                    <div className={styles.badge3}>
                      <div className={styles.badgeBase3}>
                        <div className={styles.text}>Software Development</div>
                      </div>
                    </div>
                    <div className={styles.badge4}>
                      <div className={styles.badgeBase4}>
                        <div className={styles.text}>Tools</div>
                      </div>
                    </div>
                    <div className={styles.badge5}>
                      <div className={styles.badgeBase5}>
                        <div className={styles.text}>SaaS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlogPostCard3
                image="/image-9@2x.png"
                author="Orlando Diggs • 1 Jan 2023"
                heading="Podcast: Creating a better CX Community"
                propMinWidth="224px"
                supportingText="Starting a community doesn’t need to be complicated, but how do you get started?"
                tagName="Podcasts"
                propMinWidth1="64px"
                propMinWidth2="95px"
                propBackgroundColor="#f8f9fc"
                tagName1="Customer Success"
                propColor="#363e72"
              />
            </div>
          </div>
        </div>
        <Pagination arrowLeft="/arrowleft.svg" arrowRight="/arrowright.svg" />
      </div>
    </section>
  );
};

export default RecentPosts;
