import styles from "./sectionContainer.module.scss";

interface Props {
  children: React.ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return <div className={styles.section_container}>{children}</div>;
};

export default SectionContainer;
