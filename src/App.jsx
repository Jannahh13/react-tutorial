import "./App.css";

function Profile({ name, image, profession }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2>{name}</h2>
      <p>{profession}</p>
    </div>
  );
}

export default function App() {
  const profiles = [
    {
      name: "Katherine Johnson",
      image: "https://i.imgur.com/MK3eW3Am.jpg",
      profession: "Mathematician & Scientist"
    },
    {
      name: "Ada Lovelace",
      image: "https://i.imgur.com/1bX5QH6.jpg",
      profession: "Mathematician & Programmer"
    },
    {
      name: "Marie Curie",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/320px-Marie_Curie_c._1920s.jpg",
      profession: "Physicist & Chemist"
    },
    {
      name: "Rosalind Franklin",
      image: "https://cdn.britannica.com/30/99730-050-E68F62FF/Rosalind-Franklin.jpg",
      profession: "Chemist & DNA Researcher"
    }
  ];

  return (
    <div>
      <h1>Famous Profiles</h1>
      <div className="profile-grid">
        {profiles.map(profile => (
          <Profile
            key={profile.name}
            name={profile.name}
            image={profile.image}
            profession={profile.profession}
          />
        ))}
      </div>
    </div>
  );
}
