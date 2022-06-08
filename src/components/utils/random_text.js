export function ShowRandomText() {
  const texts = [
    "Bring keys tomorrow!",
    "Feed the dog",
    "Buy milk tomorrow",
    "Do homework today",
    "Take medicine",
  ];
  const text = texts[Math.floor(Math.random() * texts.length)];
  return text;
}
