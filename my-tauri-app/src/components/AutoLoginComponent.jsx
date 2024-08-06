import React, { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import './AutoLoginComponent.css'; // Import the CSS file for styling

function AutoLoginComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const isTauri = typeof window.__TAURI__ !== 'undefined';

  const fetchData = async () => {
    console.log('isTauri:', isTauri); // Print the environment check result
    setLoading(true);
    setError(null);
    try {
      let result;
      if (isTauri) {
        console.log('Running in Tauri environment');
        result = await invoke('auto_login');
      } else {
        console.log('Running in browser environment');
        const response = await fetch('https://freetestapi.com/api/v1/students');
        if (!response.ok) {
          throw new Error(`API request failed with status ${response.status}`);
        }
        result = await response.json();
      }
      setData(result);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <button onClick={fetchData} disabled={loading} className="button">
        {loading ? 'Loading...' : 'Fetch Data'}
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
