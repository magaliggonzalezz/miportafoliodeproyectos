let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a79cde;">Desarrollo sitios web y soy estudiante de Ing. Telemática.')
  .pauseFor(200)
  .deleteChars(10)
  .start();