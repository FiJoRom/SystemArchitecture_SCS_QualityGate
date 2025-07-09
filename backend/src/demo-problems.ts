// 1. Code Smell: lange Funktion, zu viele Verschachtelungen
export function problematicFunction(input: any) {
  let result = '';
  for (let i = 0; i < 5; i++) {
    if (input) {
      if (typeof input === 'string') {
        if (input.length > 0) {
          result += input;
        }
      }
    }
  }
  return result;
}

// 2. Bug: potenzieller Null-Zugriff
export function getUserName(user: { name?: string }) {
  //if (!user.name) return;
  return user.name.toUpperCase(); // user.name könnte undefined sein
}

// 3. Security Hotspot: unsicherer Code
export function execute(code: string) {
  return eval(code); // kritisch!
}

// 4. Test fehlt → keine Coverage
export function unusedBranch(flag: boolean) {
  if (flag) {
    return 'on';
  } else {
    return 'off';
  }
}

// 5. Duplikat → einfach später per Copy-Paste einbauen
export function duplicateExample() {
  console.log('This is duplicate code');
}

export function duplicateExample2() {
  console.log('This is duplicate code');
}

export function duplicateExample3() {
  console.log('This is duplicate code');
}
