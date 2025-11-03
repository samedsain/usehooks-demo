import { ThemeProvider, useTheme } from "./context/ThemeContext";
import FocusInput from "./components/FocusInput";
import RenderlessCounter from "./components/RenderlessCounter";
import MemoDemo from "./components/MemoDemo";
function ThemedBox() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 24 }}>
        <MemoDemo />
        <ThemedBox />
        <FocusInput />
        <RenderlessCounter />
      </div>
    </ThemeProvider>
  );
}