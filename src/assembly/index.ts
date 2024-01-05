// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function joinText(
  str_1: string,
  str_2: string,
  separator: string,
): string {
  return `${str_1}${separator}${str_2}`;
}
