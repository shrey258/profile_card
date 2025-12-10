import { motion, AnimatePresence } from "motion/react";

interface CompactProfileCardProps {
  name: string;
  role: string;
  location: string;
  bio: string;
  imageUrl: string;
  projects: number;
  earnings: string;
  rating: number;
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
}: CompactProfileCardProps) {
  return (
    <AnimatePresence>
      <motion.div style={styles.card} layoutId="card">
        <div style={styles.header}>
          <motion.div style={styles.imageWrapper} layoutId="imageContainer">
            <motion.img
              src={imageUrl}
              alt={name}
              style={styles.image}
              layoutId="image"
            />
          </motion.div>

          <motion.div style={styles.headerInfo} layoutId="headerInfo">
            <motion.h2 style={styles.name} layoutId="name">
              {name}
            </motion.h2>
            <motion.p style={styles.roleLocation} layoutId="roleLocation">
              {role} • {location}
            </motion.p>
          </motion.div>
        </div>

        <motion.p style={styles.bio} layoutId="bio">
          {bio}
        </motion.p>

        <div style={styles.stats}>
          <motion.div style={styles.statItem} layoutId="projectsContainer">
            <motion.span style={styles.statLabel} layoutId="projectsLabel">
              Projects
            </motion.span>
            <motion.span style={styles.statValue} layoutId="projectsValue">
              {projects}
            </motion.span>
          </motion.div>

          <motion.div
            style={styles.divider}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div style={styles.statItem} layoutId="earningsContainer">
            <motion.span style={styles.statLabel} layoutId="earningsLabel">
              Earnings
            </motion.span>
            <motion.span style={styles.statValue} layoutId="earningsValue">
              {earnings}
            </motion.span>
          </motion.div>

          <motion.div
            style={styles.divider}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div style={styles.statItem} layoutId="ratingContainer">
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
          <motion.button style={styles.hireButton} layoutId="hireButton">
            Hire now
          </motion.button>
          <motion.button style={styles.messageButton} layoutId="messageButton">
            Message
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
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
  imageWrapper: {
    width: "64px",
    height: "64px",
    display: "flex",
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
