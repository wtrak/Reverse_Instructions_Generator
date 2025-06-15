function reverseSteps() {
  const input = document.getElementById("input").value;
  const lines = input.split('\n').filter(line => line.trim() !== '');
  const reversed = lines.reverse();
  document.getElementById("output").value = reversed.join('\n');
}
