function multi(m){

    let prodcs = `
    <section class="vacio">
        <img class="fondo1" src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt="">

    </section >

    <div class = "tec">
        <h1 class="${m}">${prod[m].mensaje}</h1>
        <h1 class="${m}">${prod[m].texto} </h1>
    </div>`;

return prodcs;
};


function multiss(){
let varia1 = document.querySelector(".tec")
    prod.forEach((Element, indice) => {

    let drd = document.createElement("div");

    drd.innerHTML=multi(indice)

    varia1.appendChild(drd);
 })
}
multiss();

