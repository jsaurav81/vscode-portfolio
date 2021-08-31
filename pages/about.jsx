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
          Hello, I’m Saurav Jha, a frontend web developer based in Jamshedpur, India with a history of working in the financial services industry. 
          I have rich experience in ReactJs, AngularJs, Typescript to begin with. 
          I'm passionate about Javascript and UI frameworks. 
          In summary I'm a UI Developer skilled in the following
        </p>
        <ul className={styles.skillList}>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>HTML5</span>
          </li>
          <li>
            <span>SCSS</span>
          </li>
          <li>
            <span>ReactJS</span>
          </li>
          <li>
            <span>Redux</span>
          </li>
          <li>
            <span>AngularJs</span>
          </li>
          <li>
            <span>VueJs</span>
          </li>
          <li>
            <span>GraphQL</span>
          </li>
          <li>
            <span>Rest Api</span>
          </li>
          <li>
            <span>Nextjs</span>
          </li>
          <li>
            <span>Git</span>
          </li>
          <li>
            <span>TypeScript</span>
          </li>
          <li>
            <span>GatsbyJs</span>
          </li>
          <li>
            <span>Tailwind CSS</span>
          </li>
          <li>
            <span>Jest</span>
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
