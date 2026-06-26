import type { Profile } from "@/types/profile";
import { renderSection } from "./sections/registry";
import ProfileAvatar from "./ProfileAvatar";
import styles from "./ProfileCard.module.css";

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <ProfileAvatar imagePath={profile.imagePath} name={profile.name} />
        <div className={styles.heading}>
          <h1 className={styles.name}>{profile.name}</h1>
          {profile.headline && <p className={styles.headline}>{profile.headline}</p>}
        </div>
      </header>

      <div className={styles.sections}>
        {profile.sections.map((section, i) => {
          const content = renderSection(section);
          if (content === null) return null;
          return (
            <section key={i} className={styles.section}>
              {section.title && <h2 className={styles.sectionTitle}>{section.title}</h2>}
              {content}
            </section>
          );
        })}
      </div>
    </article>
  );
}
