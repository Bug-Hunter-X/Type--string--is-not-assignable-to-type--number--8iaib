function combine(a: number, b: string): number | string {
  return a + b; //Now it works correctly
}

//Or

function combine(a: number, b: number): number {
  return a + b; 
}

function combineString(a: string, b: string): string {
  return a + b; 
}