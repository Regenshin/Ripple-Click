document.addEventListener("click", createRipple);

function createRipple(event) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    document.body.appendChild(ripple);

    const rect = event.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height)* 0.1;

    const colors = ["#ff0000", "#0000FF", "#FFFFFF"];
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x - size / 2 + "px";
    ripple.style.top = y - size / 2 + "px";

    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });
}

