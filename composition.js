// Count how many numbers there are in the following
// sentence, using functional composition
const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

const numbersInString = R.pipe(
  R.split(''),
  R.map(parseInt),
  R.filter(Number.isInteger),
  R.length
)

expect(numbersInString(sentence)).toBe(7)
