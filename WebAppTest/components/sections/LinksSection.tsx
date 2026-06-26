import type { LinksSection } from "@/types/profile";
import styles from "./Section.module.css";

export default function LinksSectionView({ section }: { section: LinksSection }) {
  return (
    <ul className={styles.links}>
      {section.items.map((item, i) => (
        <li key={i}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
