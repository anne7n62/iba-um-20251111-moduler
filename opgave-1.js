const {
  MathUtils,
  FileUtils,
  TextUtils,
  NetUtils,
} = require("./opgave-1-utils.cjs");

// --- MATEMATIK ---
console.log("Primtal op til 30:", MathUtils.primtalOpTil(30));
console.log("Gennemsnit:", MathUtils.gennemsnit([2, 4, 6, 8]));

// --- FILHÅNDTERING ---
const mappeOpgør = FileUtils.opgørMappe(__dirname);
console.log("I denne mappe findes:", mappeOpgør);

// --- TEKST ---
const tekst = "Hej verden fra Node.js";
console.log("Uppercase:", TextUtils.tilUpper(tekst));
console.log("Ord i sætning:", TextUtils.ordTæl(tekst));

// --- API ---
(async () => {
  const data = await NetUtils.hentJSON("https://api.github.com");
  if (data) console.log("API-svar (forkortet):", Object.keys(data));
})();
