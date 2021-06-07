import Image from "next/image";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightScreen}>
        <Image
          className={styles.picture}
          src="/code.png"
          width={450}
          height={280}
          alt="Code Avatar"
        />
      </div>
      <div className={styles.leftScreen}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.about}>
          Hello, I’m Abdulrasheed, a mobile and web developer based in Yola,
          Nigeria. I have rich experience in building web and cross plartform
          mobile applications. In summary I'm a Full Stack Developer skilled in
          the following
        </p>
        <ul className={styles.skillList}>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>Python</span>
          </li>
          <li>
            <span>Django</span>
          </li>
          <li>
            <span>ReactJS</span>
          </li>
          <li>
            <span>React Native</span>
          </li>
          <li>
            <span>Python</span>
          </li>
        </ul>
        <a className={styles.resumeButton} href="#">
          Download Resume <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
