import House from "../components/House";

export default function Home() {
  return (
    <main className="home">

      {/* <img
        className="sky"
        src="/sky.png"
      /> */}

      <div className="intro">
        <h1>Abirami Patchaiyappan</h1>
        <p>Welcome to my portfolio! Click a room to explore.</p>
      </div>

      <House />

    </main>
  );
}