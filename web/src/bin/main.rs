extern crate web;
use web::ThreadPool;

use std::io::prelude::*;
use std::net::*;
use std::fs::*;
use std::thread;
use std::time::Duration;

fn main() {
    let listener = TcpListener::bind("127.0.0.1:7878").unwrap();

    let pool = ThreadPool::new(4);

    for stream in listener.incoming() {
        let stream = stream.unwrap();

        pool.execute(|| {
            handle_connection(stream);
        });
    }
}
/*
fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    match stream.read(&mut buffer) {
        Err(e) => panic!("e : {}", e),
        _ => {}
    };

    // println!("Request: {}", String::from_utf8_lossy(&buffer[..]));

    let get = b"GET / HTTP/1.1\r\n";

    if buffer.starts_with(get) {
        // let mut file: File = match File::open("views/hello.html") {
        //     Err(e) => panic!("e : {}", e),
        //     Ok(file) => file
        // };
        
        // let mut contents = String::new();
        // file.read_to_string(&mut contents).unwrap();
        let contents = read_to_string("view/hello.html").unwrap();

        let res = format!("HTTP/1.1 200 OK\r\nContent-Length: {}\r\n\r\n{}",
            contents.len(),
            contents
        );

        stream.write(res.as_bytes()).unwrap();
        stream.flush().unwrap();
    } else {
        let contents = read_to_string("view/404.html").unwrap();

        let res = format!("HTTP/1.1 404 Not Found\r\nContent-Length: {}\r\n\r\n{}",
            contents.len(),
            contents
        );

        stream.write(res.as_bytes()).unwrap();
        stream.flush().unwrap();
    }
}
*/
fn handle_connection(mut stream: TcpStream) {
    let mut buffer = [0; 1024];
    match stream.read(&mut buffer) {
        Err(e) => panic!("e : {}", e),
        _ => {}
    };

    let get = b"GET / HTTP/1.1\r\n";
    let sleep = b"GET /sleep HTTP/1.1\r\n";

    let (status_line, file_name) = if buffer.starts_with(get) {
        ("200 OK", "hello")
    } else if buffer.starts_with(sleep) {
        thread::sleep(Duration::from_secs(10));
        ("200 OK", "hello")
    } else {
        ("404 Not Found", "404")
    };
        
    let contents = read_to_string(format!("views/{}.html", file_name)).unwrap();
    
    let res = format!("HTTP/1.1 {}\r\nContent-Length: {}\r\n\r\n{}",
        status_line,
        contents.len(),
        contents
    );

    stream.write(res.as_bytes()).unwrap();
    stream.flush().unwrap();
}


