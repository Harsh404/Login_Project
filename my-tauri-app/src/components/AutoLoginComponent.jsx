import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import './AutoLoginComponent.css'; // Import the CSS file for styling

function AutoLoginComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isTauri = typeof window.__TAURI__ !== 'undefined';

  const fetchData = async () => {
    if (isTauri) {
      return await invoke('auto_login');
    } else {
      const response = await fetch('https://freetestapi.com/api/v1/students');
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      return await response.json();
    }
  };

  const handleAutoLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchData();
      console.log('Auto login result:', result);
      setData(result);
    } catch (err) {
      console.error('Auto login error:', err);
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <button onClick={handleAutoLogin} disabled={loading} className="button">
        {loading ? 'Loading...' : 'Auto Login'}
      </button>
      {error && <p className="error">Error: {error}</p>}
      {data && (
        <div className="data-container">
          <h2>Student Data:</h2>
          <ul className="data-list">
            {data.map((item) => (
              <li key={item.id} className="data-item">
                <p><strong>ID:</strong> {item.id}</p>
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Age:</strong> {item.age}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AutoLoginComponent;
