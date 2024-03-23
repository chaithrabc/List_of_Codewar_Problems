function getCount(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  
  return count;
}
