import Image from "next/image";
import styles from "./ProfileAvatar.module.css";

// 이미지가 있으면 표시, 없으면 이름 첫 글자로 기본 아바타 생성.
// next/image 는 존재하지 않는 파일이면 런타임 404 가 나므로,
// imagePath 가 비어있을 때만 fallback 을 쓰는 방식으로 단순화한다.
export default function ProfileAvatar({
  imagePath,
  name,
}: {
  imagePath?: string;
  name: string;
}) {
  if (imagePath) {
    return (
      <div className={styles.avatar}>
        <Image
          src={imagePath}
          alt={`${name} 프로필 이미지`}
          fill
          sizes="160px"
          className={styles.image}
          priority
        />
      </div>
    );
  }

  const initial = name.trim().charAt(0) || "?";
  return (
    <div className={`${styles.avatar} ${styles.fallback}`} aria-label={`${name} 기본 아바타`}>
      {initial}
    </div>
  );
}
