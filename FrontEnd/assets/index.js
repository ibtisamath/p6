// Récupération des éléments du DOM
const gallery = document.querySelector(".gallery")

// Fonction asynchrone pour effectuer une requête API et récupérer les œuvres
async function getworks() {
  const response = await fetch("http://localhost:5678/api/works");
  return await response.json();
}
getworks();

async function affichergetworks() {
  const arrayworks = await getworks();
  arrayworks.forEach((work) => {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    img.src = work.imageurl;
    figcaption.textContent = work.title;
    figure.appendchild(img);
    figure.appendchild(figcaption)
    gallery.appendchild(figure)
  });
}
affichergetworks();
