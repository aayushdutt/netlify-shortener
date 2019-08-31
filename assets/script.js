var shortenedUrlInput = document.querySelector("input#shortened-url");
var longUrlInput = document.querySelector("input#long-url");
var generateRandomButton = document.querySelector("button#generate-random");
var shortenButton = document.querySelector("button#shorten");

generateRandomButton.addEventListener("click", generateRandom);

function generateRandom() {
  var randomNo = Math.random() * 10000000000;
  var id = base62.encode(randomNo);
  shortenedUrlInput.value = id;
}

const base62 = {
  charset: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  ),
  encode: integer => {
    if (integer === 0) {
      return 0;
    }
    let s = [];
    while (integer > 0) {
      s = [base62.charset[integer % 62], ...s];
      integer = Math.floor(integer / 62);
    }
    return s.join("");
  },
  decode: chars =>
    chars
      .split("")
      .reverse()
      .reduce(
        (prev, curr, i) => prev + base62.charset.indexOf(curr) * 62 ** i,
        0
      )
};
