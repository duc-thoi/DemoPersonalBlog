import type { NextPage } from "next";
import { useCallback } from "react";
import BlogPostCard6 from "../components/blog-post-card6";
import BlogPostCard4 from "../components/blog-post-card4";
import { useRouter } from "next/router";
import styles from "./blog-detail-blog.module.css";

const BlogDetailBlog: NextPage = () => {
  const router = useRouter();

  const onYourNameTextClick = useCallback(() => {
    router.push("/dark-mode");
  }, [router]);

  const onIconoutlinemoonContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.blogDetailBlog}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.div}>© 2023</div>
          <div className={styles.menu}>
            <h3 className={styles.twitter}>{`Twitter `}</h3>
            <h3 className={styles.twitter}>LinkedIn</h3>
            <h3 className={styles.twitter}>Email</h3>
            <h3 className={styles.twitter}>RSS feed</h3>
            <h3 className={styles.twitter}>Add to Feedly</h3>
          </div>
        </div>
      </footer>
      <main className={styles.section}>
        <section className={styles.container1}>
          <div className={styles.content}>
            <div className={styles.column}>
              <h2 className={styles.heading}>Recent blog posts</h2>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon}
                  loading="lazy"
                  alt=""
                  src="/image1@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>
                        UX review presentations
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
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.categoryNames}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.categoryNames}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeBase2}>
                        <div className={styles.categoryNames}>Presentation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlogPostCard6
                image="/image-11@2x.png"
                heading="Migrating to Linear 101"
                supportingText="Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get..."
              />
              <BlogPostCard6
                image="/image-21@2x.png"
                heading="Building your API Stack"
                supportingText="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                propBackgroundColor="#ecfdf3"
                propColor="#037a48"
              />
              <BlogPostCard4
                propAlignSelf="stretch"
                image="/image2@2x.png"
                propAlignSelf1="unset"
                propFlex="unset"
                propFlex1="unset"
                propFlex2="unset"
                propFlex3="unset"
                propFlex4="unset"
                propFlex5="unset"
                headingFlex="unset"
                headingDisplay="unset"
                headingMinWidth="unset"
                supportingTextAlignSelf="unset"
              />
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon1}
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>PM mental models</h2>
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
                      Mental models are simple expressions of complex processes
                      or relationships.
                    </div>
                  </div>
                  <div className={styles.categories1}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase3}>
                        <div className={styles.categoryNames}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.categoryNames}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge5}>
                      <div className={styles.badgeBase5}>
                        <div className={styles.categoryNames}>Frameworks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon1}
                  loading="lazy"
                  alt=""
                  src="/image-51@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>What is Wireframing?</h2>
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
                      Introduction to Wireframing and its Principles. Learn from
                      the best in the industry.
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.categoryNames}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.categoryNames}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeBase2}>
                        <div className={styles.categoryNames}>Presentation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon1}
                  loading="lazy"
                  alt=""
                  src="/image-61@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>
                        How collaboration makes us better designers
                      </h2>
                      <div className={styles.iconWrap}>
                        <img
                          className={styles.arrowUpRightIcon}
                          alt=""
                          src="/arrowupright1.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.supportingText}>
                      Collaboration can make our teams stronger, and our
                      individual designs better.
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.categoryNames}>Design</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.categoryNames}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeBase2}>
                        <div className={styles.categoryNames}>Presentation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon1}
                  loading="lazy"
                  alt=""
                  src="/image-71@2x.png"
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
                  <div className={styles.categories4}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase12}>
                        <div className={styles.categoryNames}>
                          Software Development
                        </div>
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeBase2}>
                        <div className={styles.categoryNames}>Tools</div>
                      </div>
                    </div>
                    <div className={styles.badge14}>
                      <div className={styles.badgeBase14}>
                        <div className={styles.categoryNames}>SaaS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon1}
                  loading="lazy"
                  alt=""
                  src="/image-81@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>
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
                    <div className={styles.supportingText}>
                      Starting a community doesn’t need to be complicated, but
                      how do you get started?
                    </div>
                  </div>
                  <div className={styles.categories}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase}>
                        <div className={styles.categoryNames}>Podcasts</div>
                      </div>
                    </div>
                    <div className={styles.badge16}>
                      <div className={styles.badgeBase16}>
                        <div className={styles.text13}>Customer Success</div>
                      </div>
                    </div>
                    <div className={styles.badge2}>
                      <div className={styles.badgeBase2}>
                        <div className={styles.categoryNames}>Presentation</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BlogPostCard6
                image="/image-21@2x.png"
                heading="Building your API Stack"
                supportingText="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                propBackgroundColor="#ecfdf3"
                propColor="#037a48"
              />
              <BlogPostCard4
                propAlignSelf="stretch"
                image="/image2@2x.png"
                propAlignSelf1="unset"
                propFlex="unset"
                propFlex1="unset"
                propFlex2="unset"
                propFlex3="unset"
                propFlex4="unset"
                propFlex5="unset"
                headingFlex="unset"
                headingDisplay="unset"
                headingMinWidth="unset"
                supportingTextAlignSelf="unset"
              />
              <div className={styles.blogPostCard}>
                <img
                  className={styles.imageIcon1}
                  loading="lazy"
                  alt=""
                  src="/image-41@2x.png"
                />
                <div className={styles.content1}>
                  <div className={styles.headingAndText}>
                    <div className={styles.author}>Sunday , 1 Jan 2023</div>
                    <div className={styles.headingAndIcon}>
                      <h2 className={styles.heading1}>PM mental models</h2>
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
                      Mental models are simple expressions of complex processes
                      or relationships.
                    </div>
                  </div>
                  <div className={styles.categories1}>
                    <div className={styles.badge}>
                      <div className={styles.badgeBase3}>
                        <div className={styles.categoryNames}>Product</div>
                      </div>
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.badgeBase1}>
                        <div className={styles.categoryNames}>Research</div>
                      </div>
                    </div>
                    <div className={styles.badge5}>
                      <div className={styles.badgeBase5}>
                        <div className={styles.categoryNames}>Frameworks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.blogPostCard7}>
              <div className={styles.author7}>Sunday , 1 Jan 2023</div>
              <div className={styles.headingAndIcon7}>
                <h1 className={styles.heading8}>
                  Grid system for better Design User Interface
                </h1>
              </div>
              <img
                className={styles.imageIcon7}
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
              <div className={styles.content8}>
                <div className={styles.text18}>
                  <div className={styles.placeholder}>
                    A grid system is a design tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.
                  </div>
                  <div className={styles.placeholder}>
                    If you’ve been to New York City and have walked the streets,
                    it is easy to figure out how to get from one place to
                    another because of the grid system that the city is built
                    on. Just as the predictability of a city grid helps locals
                    and tourists get around easily, so do webpage grids provide
                    a structure that guides users and designers alike. Because
                    of their consistent reference point, grids improve page
                    readability and scannability and allow people to quickly get
                    where they need to go.
                  </div>
                  <b className={styles.supportingText9}>
                    Definition: A grid is made up of columns, gutters, and
                    margins that provide a structure for the layout of elements
                    on a page.
                  </b>
                  <div className={styles.image}>
                    <img
                      className={styles.imageIcon8}
                      loading="lazy"
                      alt=""
                      src="/image-13@2x.png"
                    />
                    <div className={styles.supportingText10}>
                      Definition: A grid is made up of columns, gutters, and
                      margins that provide a structure for the layout of
                      elements on a page.
                    </div>
                  </div>
                  <div className={styles.placeholder}>
                    There are three common grid types used in websites and
                    interfaces: column grid, modular grid, and hierarchical
                    grid.
                  </div>
                  <div className={styles.placeholder}>
                    Column grid involves dividing a page into vertical columns.
                    UI elements and content are then aligned to these columns.
                  </div>
                  <div className={styles.placeholder}>
                    Modular grid extends the column grid further by adding rows
                    to it. This intersection of columns and rows make up modules
                    to which elements and content are aligned. Modular grids are
                    great for ecommerce and listing pages, as rows are
                    repeatable to accommodate browsing.
                  </div>
                  <div className={styles.placeholder}>
                    Hierarchical grid: Content is organized by importance using
                    columns, rows, and modules. The most important elements and
                    pieces of content take up the biggest pieces of the grid.
                  </div>
                  <b className={styles.supportingText15}>
                    Breaking Down the Grid
                  </b>
                  <div className={styles.placeholder}>
                    Regardless of the type of grid you are using, the grid is
                    made up of three elements: columns, gutters, and margins.
                  </div>
                  <div className={styles.placeholder}>
                    <b>Columns:</b>
                    <span className={styles.span}>{` `}</span>
                    <span>
                      Columns take up most of the real estate in a grid.
                      Elements and content are placed in columns. To adapt to
                      any screen size, column widths are generally defined with
                      percentages rather than fixed values and the number of
                      columns will vary. For example, a grid on a mobile device
                      might have 4 columns and a grid on a desktop might have 12
                      columns.
                    </span>
                  </div>
                  <div className={styles.placeholder}>
                    <b>Gutters:</b>
                    <span>
                      {" "}
                      The gutter is the space between columns that separates
                      elements and content from different columns. Gutter widths
                      are fixed values but can change based on different
                      breakpoints. For example, wider gutters are appropriate
                      for larger screens, whereas smaller gutters are
                      appropriate for smaller screens like mobile.
                    </span>
                  </div>
                  <div className={styles.image1}>
                    <img
                      className={styles.imageIcon9}
                      loading="lazy"
                      alt=""
                      src="/image-14@2x.png"
                    />
                    <div className={styles.supportingText19}>
                      Three elements make up any grid: (1) columns, (2) gutters,
                      and (3) margins.
                    </div>
                  </div>
                  <b className={styles.supportingText15}>
                    Examples of Grids in Use
                  </b>
                  <b className={styles.placeholder}>
                    Example 1: Hierarchical Grid
                  </b>
                  <div className={styles.placeholder}>
                    {`Our first example is from `}
                    <a
                      className={styles.theNewYorkTimes}
                      href="https://www.nytimes.com/"
                      target="_blank"
                    >
                      <span className={styles.theNewYork}>
                        The New York Times
                      </span>
                    </a>
                    . This screen utilizes a hierarchical grid to create a
                    newspaper-like reading experience. At desktop screen size,
                    two main columns make up the hierarchical grid. The most
                    important news story takes up the most space in the grid,
                    the left column, followed by secondary and tertiary stories,
                    which take up the smaller column and modules on the right.
                  </div>
                  <div className={styles.image2}>
                    <img
                      className={styles.imageIcon9}
                      loading="lazy"
                      alt=""
                      src="/image-15@2x.png"
                    />
                    <div className={styles.supportingText23}>
                      The New York Times uses a hierarchical grid to achieve its
                      newspaper-like reading experience. (We highlighted the
                      columns in yellow, the gutters in blue, and the margins in
                      purple.)
                    </div>
                  </div>
                  <b className={styles.placeholder}>Example 2: Column Grid</b>
                  <div className={styles.placeholder}>
                    {`Our second example is from `}
                    <a
                      className={styles.theNewYorkTimes}
                      href="https://ritual.com/"
                      target="_blank"
                    >
                      <span className={styles.theNewYork}>Ritual.com</span>
                    </a>
                    , a vitamin company. This design uses a column grid to
                    create an attractive visual experience. At this screen size,
                    four consistently sized columns make up the grid structure
                    and elements are aligned to and within these columns. The
                    gutters, the spaces in between the columns, are also
                    consistently sized and help the user visually separate the
                    different products. The margins are independently sized and
                    are the same between the left and right sides.
                  </div>
                  <div className={styles.image1}>
                    <img
                      className={styles.imageIcon9}
                      loading="lazy"
                      alt=""
                      src="/image-16@2x.png"
                    />
                    <div className={styles.supportingText23}>
                      Ritual’s four-column grid makes scanning products easy.
                      (We highlighted the columns in yellow, the gutters in
                      blue, and the margins in purple.)
                    </div>
                  </div>
                  <b className={styles.placeholder}>Example 3: Modular Grid</b>
                  <div className={styles.placeholder}>
                    {`Our third example is from `}
                    <a
                      className={styles.theNewYorkTimes}
                      href="https://www.behance.net/"
                      target="_blank"
                    >
                      <span className={styles.theNewYork}>Behance</span>
                    </a>
                    , a design library. The site’s design uses a modular grid to
                    create a pleasant browsing experience. At desktop size, rows
                    are made up of 4 consistently sized modules. Horizontal
                    gutters are slightly thicker than vertical gutters and the
                    margins are consistently sized on the left and right of the
                    design. Like in previous example, the gutters visually
                    separate each element.
                  </div>
                  <div className={styles.image2}>
                    <img
                      className={styles.imageIcon9}
                      loading="lazy"
                      alt=""
                      src="/image-17@2x.png"
                    />
                    <div className={styles.supportingText23}>
                      Behance’s design uses a modular grid, which allows users
                      to easily browse. (We highlighted the columns in yellow,
                      the gutters in blue, and the margins in purple.)
                    </div>
                  </div>
                  <b className={styles.placeholder}>
                    Example 4: Breaking the Grid
                  </b>
                  <div className={styles.placeholder}>
                    {`Our last example is `}
                    <a
                      className={styles.theNewYorkTimes}
                      href="https://material.io/design/material-studies/shrine.html#product-architecture"
                      target="_blank"
                    >
                      <span className={styles.theNewYork}>
                        Shrine from Google’s Material Studies
                      </span>
                    </a>
                    . This design uses a column grid, as we can see based on the
                    left navigation, which is 2 columns wide. Look closely and
                    you will see that some product images settle to the margins,
                    while others do not. Breaking the grid like this makes it
                    challenging to focus or quickly scan product images and
                    calls more attention to some products over others. It is
                    okay to break the grid every so often, as long as you have a
                    valid reason for it.
                  </div>
                  <div className={styles.image2}>
                    <img
                      className={styles.imageIcon9}
                      loading="lazy"
                      alt=""
                      src="/image-18@2x.png"
                    />
                    <div className={styles.supportingText23}>
                      Breaking the grid produces a chaotic browsing experience
                      for users. (We highlighted the columns in yellow, the
                      gutters in blue, and the margins in purple.)
                    </div>
                  </div>
                  <b className={styles.placeholder}>Benefits of the Grid</b>
                  <div className={styles.placeholder}>
                    <p className={styles.usingAGrid}>
                      Using a grid benefits both end users and the designers
                      alike:
                    </p>
                    <ul className={styles.designersCanQuicklyPutToge}>
                      <li className={styles.usersCanEasilyScanPredicta}>
                        Designers can quickly put together well-aligned
                        interfaces.
                      </li>
                      <li className={styles.usersCanEasilyScanPredicta}>
                        Users can easily scan predictable grid-based interfaces.
                      </li>
                      <li>
                        {`A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of `}
                        <a
                          className={styles.theNewYorkTimes}
                          href="https://www.nngroup.com/articles/responsive-web-design-definition/"
                          target="_blank"
                        >
                          <span className={styles.theNewYork}>
                            responsive web design
                          </span>
                        </a>
                        . Responsive design uses breakpoints to determine the
                        screen size threshold at which the layout should change.
                        For example, a desktop screen may have 12 grid columns,
                        which may be stacked on mobile so that the resulting
                        layout has only 4 columns.
                      </li>
                    </ul>
                  </div>
                  <div className={styles.image1}>
                    <img
                      className={styles.imageIcon9}
                      loading="lazy"
                      alt=""
                      src="/image-19@2x.png"
                    />
                    <div className={styles.supportingText23}>
                      At the mobile size, Behance’s one-column grid (left) was
                      reflowed into a four-column grid structure (right).
                    </div>
                  </div>
                  <div className={styles.placeholder}>
                    Even more importantly, the grid is not a throw-away concept.
                    It is used by both designers and developers alike. Be sure
                    to communicate with your developers the grid structure used
                    when creating the design, so they can implement it
                    accordingly.
                  </div>
                  <b className={styles.supportingText15}>
                    Choosing and Setting Up Your Grid
                  </b>
                  <div className={styles.placeholder}>
                    How you use and set up a grid is fundamental to creating
                    well thought out layouts and experiences for your user.
                  </div>
                  <div className={styles.placeholder}>
                    <b>{`Choose the right grid for your needs. `}</b>
                    <span>
                      Take time to think through what type of grid ­— column,
                      modular, or hierarchical — best suits your needs. A
                      hierarchical grid may be the best fit if one item on your
                      page will always be more important than the surrounding
                      elements. For example, hierarchical grids are great for
                      online news platforms. If the content you need to display
                      is highly variable, consider using a basic column or
                      modular grid, as these provide lots of flexibility when
                      designing. For example, elements and content can span
                      across multiple columns or modules or just one to fit
                      design needs.
                    </span>
                  </div>
                  <div className={styles.placeholder}>
                    <b>Spend time setting up your grid.</b>
                    <span>
                      {" "}
                      Once you have figured out what type of grid will work well
                      for your needs, start setting it up. Determine the number
                      of columns and the margin and gutter sizes relative to
                      your screen sizes. You will most likely want to prepare
                      for mobile, tablet, and desktop screens. A 12-column grid
                      at laptop or desktop size is generally flexible enough for
                      most design needs. The number of columns will decrease as
                      your device size decreases. Wireframing tools like Sketch
                      and Figma have quick and easy ways to set up and edit your
                      grid, even after you have started designing.
                    </span>
                  </div>
                  <div className={styles.image1}>
                    <img
                      className={styles.imageIcon9}
                      loading="lazy"
                      alt=""
                      src="/image-20@2x.png"
                    />
                    <div className={styles.supportingText41}>
                      Easily set the number of columns, the gutter size, and
                      margin size in Figma.
                    </div>
                  </div>
                  <div className={styles.placeholder}>
                    <b>Always place content within columns, not gutters.</b>
                    <span>
                      {" "}
                      The gutters should remain empty as you place elements on
                      the grid in order to clearly separate and align content
                      and elements.
                    </span>
                  </div>
                  <div className={styles.image1}>
                    <img
                      className={styles.imageIcon9}
                      loading="lazy"
                      alt=""
                      src="/image-211@2x.png"
                    />
                    <div className={styles.supportingText23}>
                      Content or elements should be placed within and across
                      columns, not gutters.
                    </div>
                  </div>
                  <div className={styles.placeholder}>
                    <b>Consider using an 8px grid system.</b>
                    <span>
                      {" "}
                      For most common devices, the screen size in pixels is a
                      multiple of 8. Keeping grid-component values at a multiple
                      of 8 will generally make it easier to scale and implement
                      a grid.
                    </span>
                  </div>
                  <b className={styles.supportingText15}>Conclusion</b>
                  <div className={styles.placeholder}>
                    Grids not only provide designers a structure on which to
                    base layouts, but they also improve readability and
                    scannability for end users. Use a good grid system that
                    easily adapts to various screen sizes.
                  </div>
                </div>
                <div className={styles.categories7}>
                  <div className={styles.badge}>
                    <div className={styles.badgeBase}>
                      <div className={styles.categoryNames}>Design</div>
                    </div>
                  </div>
                  <div className={styles.badge2}>
                    <div className={styles.badgeBase2}>
                      <div className={styles.categoryNames}>Interface</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.content9}>
                <div className={styles.headingAndSupportingText}>
                  <div className={styles.headingAndText}>
                    <div className={styles.subheading}>Newlatters</div>
                    <h1 className={styles.heading9}>Stories and interviews</h1>
                  </div>
                  <h3 className={styles.supportingText47}>
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
                          <div className={styles.content10}>
                            <img
                              className={styles.mailIcon}
                              alt=""
                              src="/mail.svg"
                            />
                            <div className={styles.placeholder}>
                              Enter your email
                            </div>
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
                        <span className={styles.theNewYork}>
                          privacy policy
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.button}>
                    <div className={styles.buttonBase}>
                      <div className={styles.buttonLabel}>Subscribe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a className={styles.yourName} onClick={onYourNameTextClick}>
            Your Name
          </a>
          <div className={styles.menu1}>
            <div className={styles.blog} onClick={onYourNameTextClick}>
              <a className={styles.blog1}>Blog</a>
            </div>
            <div className={styles.projects}>
              <a className={styles.blog1}>Projects</a>
            </div>
            <div className={styles.projects}>
              <a className={styles.blog1}>About</a>
            </div>
            <div className={styles.projects}>
              <a className={styles.blog1}>Newsletter</a>
            </div>
            <div className={styles.toggleMode}>
              <img
                className={styles.iconoutlinesun}
                loading="lazy"
                alt=""
                src="/iconoutlinesun1.svg"
              />
              <div
                className={styles.iconoutlinemoon}
                onClick={onIconoutlinemoonContainerClick}
              >
                <img
                  className={styles.moonIcon}
                  loading="lazy"
                  alt=""
                  src="/moon.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <b className={styles.theBlog}>THE BLOG</b>
        </div>
      </header>
    </div>
  );
};

export default BlogDetailBlog;
