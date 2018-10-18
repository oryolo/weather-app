export default function toCelsius (fahrenheit, state) {
  let celsius =  Math.round((fahrenheit - 32) * 5 / 9);
  if (state) { return celsius } 
  else { return Math.round(fahrenheit) }
}
