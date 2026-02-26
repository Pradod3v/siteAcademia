// Accordion Planos - Apenas 1 aberto
const plans = document.querySelectorAll(".plan");

plans.forEach(plan => {
    const header = plan.querySelector(".plan-header");
    const content = plan.querySelector(".plan-content");

    header.addEventListener("click", () => {

        plans.forEach(p => {
            if (p !== plan) {
                p.classList.remove("active");
                p.querySelector(".plan-content").style.maxHeight = null;
            }
        });

        if (plan.classList.contains("active")) {
            plan.classList.remove("active");
            content.style.maxHeight = null;
        } else {
            plan.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
});
// WhatsApp
function assinarPlano(plano){
    const numero="5541992073473";
    const mensagem=`Olá! Tenho interesse no ${plano}`;
    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`,"_blank");
}

// Scroll Reveal
const revealElements=document.querySelectorAll(".reveal");
function revealOnScroll(){
    revealElements.forEach(el=>{
        const windowHeight=window.innerHeight;
        const elementTop=el.getBoundingClientRect().top;
        if(elementTop<windowHeight-100){el.style.opacity="1";el.style.transform="translateY(0)";}
    });
}
window.addEventListener("scroll",revealOnScroll);
revealOnScroll();

// Modo Claro/Escuro
const themeToggle=document.getElementById("theme-toggle");
themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        themeToggle.innerHTML='<i class="fas fa-moon"></i>';
    }else{
        themeToggle.innerHTML='<i class="fas fa-sun"></i>';
    }
});
// Smooth Scroll aprimorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70, // compensa header fixo
                behavior: "smooth"
            });
        }
    });
});