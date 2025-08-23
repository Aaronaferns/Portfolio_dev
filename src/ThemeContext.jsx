// ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isBright, setIsBright] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsBright(hour >= 6 && hour < 20);
  }, []);

  const mainTextColor = isBright ? "text-gray-900" : "text-white";
  const secondaryTextColor = isBright ? "text-gray-500" : "text-gray-300";

  return (
    <ThemeContext.Provider value={{ isBright, mainTextColor, secondaryTextColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to access theme
export const useTheme = () => useContext(ThemeContext);
