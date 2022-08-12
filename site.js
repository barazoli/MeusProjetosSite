class NavMenubar {
    constructor(cabecalhoMenu, cabecalhoLista, cabecalhoLinks){
        this.cabecalhoMenu = document.querySelector(cabecalhoMenu);
        this.cabecalhoLista = document.querySelector(cabecalhoLista);
        this.cabecalhoLinks = document.querySelectorAll(cabecalhoLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.cabecalhoLinks.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `menuLinkFade 0.5s ease forwards 
            ${index / 7 + 0.3}s`);
        })
    }

    handleClick(){
        this.cabecalhoLista.classList.toggle(this.activeClass)
        this.cabecalhoMenu.classList.toggle(this.activeClass)
        this.animateLinks();
    }

    addClickEvent(){
        this.cabecalhoMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.cabecalhoMenu) {
        this.addClickEvent();
        }
        return this;
    }
}

const navMenubar = new NavMenubar(
    ".navmenu",
    ".cabecalho-lista",
    ".cabecalho-menu-item",

);
navMenubar.init();