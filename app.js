document.querySelectorAll(".tab").forEach(button => {
  button.addEventListener("click", () => {
    const page = button.closest("main");

    page.querySelectorAll(".tab").forEach(tab => {
      tab.classList.remove("active");
    });

    page.querySelectorAll(".tab-panel").forEach(panel => {
      panel.hidden = true;
      panel.classList.remove("active");
    });

    button.classList.add("active");

    const panel = page.querySelector(`#${button.dataset.tab}`);
    panel.hidden = false;
    panel.classList.add("active");
  });
});
