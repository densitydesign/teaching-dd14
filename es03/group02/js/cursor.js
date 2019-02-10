let cursor = document.querySelector('.cursor');
dot = cursor.querySelector('.cursor__inner--dot');
c_circle = cursor.querySelector('.cursor__inner--circle');
bounds = {
  dot: dot.getBoundingClientRect(),
  c_circle: c_circle.getBoundingClientRect()
};
c_scale = 1;
opacity = 1;
mousePos = { x: 0, y: 0 };
lastMousePos = { dot: { x: 0, y: 0 }, c_circle: { x: 0, y: 0 } };
lastScale = 1;
lastOpacity = 1;

window.addEventListener('mousemove', ev => (mousePos = getMousePos(ev)));

getMousePos = e => {
  let posx = 0;
  let posy = 0;
  if (!e) e = window.event;
  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }
  return { x: posx, y: posy };
};

requestAnimationFrame(() => render());

// function abstract(){

// }
const lerp = (a, b, n) => (1 - n) * a + n * b;
function render() {
  lastMousePos.dot.x = lerp(
    lastMousePos.dot.x,
    mousePos.x - bounds.dot.width / 2,
    1
  );
  lastMousePos.dot.y = lerp(
    lastMousePos.dot.y,
    mousePos.y - bounds.dot.height / 2,
    1
  );
  lastMousePos.c_circle.x = lerp(
    lastMousePos.c_circle.x,
    mousePos.x - bounds.c_circle.width / 2,
    0.15
  );
  lastMousePos.c_circle.y = lerp(
    lastMousePos.c_circle.y,
    mousePos.y - bounds.c_circle.height / 2,
    0.15
  );
  lastScale = lerp(lastScale, c_scale, 0.15);
  lastOpacity = lerp(lastOpacity, opacity, 0.1);
  dot.style.transform = `translateX(${lastMousePos.dot.x}px) translateY(${
    lastMousePos.dot.y
  }px)`;

  c_circle.style.transform = `translateX(${
    lastMousePos.c_circle.x
  }px) translateY(${lastMousePos.c_circle.y}px) scale(${lastScale})`;
  c_circle.style.opacity = lastOpacity;
  requestAnimationFrame(() => render());
}

function enter() {
  cursor.scale = 2.7;
}
function leave() {
  cursor.scale = 1;
}
