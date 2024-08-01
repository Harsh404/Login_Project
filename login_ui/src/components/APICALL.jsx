import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api';


function APICALL() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);// Initial state is null to differentiate between states

    const isTauri = typeof window.__TAURI__ !== 'undefined';
    console.log(isTauri)

    const brwsrdata = async () => {
        if (isTauri) {
            return await invoke('fetch_data');
        } else {
            const response = await fetch('https://freetestapi.com/api/v1/students');
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            return await response.json();
        }
    };

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const result = await brwsrdata();
        //   const parsedData = JSON.parse(result); 
          console.log('Auto login result:', result);
          if (Array.isArray(result)) {
            setData(result);
        } else {
            console.error('Expected an array but got:', result);
            setData([]); // Set to empty array if result is not an array
        }
        } catch (err) {
          console.error('Auto login error:', err);
          setError(err.toString());
        } finally {
          setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={fetchData} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Data'}
            </button>

            {error && <p>Error: {error}</p>}

            {Array.isArray(data) && data.length > 0 && (
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

export default APICALL;
