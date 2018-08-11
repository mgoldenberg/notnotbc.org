const colors = ["red", "orange", "gold", "green", "lightblue", "indigo", "violet"];
let links = document.links;
for(let i = 0; i < links.length; i++) {
    links[i].style.color = colors[i % colors.length];
}

