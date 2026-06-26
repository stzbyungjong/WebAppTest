import type { Profile } from "@/types/profile";
import ProfileCard from "@/components/ProfileCard";
import profileData from "@/data/profile.json";
import styles from "./page.module.css";

// 프로필 데이터는 data/profile.json 에서 읽어온다.
// 사용자는 코드 수정 없이 그 파일만 편집하면 된다.
const profile = profileData as Profile;

export default function Home() {
  return (
    <main className={styles.main}>
      <ProfileCard profile={profile} />
    </main>
  );
}
