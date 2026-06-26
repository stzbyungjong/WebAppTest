import type { FieldsSection } from "@/types/profile";
import styles from "./Section.module.css";

export default function FieldsSectionView({ section }: { section: FieldsSection }) {
  return (
    <dl className={styles.fields}>
      {section.items.map((item, i) => (
        <div key={i} className={styles.fieldRow}>
          <dt className={styles.fieldLabel}>{item.label}</dt>
          <dd className={styles.fieldValue}>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
