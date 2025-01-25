import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Dark Mode</button>
      {/* app content */}
    </div>
  );
}
export default App;