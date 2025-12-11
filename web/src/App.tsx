import { useEffect, useState } from "react";
import ProfileCard from "./components/ProfileCard";
import CompactProfileCard from "./components/CompactProfileCard";

import { AnimatePresence } from "motion/react";


function App() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && expanded) {
        setExpanded(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [expanded]);

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
              name="Shreyansh Gupta"
              role="Software Engineer"
              location="India"
              bio={
                <>
                  High-agency mobile design engineer looking for <strong>new roles</strong>, preferably ones brave enough to handle someone who ships faster than their roadmap can blink.
                </>
              }
              imageUrl="https://avatars.githubusercontent.com/u/91644557?v=4"
              projects={72}
              earnings="$36k+"
              rating={4.5}
            />
          </div>
        ) : (
          <div style={{ cursor: "pointer" }} onClick={() => setExpanded(true)}>
            <CompactProfileCard
              name="Shreyansh Gupta"
              role="Software Engineer"
              location="India"
              bio={
                <>
                  High-agency mobile design engineer looking for <strong>new roles</strong>, preferably ones brave enough to handle someone who ships faster than their roadmap can blink.
                </>
              }
              imageUrl="https://avatars.githubusercontent.com/u/91644557?v=4"
              projects={72}
              earnings="$36k+"
              rating={4.5}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
