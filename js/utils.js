//splitFirst

export function splitFirst(str, delimiter) {
  if (
    typeof str !== "string" ||
    typeof delimiter !== "string" ||
    delimiter === ""
  ) {
    throw new Error(
      "Invalid input: both str and delimiter must be non-empty strings.",
    );
  }

  const index = str.indexOf(delimiter);
  if (index === -1) {
    // Delimiter not found: return whole string as first part, empty rest
    return [str, ""];
  }

  const firstPart = str.slice(0, index);
  const restPart = str.slice(index + delimiter.length);
  return [firstPart, restPart];
}

//saving objects into localStorage

//fetching from localStorage
