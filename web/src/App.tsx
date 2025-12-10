import { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import CompactProfileCard from "./components/CompactProfileCard";

import { AnimatePresence } from "motion/react";


function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={expanded ? () => setExpanded(false) : undefined}
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e5e5e5",
        padding: "40px",
      }}
    >
      <AnimatePresence>
        {expanded ? (
          <div onClick={(e) => e.stopPropagation()}>
            <ProfileCard
              name="Natasha Romanoff"
              role="Brand Designer"
              location="London"
              bio="I'm a brand designer who blends sharp strategy with bold creativity to craft identities that leave lasting impressions. With a keen eye for detail and a knack for storytelling"
              imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
              projects={50}
              earnings="$35k+"
              rating={4.5}
            />
          </div>
        ) : (
          <div style={{ cursor: "pointer" }} onClick={() => setExpanded(true)}>
            <CompactProfileCard
              name="Natasha Romanoff"
              role="Brand Designer"
              location="London"
              bio="I'm a brand designer who blends sharp strategy with bold creativity to craft identities that leave lasting impressions."
              imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
              projects={50}
              earnings="$35k+"
              rating={4.5}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
