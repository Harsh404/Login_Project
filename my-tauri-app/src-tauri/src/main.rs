#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use reqwest::Client;
use serde_json::Value;
use tauri::command;

#[command]
async fn auto_login () -> Result<Value, String> {
    let url = "https://freetestapi.com/api/v1/students";
    
    println!("Sending request to: {}", url);

    let client = Client::new();
    let response = client.get(url).send().await.map_err(|e| e.to_string())?;
    

    if !response.status().is_success() {
        let error_msg = format!("API request failed with status: {}", response.status());
        println!("Error: {}", error_msg);
        return Err(error_msg);
    }
    
    let json: Value = response.json().await.map_err(|e| e.to_string())?;
    
    println!("Response body: {}", json);
    
    if json.is_array() {
        Ok(json) // Return the JSON array
    } else {
        Err("Expected an array but got something else".into())
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![auto_login])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


