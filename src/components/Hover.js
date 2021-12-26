export default function hover(id) {
    let element = document.getElementById(id);
    if (element.classList.contains("active")) {
        element.style.display = "block";
        element.nextElementSibling.style.display = "none";
        element.classList.remove("active");
    } else {
        element.style.display = "none";
        element.nextElementSibling.style.display = "block";
        element.classList.add("active");
    }
}