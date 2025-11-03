import {useRef,useEffect} from 'react'; 
import { useTheme } from '../context/ThemeContext';
export default function FocusInput() {
  const { theme } = useTheme();
     // 1) DOM elemanını işaretleyeceğimiz "sessiz kutu"
  const inputRef = useRef(null);

  // 2) Component ilk yüklendiğinde input'u odakla
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  
  // 3) Butonla tekrar odak
    const handleRefocus = () => {
        if (inputRef.current) inputRef.current.focus();
    };
const bg = theme === "light" ? "#fff" : "#222";
  const fg = theme === "light" ? "#000" : "#fff";

  return (
    <div
      style={{
        background: bg,
        color: fg,
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
      }}
    >
      <h3>useRef: Focus Input</h3>
      <input
        ref={inputRef}
        placeholder="Type here..."
        style={{
          padding: 8,
          border: "1px solid #ccc",
          color: fg,
          background: bg,
        }}
      />
      <button onClick={handleRefocus} style={{ marginLeft: 8 }}>
        Focus Again
      </button>
    </div>
  );

}