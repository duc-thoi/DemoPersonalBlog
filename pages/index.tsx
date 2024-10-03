import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import BlogPostCard from "../components/blog-post-card";
import BlogPostCard5 from "../components/blog-post-card5";
import FeaturedPost from "../components/featured-post";
import RecentPosts from "../components/recent-posts";
import styles from "./index.module.css";

const LightMode: NextPage = () => {
  const router = useRouter();

  const onToggleModeContainerClick = useCallback(() => {
    router.push("/dark-mode");
  }, [router]);

  return (
    <div className={styles.lightMode}>
      <section className={styles.header}>
        <header className={styles.navbar}>
          <a className={styles.yourName}>Your Name</a>
          <div className={styles.menu}>
            <div className={styles.blog}>
              <a className={styles.blog1}>Blog</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.blog1}>Projects</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.blog1}>About</a>
            </div>
            <div className={styles.blog}>
              <a className={styles.newsletter1}>Newsletter</a>
            </div>
            <div
              className={styles.toggleMode}
              onClick={onToggleModeContainerClick}
            >
              <img
                className={styles.iconoutlinesun}
                loading="lazy"
                alt=""
                src="/iconoutlinesun.svg"
              />
              <div className={styles.iconoutlinemoon}>
                <img className={styles.moonIcon} loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.container}>
          <b className={styles.theBlog}>THE BLOG</b>
        </div>
      </section>
      <section className={styles.headerSection}>
        <div className={styles.container1}>
          <div className={styles.content}>
            <div className={styles.headingAndSupportingText}>
              <div className={styles.headingAndSubheading}>
                <div className={styles.subheading}>Our blog</div>
                <h1 className={styles.heading}>Stories and interviews</h1>
              </div>
              <h3 className={styles.supportingText}>
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </h3>
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
      </section>
      <section className={styles.section}>
        <div className={styles.container2}>
          <h2 className={styles.heading1}>Recent blog posts</h2>
          <div className={styles.content2}>
            <BlogPostCard
              image="/image@2x.png"
              author="Olivia Rhye • 1 Jan 2023"
              heading="UX review presentations"
              arrowUpRight="/arrowupright.svg"
              supportingText="How do you create compelling presentations that wow your colleagues and impress your managers?"
            />
            <div className={styles.column}>
              <BlogPostCard5
                image="/image-1@2x.png"
                author="Phoenix Baker • 1 Jan 2023"
                heading="Migrating to Linear 101"
                supportingText="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
              />
              <BlogPostCard5
                image="/image-2@2x.png"
                author="Lana Steiner • 1 Jan 2023"
                heading="Building your API Stack"
                propColor="#1a1a1a"
                supportingText="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                propColor1="#667085"
                propMixBlendMode="multiply"
                propBackgroundColor="#ecfdf3"
                propColor2="#037a48"
                propMixBlendMode1="multiply"
                textDisplay="inline-block"
                textMinWidth="48px"
                badgeMinWidth="54px"
              />
            </div>
          </div>
        </div>
      </section>
      <FeaturedPost author="Olivia Rhye • 1 Jan 2023" />
      <RecentPosts />
      <section className={styles.footer}>
        <div className={styles.container3}>
          <div className={styles.div}>© 2023</div>
          <div className={styles.menu1}>
            <h3 className={styles.twitter}>{`Twitter `}</h3>
            <h3 className={styles.linkedin}>LinkedIn</h3>
            <h3 className={styles.email}>Email</h3>
            <h3 className={styles.rssFeed}>RSS feed</h3>
            <h3 className={styles.addToFeedly}>Add to Feedly</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LightMode;
