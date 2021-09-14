#[derive(Debug)]
enum IpAddrKind {
  V4,
  V6,
}

#[allow(dead_code)]
struct IpAddr {
  kind: IpAddrKind,
  address: String,
}

#[allow(unused)]
pub fn run() {
  let home = IpAddr {
    kind: IpAddrKind::V4,
    address: String::from("127.0.0.1"),
  };

  let office = IpAddr {
    kind: IpAddrKind::V6,
    address: String::from(":::1"),
  };
}
