function stringToArray(string) {
  let word = '';
  const words = [];
  
  for (let char of string) {
    if (char !== ' ') {
      word += char;
    } else {
      words.push(word);
      word = '';
    }
  }
  
  if (word !== '') {
    words.push(word);
  }
  
  return words;
}
