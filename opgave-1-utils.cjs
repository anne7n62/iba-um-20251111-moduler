// Et samlingsmodul med praktiske funktioner
const fs = require("fs");

// ---------- MATEMATIK ----------
class MathUtils {
  // Tjek om et tal er et primtal
  static erPrimtal(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // Generér de første N primtal
  static primtalOpTil(n) {
    const result = [];
    for (let i = 2; i <= n; i++) {
      if (this.erPrimtal(i)) result.push(i);
    }
    return result;
  }

  // Gennemsnit af en liste
  static gennemsnit(arr) {
    if (!arr.length) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}

// ---------- FILHÅNDTERING ----------
class FileUtils {
  // Læs fil synkront
  static læsFil(path) {
    try {
      return fs.readFileSync(path, "utf-8");
    } catch (err) {
      console.error("Kunne ikke læse fil:", err.message);
      return null;
    }
  }

  // Skriv tekst til fil
  static skrivFil(path, data) {
    try {
      fs.writeFileSync(path, data, "utf-8");
      console.log("Fil gemt:", path);
    } catch (err) {
      console.error("Fejl ved skrivning:", err.message);
    }
  }

  // Tæl filer og mapper i en sti
  static opgørMappe(path) {
    const entries = fs.readdirSync(path, { withFileTypes: true });
    const filer = entries.filter((e) => e.isFile()).length;
    const mapper = entries.filter((e) => e.isDirectory()).length;
    return { filer, mapper };
  }
}

// ---------- TEKST ----------
class TextUtils {
  static tilUpper(text) {
    return text.toUpperCase();
  }

  static tilLower(text) {
    return text.toLowerCase();
  }

  static ordTæl(text) {
    return text.trim().split(/\s+/).length;
  }
}

// ---------- API / NET ----------
class NetUtils {
  // Hent JSON fra et API (Node 18+ har fetch)
  static async hentJSON(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP-fejl ${res.status}`);
      return await res.json();
    } catch (err) {
      console.error("Kunne ikke hente data:", err.message);
      return null;
    }
  }
}

module.exports = { MathUtils, FileUtils, TextUtils, NetUtils };
