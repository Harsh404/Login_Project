import React, { useState } from 'react';
import { invoke } from '@tauri-apps/api'; // Correct import for invoke

function APICALL() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const isTauri = typeof window.__TAURI__ !== 'undefined';
    console.log('Is Tauri:', isTauri);

    const brwsrdata = async () => {
        if (isTauri) {
            try {
                // Invoke the Rust command
                return await invoke('fetch_data_from_service');
            } catch (err) {
                console.error('Error invoking Tauri command:', err);
                throw err;
            }
        } else {
            try {
                // Fallback for non-Tauri environment (e.g., development mode)
                const response = await fetch('http://localhost:5000/api/fetch-data');
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                return await response.json();
            } catch (err) {
                console.error('Error fetching data from server:', err);
                throw err;
            }
        }
    };

    const fetchData = async (filter = false) => {
        setLoading(true);
        setError(null);
        try {
            const result = await brwsrdata();
            console.log('API result:', result);
            if (Array.isArray(result)) {
                if (filter) {
                    const filteredData = result.filter(student => student.age === 20);
                    setData(filteredData);
                } else {
                    setData(result);
                }
            } else {
                console.error('Expected an array but got:', result);
                setData([]); // Set to empty array if result is not an array
            }
        } catch (err) {
            console.error('API error:', err);
            setError(err.toString());
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <button onClick={() => fetchData(false)} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch All Data'}
            </button>
            <button onClick={() => fetchData(true)} disabled={loading}>
                {loading ? 'Loading...' : 'Fetch Filtered Data'}
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
