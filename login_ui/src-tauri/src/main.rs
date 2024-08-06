// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]





use serde::{Deserialize, Serialize};
use tauri::command;
use reqwest::Client;
use tauri::Manager;
#[derive(Serialize, Deserialize, Debug)]
struct Student {
    id: u32,
    name: String,
    age: u32,
}

type ApiResponse = Vec<Student>;

#[command]
async fn fetch_data_from_service() -> Result<ApiResponse, String> {
    let client = Client::new();
    let response = client
        .get("http://localhost:5000/api/fetch-data")
        .send()
        .await
        .map_err(|e| e.to_string())?
        .text()
        .await
        .map_err(|e| e.to_string())?;

    let data: ApiResponse = serde_json::from_str(&response).map_err(|e| e.to_string())?;
    Ok(data)
}


fn main() {
    tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![fetch_data_from_service])
    .setup(|app| {
        let window = app.get_window("main").unwrap();
        
        // Example of emitting an event
        window.emit("my-window-event", "Event payload").unwrap();
        
        Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

