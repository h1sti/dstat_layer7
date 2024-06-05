mod websockets;

use actix_web::web::Data;
use actix_web::{web, App, Error, HttpRequest, HttpResponse, HttpServer, Responder};
use actix_web_actors::ws;
use std::thread;
use websockets::WebSocket;

const IP_ADDRESS: &str = "127.0.0.1";
const PORT: u16 = 8080;

struct AppData {
    counter: std::sync::Mutex<i32>,
}

#[actix_web::get("/hit")]
async fn dstat(data: Data<AppData>) -> impl Responder {
    let mut counter = data.counter.lock().unwrap();
    *counter += 1;

    format!("{}", *counter)
}

#[actix_web::get("/ws")]
async fn index(
    req: HttpRequest,
    stream: web::Payload,
    data: Data<AppData>,
) -> Result<HttpResponse, Error> {
    let resp = ws::start(
        WebSocket {
            app_data: data.clone(),
        },
        &req,
        stream,
    );

    resp
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let data = Data::new(AppData {
        counter: std::sync::Mutex::new(0),
    });

    let thread_state = data.clone();

    thread::spawn(move || loop {
        {
            let mut counter = thread_state.counter.lock().unwrap();
            *counter = 0;
        }

        thread::sleep(std::time::Duration::from_secs(1));
    });

    println!("Server started at http://{}:{}", IP_ADDRESS, PORT);

    HttpServer::new(move || {
        App::new()
            .app_data(data.clone())
            .service(index)
            .service(dstat)
            .service(actix_files::Files::new("/", "./frontend/dist").index_file("index.html"))
    })
    .bind((IP_ADDRESS, PORT))?
    .run()
    .await
}
