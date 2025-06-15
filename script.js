function reverseSteps() {
  const input = document.getElementById("input").value;
  const lines = input
    .split('\n')
    .map(line => line.trim())
    .filter(line => line !== '');

  const stripped = lines.map(line => {
    // Remove leading number + period (e.g. "1. Step" => "Step")
    return line.replace(/^\d+\.\s*/, '');
  });

  const reversed = stripped.reverse();

  const renumbered = reversed.map((line, index) => `${index + 1}. ${line}`);

  document.getElementById("output").value = renumbered.join('\n');
}
