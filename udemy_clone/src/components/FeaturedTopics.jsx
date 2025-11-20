import "./FeaturedTopics.css";

export default function FeaturedTopics() {
  const topics = {
    Development: ["Python", "React", "Web Development"],
    Business: ["Communication", "Finance"],
    Design: ["Photoshop", "Figma"]
  };

  return (
    <div className="topics-section">
      <h2>Featured topics by category</h2>

      <div className="topics-grid">
        {Object.keys(topics).map(cat => (
          <div key={cat} className="topic-card">
            <h3>{cat}</h3>
            {topics[cat].map((t, i) => (
              <p key={i}>{t}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
