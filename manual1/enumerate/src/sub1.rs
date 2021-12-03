#[derive(Debug)]
enum IpAddrKind {
  V4,
  V6,
}

fn route(ip_type: IpAddrKind) {
  println!("now, using {:?}", ip_type);
}

#[allow(unused)]
pub fn run() {
  let four = IpAddrKind::V4;
  let six = IpAddrKind::V6;

  route(four);
}
