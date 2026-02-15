import { useState } from "react";
import TextInput from "./components/TextInput";
import ColorPicker from "./components/ColorPicker";
import ModifierButtons from "./components/ModifierButtons";
import Preview from "./components/Preview";
import CodeBlock from "./components/CodeBlock";
import './App.css';

const modifiers = ["bold", "italic", "underline", "overline", "hidden", "strikethrough", "visible"];

const chalkToCssColor = {
  red: "#FF0000",
  green: "#008000",
  yellow: "#FFFF00",
  blue: "#0000FF",
  magenta: "#FF00FF",
  cyan: "#B2ECEC",
  white: "#E0DBD1" ,
  blackBright: "#6D7D73" ,
  magentaBright: "#FF00FF" ,
  cyanBright: "#00FFFF" ,
  whiteBright: "#FFFFFF" ,
  redBright: "#FF5555",
  greenBright: "#55FF55",
  blueBright: "#5555FF",
  yellowBright: "#FFFF55",
};

const chalkBackground = {
  bgred: "#FF0000",
  bgGreen: "#008000",
  bgYellow: "#FFFF00",
  bgBlue: "#0000FF",
  bgMagenta: "#FF00FF",
  bgCyan: "#B2ECEC",
  bgWhite: "#E0DBD1" ,
  bgBlackBright: "#6D7D73" ,
  bgMagentaBright: "#FF00FF" ,
  bgCyanBright: "#00FFFF" ,
  bgWhiteBright: "#FFFFFF" ,
  bgRedBright: "#FF5555",
  bgGreenBright: "#55FF55",
  bgBlueBright: "#5555FF",
  bgYellowBright: "#FFFF55",
};

export default function App() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  const [styles, setStyles] = useState({
    color: null,
    background: null,
    modifiers: []
  });

  const isTextEmpty = text.trim() === "";

  const toggleModifier = (modifier) => {
    if (isTextEmpty) return;

    setStyles(prev => ({
      ...prev,
      modifiers: prev.modifiers.includes(modifier)
        ? prev.modifiers.filter(m => m !== modifier)
        : [...prev.modifiers, modifier]
    }));
  };

  const generatedCode = generateChalkCode(text, styles, isTextEmpty);

  const handleCopy = async () => {
    if (isTextEmpty) return;

    await navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="globalContainer">
      <h1 className="title">🎨 Chalk Visual Builder</h1>

      <div className="appContainer">
        <div className="left">
          <TextInput
           label="Ingresa el texto a modificar"
           text={text} 
           setText={setText} 
           isTextEmpty={isTextEmpty} 
          />

          <ColorPicker
            label="Color del texto"
            colors={chalkToCssColor}
            selectedColor={styles.color}
            onSelect={(color) =>
              setStyles(prev => ({
                ...prev,
                color
              }))
            }
          />

          <ColorPicker
            label="Color del Fondo"
            colors={chalkBackground}
            selectedColor={styles.background}
            onSelect={(background) =>
              setStyles(prev => ({
                ...prev,
                background
              }))
            }
          />

          <ModifierButtons
            label="Modificadores"
            modifiers={modifiers}
            activeModifiers={styles.modifiers}
            toggleModifier={toggleModifier}
            isDisabled={isTextEmpty}
          />

        </div>

        <div className="right">
          <Preview
            label="Resultado"
            text={text} 
            styles={styles}
            textColors={chalkToCssColor}
            backgroundColors={chalkBackground}
          />

          <CodeBlock
            code={generatedCode}
            onCopy={handleCopy}
            copied={copied}
            isDisabled={isTextEmpty}
          />
        </div>
      </div>

    </div>
  );
}

// 🔥 Función separada para generar código
function generateChalkCode(text, styles, isTextEmpty) {
  if (isTextEmpty) return "// Escribe un texto primero";

  const parts = [];

  if (styles.color) {
    parts.push(`${styles.color}`);
  }

  if (styles.background) {
    parts.push(`${styles.background}`);
  }

  parts.push(...styles.modifiers);

  const chain = parts.join(".");

  if (!chain) return `"${text}"`;

  return `const chalk = require("chalk");\n\nchalk.${chain}("${text}")`;
}
