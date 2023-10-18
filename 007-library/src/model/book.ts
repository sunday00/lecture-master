import {Member, Role, User} from "./member";

export class Book {
  constructor(public title: string, public author : string, public publishedAt: Date) {}
}

export interface RentManager {
  getBooks(): Book[];
  addBook(user: User, book: Book): void;
  removeBook(user: User, book: Book): void;
  rentBook(user: Member, book: Book): void;
  returnBook(user: Member, book: Book): void;
}

export class Library implements RentManager {
  private books: Book[] = [];
  private rentedBooks: Map<string, Book> = new Map<string, Book>();

  getBooks(): Book[] {
    return JSON.parse(JSON.stringify(this.books));
  }

  addBook(user: User, book: Book): void {
    if (user.getRole() !== Role.LIBRARIAN) {
      console.log("사서만 도서를 추가할 수 있습니다.");
      return;
    }

    this.books.push(book);
  }

  removeBook(user: User, book: Book): void {
    if (user.getRole() !== Role.LIBRARIAN) {
      console.log("사서만 도서를 삭제할 수 있습니다.");
      return;
    }

    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  rentBook(user: User, book: Book): void {
    if (user.getRole() !== Role.MEMBER) {
      console.log("유저만 도서를 대여할 수 있습니다.");
      return;
    }

    if (this.rentedBooks.has(user.name)) {
      console.log(
        `${user.name}님은 이미 다른 책을 대여중이라 빌릴 수 없습니다.`
      );
    } else {
      this.rentedBooks.set(user.name, book);
      console.log(`${user.name}님이 [${book.title}] 책을 빌렸습니다.`);
    }
  }

  returnBook(user: User, book: Book): void {
    if (user.getRole() !== Role.MEMBER) {
      console.log("유저만 도서를 반납할 수 있습니다.");
      return;
    }

    if (this.rentedBooks.get(user.name) === book) {
      this.rentedBooks.delete(user.name);
      console.log(`${user.name}님이 [${book.title}] 책을 반납했어요!`);
    } else {
      console.log(`${user.name}님은 [${book.title}] 책을 빌린적이 없어요!`);
    }
  }
}