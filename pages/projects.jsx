import React from "react";
import Carousel from "react-grid-carousel";
import {
  faArrowRight,
  faArrowLeft,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/ProjectPage.module.css";
import ImgsViewer from "react-images-viewer";
import {
  faGithub,
  faGooglePay,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const projects = [
  {
    name: "Fourcard challenge",
    category: "Website",
    description:
      " Built this interactive, full responsive site in a frontend-mentor challenge",
    pictures: [
      { src: "/projects/fourcard_0.jpg" },
      { src: "/projects/fourcard_1.jpg" },
      { src: "/projects/fourcard_2.jpg" },
    ],
    // download_link:
    //   "https://mega.nz/file/yLoWQS6R#Qtj_IgsgaB3uWcaiytx_KHgq3k8GGjmd5_PFRVT2Cbk",
    github_repo: "https://github.com/jsaurav81/four-card-challenge",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
    ],
  },

  {
    name: "Bulu 2.0",
    category: "Website",
    description:
      "Bulu 2.0 is an online database of films, television programs, and online shows where you can choose among latest, trending and different genres",
    pictures: [
      { src: "/projects/bulu_2.PNG" },
      { src: "/projects/bulu_1.PNG" },
      { src: "/projects/bulu_0.PNG" },
    ],
    live_link: "https://bulu-seven.vercel.app/",
    github_repo: "https://github.com/jsaurav81/bulu",
    stack: [
      "NextJs",
      "JavaScript",
      "Rest Api",
      "HTML5",
      "Tailwind css",
      "Git",
    ],
  },
  {
    name: "Signup Form Mentor Challenges",
    category: "Web App",
    description:
      "Built this interactive, full responsive webpage as a part of frontend-mentor challenge",
    pictures: [
      { src: "/projects/signup_0.jpg" },
      { src: "/projects/signup_1.jpg" },
      { src: "/projects/signup_2.jpg" },
    ],
    github_repo: "https://github.com/jsaurav81/signup-form-challenge",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
    ],
  },
  {
    name: "Chuck Norris Facts Generator",
    category: "Website",
    description:
      "A fun website to generate satirical factoids about the american actor chuck norris, popular in meme culture",
    pictures: [
      { src: "/projects/chuck_0.PNG" },
      { src: "/projects/chuck_2.PNG" },
      { src: "/projects/chuck_1.PNG" },
    ],
    github_repo: "https://github.com/jsaurav81/Chuck-Norris-Jokes-Generator",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Git",
    ],
  },
];

const ProjectsPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setisOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className={styles.container}>
      <span>{}</span>
      <Carousel
        cols={1}
        rows={1}
        gap={1}
        showDots
        mobileBreakpoint={670}
        containerClassName={styles.carousel}
        arrowRight={
          <FontAwesomeIcon
            icon={faArrowRight}
            className={styles.icon}
            onClick={() => {
              setCurrentIndex(currentIndex + 1);
            }}
          />
        }
        arrowLeft={
          <FontAwesomeIcon
            icon={faArrowLeft}
            className={styles.icon}
            onClick={() => {
              setCurrentIndex(currentIndex - 1);
            }}
          />
        }
      >
        {projects.map((item, key) => (
          <Carousel.Item key={key}>
            <div className={styles.card}>
              <div className={styles.cardHead}>
                <p>
                  <strong className={styles.label}>Name:</strong> {item.name}
                </p>
                <p>
                  <strong className={styles.label}>Category:</strong>{" "}
                  {item.category}
                </p>
                <summary>
                  <strong className={styles.label}>Description:</strong>{" "}
                  {item.description}
                </summary>
                <p className={styles.label}>Technology Stack:</p>
                <ul className={styles.stackContainer}>
                  {item.stack.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                <div className={styles.urls}>
                  {item.live_link && (
                    <p>
                      <a href={item.live_link} target="blank">
                        <FontAwesomeIcon icon={faLink} /> Preview
                      </a>
                    </p>
                  )}
                  {item.download_link && (
                    <p>
                      <a href={item.download_link} target="blank">
                        <FontAwesomeIcon icon={faGooglePlay} /> Download App
                      </a>
                    </p>
                  )}
                  {item.github_repo && (
                    <p>
                      <a href={item.github_repo} target="blank">
                        <FontAwesomeIcon icon={faGithub} /> Github
                      </a>
                    </p>
                  )}
                </div>
                {item.creds && (
                  <div>
                    <label className={styles.label}>{item.creds.desc}</label>
                    <p>
                      <strong>Username: {item.creds.username}</strong>
                    </p>
                    <p>
                      <strong>Username: {item.creds.password}</strong>
                    </p>
                  </div>
                )}
              </div>
              <div className={styles.cardImageContainer}>
                {item.pictures.map((item, index) => (
                  <img
                    src={item.src}
                    className={styles.cardImage}
                    onClick={() => {
                      setCurrentImage(index);
                      setisOpen(true);
                    }}
                  />
                ))}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <ImgsViewer
        imgs={projects[currentIndex].pictures}
        currImg={currentImage}
        isOpen={isOpen}
        onClickPrev={() => setCurrentImage(currentImage - 1)}
        onClickNext={() => setCurrentImage(currentImage + 1)}
        onClose={() => {
          setCurrentImage(0);
          setisOpen(false);
        }}
      />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Projects" },
  };
}

export default ProjectsPage;
