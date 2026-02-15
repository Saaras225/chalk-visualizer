export default function ModifierButtons({
  label,
  modifiers,
  activeModifiers,
  toggleModifier,
  isDisabled
}) {
  return (
    <>
      <h3>{label}</h3>
      {modifiers.map(mod => {
        const isActive = activeModifiers.includes(mod);

        return (
          <button
            key={mod}
            onClick={() => toggleModifier(mod)}
            disabled={isDisabled}
            style={{
              margin: "3px",
              padding: "5px 5px",
              borderRadius: "6px",
              border: isActive ? "3px solid #333" : "1px solid #ccc",
              backgroundColor: isActive ? "#333" : "#f5f5f5",
              color: isActive ? "white" : "black",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isDisabled ? 0.4 : 1,
              transition: "all 0.2s ease"
            }}
          >
            {mod}
          </button>
        );
      })}
    </>
  );
}
