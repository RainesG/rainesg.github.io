import styles from "./footer.module.scss";

const baseClass = `footer`;

const Footer = () => {
  return (
    <a
      href="https://beian.miit.gov.cn/#/Integrated/index"
      className={styles[baseClass]}
    >
      浙ICP备2020041106号-1
    </a>
  );
};

export default Footer;
