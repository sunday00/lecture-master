pub fn math(s: &str) -> i32 {
  const ALLOWED: &str = "123456789+-";
  if !s.chars().all(|c| ALLOWED.contains(c)) || 
   !s.chars().take(2).any(|c| c.is_numeric()){
    panic!("Not allowed character, and need at least 2 numeric");
  }

  let mut left: Option<i32> = None;
  let mut oper: Option<char> = None;

  for c in s.chars() {
    match c {
      '+' => { oper = Some(c); },
      '-' => { 
        if oper != None && oper.unwrap() == '-' {
          oper = Some('+'); 
        } else if left == None {
          left = Some(0);
          oper = Some('-');
        } else {
          oper = Some('-'); 
        }
      },
      number => {
        if left == None {
          left = Some(number.to_digit(10).unwrap() as i32);
        } else {
          if oper == Some('+') {
            left = Some( left.unwrap() + number.to_digit(10).unwrap() as i32 );
          } else {
            left = Some( left.unwrap() - number.to_digit(10).unwrap() as i32 );
          }
        }
      },
    }
  }

  left.unwrap()
}
