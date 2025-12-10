interface ProfileCardProps {
  name: string;
  role: string;
  location: string;
  bio: string;
  imageUrl: string;
  projects: number;
  earnings: string;
  rating: number;
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

// Show a single star icon with the numeric rating value

export default function ProfileCard({
  name,
  role,
  location,
  bio,
  imageUrl,
  projects,
  earnings,
  rating,
}: ProfileCardProps) {
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
            <div style={styles.ratingValue}>
              <StarIcon filled={true} />
              <span>{rating}</span>
            </div>
          </div>
        </div>

        <div style={styles.buttons}>
          <button style={styles.hireButton}>Hire now</button>
          <button style={styles.messageButton}>Message</button>
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
  ratingValue: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "16px",
    fontWeight: 700,
    color: "#1a1a1a",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
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
};
