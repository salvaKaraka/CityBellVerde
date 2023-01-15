const btnAbrirGaleriaDuplex = document.querySelector("#btn-abrir-galeria-duplex");
const btnAbrirGaleriaMonoambientes = document.querySelector("#btn-abrir-galeria-monoambientes");
const btnCerrarGaleriaDuplex = document.querySelector("#btn-cerrar-galeria-duplex");
const btnCerrarGaleriaMonoambientes = document.querySelector("#btn-cerrar-galeria-monoambientes");
const galeriaDuplex = document.querySelector("#galeria-duplex");
const galeriaMonoambientes = document.querySelector("#galeria-monoambientes"); 
var galeriaCerrada = true;

btnAbrirGaleriaDuplex.addEventListener("click",()=>{
    galeriaDuplex.showModal();
    galeriaCerrada=false;
});

btnAbrirGaleriaMonoambientes.addEventListener("click",()=>{
    galeriaMonoambientes.showModal();
    galeriaCerrada=false;
})

btnCerrarGaleriaDuplex.addEventListener("click",()=>{
    galeriaDuplex.close();
    galeriaCerrada=true;
})

btnCerrarGaleriaMonoambientes.addEventListener("click",()=>{
    galeriaMonoambientes.close();
    galeriaCerrada=true;
})

