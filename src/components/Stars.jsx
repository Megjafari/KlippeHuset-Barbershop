export default function Stars({ count }) {
  return (
    <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          style={{
            color: i < count ? "#4A6B4A" : "rgba(74,107,74,0.2)",
            fontSize: 14,
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
