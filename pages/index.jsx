import Image from "next/image";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/HomePage.module.css";
import {
  faGithubAlt,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  const getMyImage = () => {
    let random  = Math.floor(Math.random() * 3) + 1;
    return `/me.jpg`
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4 className={styles.welcome}>Hello, I'm</h4>
        <h1 className={styles.title}>Saurav Jha</h1>
        <h3 className={styles.subtitle}>Frontend Web Developer</h3>
        <ul className={styles.contacts}>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:jsaurav221@gmail.com">
            jsaurav221@gmail.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faMapMarker} />
            <a
              target="blank"
              href="https://www.google.com/maps/place/Jamshedpur,+Jharkhand/@22.7839673,86.0356849,11z/data=!3m1!4b1!4m5!3m4!1s0x39f5e31989f0e2b5:0xeeec8e81ce9b344!8m2!3d22.8045665!4d86.2028754"
            >
              Jamshedpur, India
            </a>{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <a href="tel:+918789364355">+918789364355</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithubAlt} />
            <a href="https://github.com/jsaurav81">Github</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/saurav-jha-887b3399/">
              Linkedin
            </a>
          </li>
          {/* <li>
            <FontAwesomeIcon icon={faTwitter} />
            <a href="https://twitter.com/Aiibrahim3">Twitter</a>
          </li> */}
        </ul>
      </div>
      <div className={styles.right}>
        <div className={styles.picture_boader}>
          <Image
            className={styles.picture}
            src="/me.jpg"
            // src={getMyImage}
            width={300}
            height={290}
            alt="saurav's picture"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
