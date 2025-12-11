import { motion } from "motion/react";
import ActionButton from "./ui/ActionButton";

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
    <motion.div style={styles.card} layoutId="card">
      <motion.div style={styles.imageContainer} layoutId="imageContainer">
        <motion.img
          src={imageUrl}
          alt={name}
          style={styles.image}
          layoutId="image"
        />
      </motion.div>

      <div style={styles.content}>
        <motion.div style={styles.headerInfo} layoutId="headerInfo">
          <motion.h2 style={styles.name} layoutId="name">
            {name}
          </motion.h2>

          <motion.p style={styles.roleLocation} layoutId="roleLocation">
            {role} • {location}
          </motion.p>
        </motion.div>

        <motion.p style={styles.bio} layoutId="bio">
          {bio}
        </motion.p>

        <div style={styles.stats}>
          <motion.div style={styles.statRow} layoutId="projectsContainer">
            <motion.span style={styles.statLabel} layoutId="projectsLabel">
              Projects
            </motion.span>
            <motion.span style={styles.statValue} layoutId="projectsValue">
              {projects}
            </motion.span>
          </motion.div>

          <motion.div style={styles.statRow} layoutId="earningsContainer">
            <motion.span style={styles.statLabel} layoutId="earningsLabel">
              Earnings
            </motion.span>
            <motion.span style={styles.statValue} layoutId="earningsValue">
              {earnings}
            </motion.span>
          </motion.div>

          <motion.div style={styles.statRow} layoutId="ratingContainer">
            <motion.span style={styles.statLabel} layoutId="ratingLabel">
              Rating
            </motion.span>
            <motion.div style={styles.ratingValue} layoutId="ratingValue">
              <StarIcon filled={true} />
              <span>{rating}</span>
            </motion.div>
          </motion.div>
        </div>

        <div style={styles.buttons}>
          <ActionButton label="Hire now" variant="primary" layoutId="hireButton" style={{ width: "100%" }} />
          <ActionButton label="Message" variant="secondary" layoutId="messageButton" style={{ width: "100%" }} />
        </div>
      </div>
    </motion.div>
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
    margin: 0,
    textAlign: "center",
  },
  roleLocation: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "16px",
    fontSize: "15px",
    color: "#4a4a4a",
    fontWeight: 400,
  },
  headerInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2px",
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
