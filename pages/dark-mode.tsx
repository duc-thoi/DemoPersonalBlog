import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import Header from "../components/header";
import BlogPostCard from "../components/blog-post-card";
import BlogPostCard5 from "../components/blog-post-card5";
import FeaturedPost from "../components/featured-post";
import RelatedPosts from "../components/related-posts";
import styles from "./dark-mode.module.css";

const DarkMode: NextPage = () => {
  const router = useRouter();

  const onImageClick = useCallback(() => {
    router.push("/blog-detail-blog");
  }, [router]);

  return (
    <div className={styles.darkMode}>
      <div className={styles.headerSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.headingAndSupportingText}>
              <div className={styles.headingAndSubheading}>
                <div className={styles.subheading}>Our blog</div>
                <div className={styles.heading}>Stories and interviews</div>
              </div>
              <div className={styles.supportingText}>
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </div>
            </div>
            <div className={styles.emailCapture}>
              <div className={styles.inputField}>
                <div className={styles.inputFieldBase}>
                  <div className={styles.inputWithLabel}>
                    <div className={styles.label}>Email</div>
                    <div className={styles.input}>
                      <div className={styles.content1}>
                        <img
                          className={styles.mailIcon}
                          alt=""
                          src="/mail.svg"
                        />
                        <div className={styles.text}>Enter your email</div>
                      </div>
                      <img
                        className={styles.helpIcon}
                        alt=""
                        src="/help-icon.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.hintText}>
                    {`We care about your data in our `}
                    <span className={styles.privacyPolicy}>privacy policy</span>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.buttonBase}>
                  <div className={styles.text1}>Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <main className={styles.frameParent}>
        <section className={styles.containerWrapper}>
          <div className={styles.container1}>
            <b className={styles.theBlog}>THE BLOG</b>
          </div>
        </section>
        <section className={styles.section}>
          <div className={styles.container2}>
            <h2 className={styles.heading1}>Recent blog posts</h2>
            <div className={styles.content2}>
              <BlogPostCard
                propFlex="1"
                propMinWidth="385px"
                image="/image@2x.png"
                propHeight="228px"
                author="Sunday , 1 Jan 2023"
                heading="UX review presentations"
                propColor="#fff"
                propMinWidth1="225px"
                arrowUpRight="/arrowupright1.svg"
                supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
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
              <div className={styles.column}>
                <BlogPostCard5
                  image="/image-1@2x.png"
                  author="Sunday , 1 Jan 2023"
                  heading="Migrating to Linear 101"
                  propColor="#fff"
                  supportingText="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
                  propColor1="#c0c5d0"
                  propMixBlendMode="lighten"
                  propBackgroundColor="#f0f9ff"
                  propColor2="#026aa2"
                  propMixBlendMode1="lighten"
                  textDisplay="inline-block"
                  textMinWidth="48px"
                  badgeMinWidth="54px"
                />
                <BlogPostCard5
                  image="/image-2@2x.png"
                  author="Sunday , 1 Jan 2023"
                  heading="Building your API Stack"
                  propColor="#fff"
                  supportingText="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                  propColor1="#c0c5d0"
                  propMixBlendMode="lighten"
                  propBackgroundColor="#ecfdf3"
                  propColor2="#037a48"
                  propMixBlendMode1="lighten"
                  textDisplay="inline-block"
                  textMinWidth="48px"
                  badgeMinWidth="54px"
                />
              </div>
            </div>
          </div>
        </section>
        <FeaturedPost
          author="Sunday , 1 Jan 2023"
          propBackgroundColor="#090d1f"
          propColor="#fff"
          propColor1="#c0c5d0"
          propMixBlendMode="lighten"
          propMixBlendMode1="lighten"
          onImageClick={onImageClick}
          onImageClick={onImageClick}
        />
        <RelatedPosts />
      </main>
      <footer className={styles.footer}>
        <div className={styles.container3}>
          <div className={styles.div}>© 2023</div>
          <div className={styles.menu}>
            <h3 className={styles.twitter}>{`Twitter `}</h3>
            <h3 className={styles.linkedin}>LinkedIn</h3>
            <h3 className={styles.email}>Email</h3>
            <h3 className={styles.rssFeed}>RSS feed</h3>
            <h3 className={styles.addToFeedly}>Add to Feedly</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DarkMode;
