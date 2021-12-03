pub mod rec;
pub mod fun;

#[allow(dead_code)]
fn internal_test() -> u8 {
    4
}

#[cfg(test)]
mod tests {

    // use super::rec;
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    fn exploration() {
        assert_eq!(2 + 2, 4);
    }

    // #[test]
    // fn should_fail() {
    //     panic!("intentional panic");
    // }

    use rec::*;

    #[test]
    fn larger_can_hold_small () {
        let larger = Rectangle { length: 8, width: 7 };
        let smaller = Rectangle { length: 5, width: 1 };

        assert!(larger.can_hold(&smaller))
    }

    #[test]
    fn smaller_cannot_hold_larger () {
        let larger = Rectangle { length: 8, width: 7 };
        let smaller = Rectangle { length: 5, width: 1 };

        assert!(!smaller.can_hold(&larger))
    }

    #[test]
    fn it_add_two() {
        assert_eq!(4, add_two(2))
    }

    #[test]
    fn it_should_be_changed() {
        assert_ne!(2, add_two(2))
    }

    #[test]
    #[ignore]
    fn it_should_contains() {
        let name = "Jane";
        let result = greeting(&name);
        assert!(result.contains(&name), 
            "fn greeting doesn't contain {}, \n greeting: {}", &name, result
        );
    }

    #[test]
    #[should_panic(expected = "even")]
    #[ignore]
    fn it_should_panic() {
        intentional_panic(3)
    }

    #[test]
    fn test_stupid_success() {
        let result = stupid10(5);
        assert_eq!(10, result)
    }

    #[test]
    #[ignore]
    fn test_stupid_fail() {
        let result = stupid10(8);
        assert_eq!(5, result)
    }
}

#[cfg(test)]
mod tests2 {
    use super::fun;
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }

    #[test]
    fn internal() {
        assert_eq!(4, fun::add_two(2));
        // 메뉴얼에는 private 함수도 테스팅 된다고 되어 있지만, 실제론 안되는디?
        assert_eq!(4, internal_test())
        // 같은 파일 안에 있으면 되는듯?
    }
}