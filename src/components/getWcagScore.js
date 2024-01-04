import { formatWcagGuidelines } from "./formatWcagGuidelines";
export function getWcagScore(fontSizeNum, bold, contrast) {
  let wcagGrade;
  let tooltip;

  // Large text
  if (fontSizeNum >= 24 || (fontSizeNum >= 18.66 && bold)) {
    tooltip = formatWcagGuidelines(3, 4.5);
    if (contrast >= 4.5) {
      wcagGrade = "AAA";
    } else if (contrast >= 3) {
      wcagGrade = "AA";
    } else {
      wcagGrade = "FAIL";
    }
  } else if (fontSizeNum) {
    tooltip = formatWcagGuidelines(4.5, 7);
    if (contrast >= 7) {
      wcagGrade = "AAA";
    } else if (contrast >= 4.5) {
      wcagGrade = "AA";
    } else {
      wcagGrade = "FAIL";
    }
  } else {
    wcagGrade = "FAIL";
    tooltip =
      "Bien que cela ne soit pas officiel, la pratique généralement acceptée est une taille de police minimale de 15 px pour répondre aux normes AA.";
  }
  return { wcagGrade, tooltip };
}
