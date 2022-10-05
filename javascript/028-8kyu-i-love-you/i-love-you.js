export function howMuchILoveYou(nbPetals) {
  if (nbPetals === undefined) throw new Error("argument must be provided");
  if (typeof nbPetals !== "number" || isNaN(nbPetals))
    throw new Error("provided argument must be a number");
  if (nbPetals <= 0) throw new Error("provided number must be positive");
  if (nbPetals % 1) throw new Error("provided number must be an integer");

  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  const index = (nbPetals - 1) % phrases.length;

  return phrases[index];
}
