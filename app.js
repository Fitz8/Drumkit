document.querySelectorAll('.button').forEach(item => {
    item.addEventListener("click", (e) => {
        const sound = e.target.nextElementSibling;
        sound.play();
    });
  });

  document.addEventListener("keydown", (logkey) => {
    let key = logkey.key;
    const sound = document.getElementById(key);
    sound.play();
});