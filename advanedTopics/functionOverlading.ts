// different function signatures  considering name and  type  ,  total number and even sequence of parameters being accepted .

type NumberOrString = string | number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: number, c: number): number;

function add(a: NumberOrString, b: NumberOrString) {
  if (typeof a === "string" || typeof b === "string")
    return a.toString() + b.toString();
  else return a + b;
}
