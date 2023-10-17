export function sayHello(name?: string): string {
  if (name === undefined) {
    return "Hello";
  }
  return `Hello ${name}`;
}

export function add(lhs: number, rhs: number): number {
  return lhs + rhs;
}
