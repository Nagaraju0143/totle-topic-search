import { useState, useMemo } from "react";

const topics = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Calculus", category: "Mathematics" },
  { id: 3, name: "Organic Chemistry", category: "Chemistry" },
  { id: 4, name: "World War II", category: "History" },
  { id: 5, name: "Programming Basics", category: "Computer Science" }
];

export default function TopicSearch() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return q ? topics.filter(t => t.name.toLowerCase().includes(q)) : topics;
  }, [search]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Topic Search</h2>

      <input
        aria-label="Search topics"
        placeholder="Search topics..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <div style={{ marginTop: 12 }}>
        {filtered.length === 0 ? (
          <div style={styles.empty}>No topics found.</div>
        ) : (
          filtered.map(t => (
            <div key={t.id} style={styles.card}>
              <div style={styles.cardName}>{t.name}</div>
              <div style={styles.cardCat}>{t.category}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { width: 380, padding: 20, fontFamily: "Arial, sans-serif", background: "#fff", borderRadius: 8 },
  title: { margin: 0, marginBottom: 8 },
  input: { padding: 8, width: "100%", borderRadius: 6, border: "1px solid #ccc" },
  card: { padding: 10, marginTop: 10, borderRadius: 6, border: "1px solid #eee", background: "#fafafa" },
  cardName: { fontWeight: 600 },
  cardCat: { fontSize: 12, color: "#666", marginTop: 6 },
  empty: { color: "#b00", fontStyle: "italic" }
};