export default function CodeBlock({
  code,
  onCopy,
  copied,
  isDisabled
}) {
  return (
    <>
      <h3>Código generado</h3>

      <pre
        style={{
          background: "#111",
          color: "#0f0",
          padding: "1rem",
          borderRadius: "6px",
          whiteSpace: "pre-wrap"
        }}
      >
        {code}
      </pre>

      <button
        onClick={onCopy}
        disabled={isDisabled}
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: copied ? "green" : "#007bff",
          color: "white",
          cursor: isDisabled ? "not-allowed" : "pointer",
          opacity: isDisabled ? 0.5 : 1,
          transition: "all 0.2s ease"
        }}
      >
        {copied ? "✅ Copiado!" : "📋 Copiar código"}
      </button>
    </>
  );
}
