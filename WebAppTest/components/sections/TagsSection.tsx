import type { TagsSection } from "@/types/profile";
import styles from "./Section.module.css";

export default function TagsSectionView({ section }: { section: TagsSection }) {
  return (
    <ul className={styles.tags}>
      {section.items.map((tag, i) => (
        <li key={i} className={styles.tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
