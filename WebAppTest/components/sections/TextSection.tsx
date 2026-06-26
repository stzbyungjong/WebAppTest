import type { TextSection } from "@/types/profile";
import styles from "./Section.module.css";

export default function TextSectionView({ section }: { section: TextSection }) {
  return <p className={styles.text}>{section.body}</p>;
}
