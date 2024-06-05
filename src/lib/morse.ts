const MORSE_TO_ALPHABET: { [key: string]: string } = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "/": " ",
} as const;

export function decodeMorseCode(morseCode: string): string {
  return morseCode
    .split(" ")
    .map((code) => MORSE_TO_ALPHABET[code] || "")
    .join("");
}

export function encodeMorseCode(text: string): string {
  return text
    .split("")
    .map((char) => {
      return Object.entries(MORSE_TO_ALPHABET).find(
        ([, value]) => value === char
      )?.[0];
    })
    .filter((code) => code)
    .join(" ");
}

export function isAllowedMorseCode(code: string): boolean {
  const allowedChars = [".", "-", "/", " "];

  return code.split("").every((char) => allowedChars.includes(char));
}
