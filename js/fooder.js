function fooder(){

    let ol =
    `<h2 class="titulo" >Logo</h2>
    <section class="textoss" >
    <a class="l1" href="./home.html">Home</a>
    <a  class="l2" href="./abot.html">About</a>
    <a  class="l3" href="./contac.html">contac</a>
    
    <button class="dop">Drop</button>`;

    let dom = document.querySelector(".pie");
    dom.innerHTML = ol;

    return fooder;
};
fooder();