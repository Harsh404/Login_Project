import React from 'react'
import { invoke } from '@tauri-apps/api/tauri';
import { useState } from 'react';
function Greet() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [greeting, setGreeting] = useState('');
    const handleGreet = async () => {
        try {
          // Convert age to a number and invoke the Rust function
          const message = await invoke('greet', { name, age: Number(age) });
          setGreeting(message);
        } catch (error) {
          console.error('Error invoking greet command:', error);
        }
      };
    return (
        <div>
          <h1>Tauri + React</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      />
      <button onClick={handleGreet}>Greet</button>
      <p>{greeting}</p>
        </div>
    )
}

export default Greet
