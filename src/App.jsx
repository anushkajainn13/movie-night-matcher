import { useState } from "react"

const movies = [
  {
    title: "The Movie Night",
    year: "2024",
    rating: "8.2",
    runtime: "2h 14m",
    description:
      "A group of friends comes together for one unforgettable night, but choosing what to watch turns out to be harder than expected.",
  },
  {
    title: "Midnight Run",
    year: "2023",
    rating: "7.9",
    runtime: "1h 58m",
    description:
      "A thrilling journey begins when an ordinary night takes an unexpected turn.",
  },
  {
    title: "The Last Summer",
    year: "2022",
    rating: "8.0",
    runtime: "2h 05m",
    description:
      "Friends reunite for one final summer filled with memories, surprises, and new beginnings.",
  },
  {
    title: "Hidden World",
    year: "2024",
    rating: "8.4",
    runtime: "2h 21m",
    description:
      "A mysterious discovery leads a group of friends into a world they never knew existed.",
  },
  {
    title: "Parallel",
    year: "2023",
    rating: "8.1",
    runtime: "2h 10m",
    description:
      "Two strangers discover their lives may be connected in ways neither could have imagined.",
  },
  {
    title: "After Hours",
    year: "2021",
    rating: "7.8",
    runtime: "1h 52m",
    description:
      "One night. One city. One series of unexpected adventures.",
  },
  {
    title: "The Journey",
    year: "2024",
    rating: "8.3",
    runtime: "2h 18m",
    description:
      "A long-awaited trip becomes an unforgettable adventure for a group of friends.",
  },
  {
    title: "Echoes",
    year: "2022",
    rating: "7.7",
    runtime: "1h 49m",
    description:
      "A mysterious message forces a young woman to confront a forgotten part of her past.",
  },
  {
    title: "Beyond Tomorrow",
    year: "2023",
    rating: "8.5",
    runtime: "2h 25m",
    description:
      "A hopeful story about friendship, ambition, and the choices that shape our future.",
  },
  {
    title: "One More Night",
    year: "2024",
    rating: "8.2",
    runtime: "2h 02m",
    description:
      "A final night together becomes a celebration of friendship and everything that came before.",
  },
]

