import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        padding: "20px",
      }}
    >
      <ProfileCard
        name="Natasha Romanoff"
        role="Brand Designer"
        location="London"
        bio="I'm a brand designer who blends sharp strategy with bold creativity to craft identities that leave lasting impressions. With a keen eye for detail and a knack for storytelling"
        imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
        projects={50}
        earnings="$35k+"
        rating={4.5}
        onHireClick={() => alert("Hire clicked!")}
        onMessageClick={() => alert("Message clicked!")}
      />
    </div>
  );
}

export default App;
