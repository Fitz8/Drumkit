document.querySelectorAll('.card').forEach(item => {
    item.addEventListener("click", (e) => {
        const sound = e.target.querySelector("audio");
        sound.play();
    });
  });

  document.addEventListener("keydown", (logkey) => {
    let key = logkey.key;
    const sound = document.getElementById(key);
    sound.play();
});