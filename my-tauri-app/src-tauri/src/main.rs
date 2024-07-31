#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use reqwest;
use serde_json::Value;
use tauri::Manager;

#[tauri::command]
async fn auto_login() -> Result<String, String> {
    let url = "https://freetestapi.com/api/v1/students";
    
    println!("Sending request to: {}", url);

    let response = reqwest::get(url).await.map_err(|e| e.to_string())?;
    
    println!("Response status: {}", response.status());

    if !response.status().is_success() {
        let error_msg = format!("API request failed with status: {}", response.status());
        println!("Error: {}", error_msg);
        return Err(error_msg);
    }
    
    let json: Value = response.json().await.map_err(|e| e.to_string())?;
    
    println!("Response body: {}", json);
    
    Ok(json.to_string())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![auto_login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
