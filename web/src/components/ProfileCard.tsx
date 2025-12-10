import { useState } from "react";

interface ProfileCardProps {
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

const StarIcon = ({ filled, half }: { filled: boolean; half?: boolean }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "#F5A623" : "none"}
    stroke="#F5A623"
    strokeWidth="2"
  >
    {half ? (
      <>
        <defs>
          <linearGradient id="halfFill">
            <stop offset="50%" stopColor="#F5A623" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          fill="url(#halfFill)"
        />
      </>
    ) : (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    )}
  </svg>
);

const RatingStars = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<StarIcon key={i} filled={true} />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<StarIcon key={i} filled={false} half={true} />);
    } else {
      stars.push(<StarIcon key={i} filled={false} />);
    }
  }

  return <div style={{ display: "flex", gap: "2px" }}>{stars}</div>;
};

export default function ProfileCard({
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
}: ProfileCardProps) {
  const [isHireHovered, setIsHireHovered] = useState(false);
  const [isMessageHovered, setIsMessageHovered] = useState(false);

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt={name} style={styles.image} />
      </div>

      <div style={styles.content}>
        <h2 style={styles.name}>{name}</h2>

        <div style={styles.roleLocation}>
          <span style={styles.role}>{role}</span>
          <span style={styles.location}>{location}</span>
        </div>

        <p style={styles.bio}>{bio}</p>

        <div style={styles.stats}>
          <div style={styles.statRow}>
            <span style={styles.statLabel}>Projects</span>
            <span style={styles.statValue}>{projects}</span>
          </div>
          <div style={styles.statRow}>
            <span style={styles.statLabel}>Earnings</span>
            <span style={styles.statValue}>{earnings}</span>
          </div>
          <div style={styles.statRow}>
            <span style={styles.statLabel}>Rating</span>
            <RatingStars rating={rating} />
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
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: "100%",
    maxWidth: "380px",
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  imageContainer: {
    width: "100%",
    height: "330px",
    padding: "16px 16px 0 16px",
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
    display: "block",
  },
  content: {
    padding: "24px",
  },
  name: {
    fontSize: "28px",
    fontWeight: 700,
    color: "#1a1a1a",
    margin: "0 0 8px 0",
    textAlign: "center",
  },
  roleLocation: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  role: {
    fontSize: "15px",
    fontWeight: 500,
    color: "#1a1a1a",
  },
  location: {
    fontSize: "15px",
    fontWeight: 500,
    color: "#1a1a1a",
  },
  bio: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#666666",
    textAlign: "center",
    margin: "0 0 24px 0",
  },
  stats: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "24px",
  },
  statRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statLabel: {
    fontSize: "16px",
    color: "#666666",
  },
  statValue: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#1a1a1a",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  hireButton: {
    width: "100%",
    padding: "16px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#ffffff",
    backgroundColor: "#1a1a1a",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  hireButtonHover: {
    backgroundColor: "#333333",
  },
  messageButton: {
    width: "100%",
    padding: "16px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#1a1a1a",
    backgroundColor: "#ffffff",
    border: "2px solid #1a1a1a",
    borderRadius: "50px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  messageButtonHover: {
    backgroundColor: "#f5f5f5",
  },
};
