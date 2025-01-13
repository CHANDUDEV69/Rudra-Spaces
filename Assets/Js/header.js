class Header extends HTMLElement {
     constructor() {
          super();
          const header = document.querySelector("header-component");
          // step3 brochure button
          const downloadBrouchreBtn = () =>{
               
          }
          // step2 header navigation loader
          const HeaderNavigationLoader = () =>{
               const navMenu = document.createElement("nav");
               const navLinks = document.createElement("ul");
               const navLinksArray = ["Home", "About Us", "Services", "Gallery", "Blog", "Contact Us"];
               navLinksArray.forEach((entry)=>{
                    const navListItem = document.createElement("li");
                    const navLink = document.createElement("a");
                    const trimmedUrl = entry.toLocaleLowerCase().replace(/\s/g, '');
                    navLink.setAttribute("href",  trimmedUrl + "." +  "html");
                    navLink.innerHTML = entry;
                    navListItem.appendChild(navLink);
                    navLinks.appendChild(navListItem);
               })
               navMenu.appendChild(navLinks);
               header.appendChild(navMenu);
               header.style.display = "flex";
               header.style.width = 100 + "%";
               header.style.alignItems = "center";
               header.style.justifyContent = "space-between";
               header.style.gap = "12px"
          }
          // step1 fetch logo image
          async function logoImageLoader(){
               const logoWrappper = document.createElement('div');
               logoWrappper.classList.add('logo-wrapper');
               logoWrappper.classList.add("loading");
               const result = await fetch('../Assets/Images/logo.png');
               if(result.status == 200){
                    const logoImg = new Image();
                    logoImg.src = '../Assets/Images/logo.png';
                    logoImg.style.width = "100%";
                    logoWrappper.style.width = "180px";
                    logoWrappper.appendChild(logoImg);
                    logoImg.setAttribute('id','logo-wrapper');
                    logoImg.setAttribute("elementtiming",'logo');
                    header.appendChild(logoWrappper);
                         HeaderNavigationLoader();
                    }
          }
          logoImageLoader();
     }
}
          customElements.define('header-component', Header);
          document.querySelector('#header').innerHTML = `<header-component></header-component>`;


