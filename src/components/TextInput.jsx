export default function TextInput({ label, text, setText, isTextEmpty }) {
  return (
    <>
    <h3>{label}</h3>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe tu texto"
        style={{
          width: '30vw', // Tamaño 'xs'
          height: "50px",
          padding: '5px',
          display: 'block',
          marginBottom: "0.5rem",
          border: isTextEmpty ? "2px solid red" : "1px solid #ccc",
          borderRadius: "6px"
        }}
      />

      {isTextEmpty && (
        <p style={{ color: "red", marginTop: 0 }}>
          Debes escribir un texto para aplicar estilos
        </p>
      )}
    </>
  );
}
