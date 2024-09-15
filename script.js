function stringChop(str, size) {
  // Return an empty array if the input string is null or size is not positive
  if (!str || size <= 0) return [];

  // Initialize an array to store the chunks
  const chunks = [];

  // Loop through the string, taking slices of the given size
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.slice(i, i + size));
  }

  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
