interface Tutorial {
  name: string;
}

export default function sayHello(name: string): Tutorial|void {
  if (!name) return;

  return {name}
}

console.log(sayHello('K'));