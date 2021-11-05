use tauri::{LogicalSize, Manager, Size};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            app.get_window("main")
                .unwrap()
                .set_min_size(Option::Some(Size::Logical(LogicalSize { width: 600.0, height: 400.0 })))
                .expect("ERROR IN MIN SIZE SET");
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
