export const speech = text => {
  var msg = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(msg);
};
