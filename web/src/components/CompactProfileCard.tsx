import { useState } from "react";

interface CompactProfileCardProps {
  name: string;
  role: string;
  location: string;
  bio: string;
  imageUrl: string;
  projects: number;
  earnings: string;
  rating: number;
  onHireClick?: () => void;
  onMessageClick?: () => void;
}

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "#F5A623" : "#F5A623"} // Always colored, just shape matters
    stroke="none"
    style={{ marginRight: "4px" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function CompactProfileCard({
  name,
  role,
  location,
  bio,
  imageUrl,
  projects,
  earnings,
  rating,
  onHireClick,
  onMessageClick,
}: CompactProfileCardProps) {
  const [isHireHovered, setIsHireHovered] = useState(false);
  const [isMessageHovered, setIsMessageHovered] = useState(false);

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={imageUrl} alt={name} style={styles.image} />
        <div style={styles.headerInfo}>
          <h2 style={styles.name}>{name}</h2>
          <p style={styles.roleLocation}>
            {role} • {location}
          </p>
        </div>
      </div>

      <p style={styles.bio}>{bio}</p>

      <div style={styles.stats}>
        <div style={styles.statItem}>
          <span style={styles.statLabel}>Projects</span>
          <span style={styles.statValue}>{projects}</span>
        </div>
        <div style={styles.divider} />
        <div style={styles.statItem}>
          <span style={styles.statLabel}>Earnings</span>
          <span style={styles.statValue}>{earnings}</span>
        </div>
        <div style={styles.divider} />
        <div style={styles.statItem}>
          <span style={styles.statLabel}>Rating</span>
          <div style={styles.ratingValue}>
            <StarIcon filled={true} />
            <span>{rating}</span>
          </div>
        </div>
      </div>

      <div style={styles.buttons}>
        <button
          style={{
            ...styles.hireButton,
            ...(isHireHovered ? styles.hireButtonHover : {}),
          }}
          onClick={onHireClick}
          onMouseEnter={() => setIsHireHovered(true)}
          onMouseLeave={() => setIsHireHovered(false)}
        >
          Hire now
        </button>
        <button
          style={{
            ...styles.messageButton,
            ...(isMessageHovered ? styles.messageButtonHover : {}),
          }}
          onClick={onMessageClick}
          onMouseEnter={() => setIsMessageHovered(true)}
          onMouseLeave={() => setIsMessageHovered(false)}
        >
          Message
        </button>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: "100%",
    maxWidth: "420px",
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    boxSizing: "border-box",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "20px",
  },
  image: {
    width: "64px",
    height: "64px",
    borderRadius: "16px",
    objectFit: "cover",
  },
  headerInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  name: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#1a1a1a",
    margin: 0,
  },
  roleLocation: {
    fontSize: "15px",
    color: "#4a4a4a",
    margin: 0,
    fontWeight: 400,
  },
  bio: {
    fontSize: "15px",
    lineHeight: 1.5,
    color: "#4a4a4a",
    margin: "0 0 32px 0",
  },
  stats: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
    padding: "0 10px",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    flex: 1,
  },
  divider: {
    width: "1px",
    height: "40px",
    backgroundColor: "#e5e5e5",
  },
  statLabel: {
    fontSize: "15px",
    color: "#4a4a4a",
  },
  statValue: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#1a1a1a",
  },
  ratingValue: {
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: 700,
    color: "#1a1a1a",
  },
  buttons: {
    display: "flex",
    gap: "12px",
  },
  hireButton: {
    flex: 1,
    padding: "16px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#111111",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  hireButtonHover: {
    backgroundColor: "#333333",
  },
  messageButton: {
    flex: 1,
    padding: "16px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#111111",
    backgroundColor: "#f5f5f5",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  messageButtonHover: {
    backgroundColor: "#e5e5e5",
  },
};