function App() {
  const [screen, setScreen] = useState("home")
  const [currentMovie, setCurrentMovie] = useState(0)
  const [votes, setVotes] = useState([])

  function handleVote(vote) {
    const movie = movies[currentMovie]

    setVotes([
      ...votes,
      {
        movie: movie.title,
        vote: vote,
      },
    ])

    if (currentMovie === movies.length - 1) {
      setScreen("results")
    } else {
      setCurrentMovie(currentMovie + 1)
    }
  }

  if (screen === "create") {
    return (
      <main className="page">
        <div className="card">
          <button
            className="back-button"
            onClick={() => setScreen("home")}
          >
            ← Back
          </button>

          <div className="logo">🎬</div>

          <h1>Create a Room</h1>

          <p className="description">
            Create a room and invite your friends to find a movie together.
          </p>

          <input
            className="text-input"
            type="text"
            placeholder="Enter your nickname"
          />

          <button
            className="primary-button full-width"
            onClick={() => setScreen("lobby")}
          >
            Create Room
          </button>
        </div>
      </main>
    )
  }

  if (screen === "join") {
    return (
      <main className="page">
        <div className="card">
          <button
            className="back-button"
            onClick={() => setScreen("home")}
          >
            ← Back
          </button>

          <div className="logo">🎬</div>

          <h1>Join a Room</h1>

          <p className="description">
            Enter the room code your friend shared with you.
          </p>

          <input
            className="text-input"
            type="text"
            placeholder="Room code"
          />

          <input
            className="text-input"
            type="text"
            placeholder="Enter your nickname"
          />

          <button className="primary-button full-width">
            Join Room
          </button>
        </div>
      </main>
    )
  }

  if (screen === "lobby") {
    return (
      <main className="page">
        <div className="card lobby-card">
          <div className="logo">🎬</div>

          <p className="eyebrow">MOVIE NIGHT</p>

          <h1>You're in!</h1>

          <div className="room-code">
            MOVIE-482
          </div>

          <p className="description">
            Share this code with your friends so they can join.
          </p>

          <div className="members">
            <div className="member">
              <span className="avatar">Y</span>
              <span>You</span>
              <span className="host-badge">Host</span>
            </div>

            <div className="member">
              <span className="avatar">A</span>
              <span>Alex</span>
            </div>

            <div className="member">
              <span className="avatar">S</span>
              <span>Sam</span>
            </div>
          </div>

          <p className="member-count">
            3 people are ready
          </p>

          <button
            className="primary-button full-width"
            onClick={() => setScreen("voting")}
          >
            Start Voting
          </button>

          <button
            className="back-button"
            onClick={() => setScreen("home")}
          >
            Leave Room
          </button>
        </div>
      </main>
    )
  }

  if (screen === "voting") {
    const movie = movies[currentMovie]

    return (
      <main className="voting-page">
        <div className="voting-header">
          <div>
            <p className="eyebrow">MOVIE NIGHT</p>
            <h2>Pick your movies</h2>
          </div>

          <div className="progress">
            {currentMovie + 1} / {movies.length}
          </div>
        </div>

        <div className="movie-card">
          <div className="movie-poster">
            🎬
          </div>

          <div className="movie-info">
            <p className="movie-year">{movie.year}</p>

            <h1>{movie.title}</h1>

            <div className="movie-meta">
              ⭐ {movie.rating} &nbsp; · &nbsp; {movie.runtime}
            </div>

            <p className="movie-description">
              {movie.description}
            </p>
          </div>
        </div>

        <div className="vote-actions">
          <button
            className="pass-button"
            onClick={() => handleVote("pass")}
          >
            ✕
            <span>Pass</span>
          </button>

          <button
            className="like-button"
            onClick={() => handleVote("like")}
          >
            ♥
            <span>Like</span>
          </button>
        </div>
      </main>
    )
  }

  if (screen === "results") {
    const likedMovies = votes.filter(
      (vote) => vote.vote === "like"
    )

    return (
      <main className="page">
        <div className="card">
          <div className="logo">🍿</div>

          <p className="eyebrow">MOVIE NIGHT</p>

          <h1>You're done!</h1>

          <p className="description">
            You liked {likedMovies.length} out of {movies.length} movies.
          </p>

          <div className="results-list">
            {likedMovies.length > 0 ? (
              likedMovies.map((vote) => (
                <div className="result-item" key={vote.movie}>
                  ❤️ {vote.movie}
                </div>
              ))
            ) : (
              <p className="description">
                You didn't like any movies this round.
              </p>
            )}
          </div>

          <button
            className="primary-button full-width"
            onClick={() => {
              setCurrentMovie(0)
              setVotes([])
              setScreen("home")
            }}
          >
            Back to Home
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="home">
      <div className="hero">
        <div className="logo">🎬</div>

        <p className="eyebrow">MOVIE NIGHT, BUT BETTER</p>

        <h1>
          Find a movie
          <br />
          <span>everyone loves.</span>
        </h1>

        <p className="description">
          Create a room, invite your friends, and vote together.
          No endless scrolling. Just movies everyone wants to watch.
        </p>

        <div className="home-actions">
          <button
            className="primary-button"
            onClick={() => setScreen("create")}
          >
            Create a Room
          </button>

          <button
            className="secondary-button"
            onClick={() => setScreen("join")}
          >
            Join a Room
          </button>
        </div>

        <p className="hero-note">
          No account required · Free to use
        </p>

        <section className="how-it-works">
          <h2>How it works</h2>

          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Create a room</h3>
              <p>Start a room and invite your friends.</p>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <h3>Everyone votes</h3>
              <p>Like the movies you'd actually watch.</p>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <h3>Find your match</h3>
              <p>See the movies everyone liked.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App