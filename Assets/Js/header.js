class Header extends HTMLElement {
     constructor() {
          super();
          const header = document.querySelector("header-component");
          const observer = new PerformanceObserver((list)=>{
               list.getEntries().forEach((item)=>{
                    // action can be done here
               })
          })
          observer.observe({type: "element", buffered: true})
          header.style.opacity = 0;
          // step3 brochure button
          const downloadBrouchreBtn = () =>{
               const dwndBtn = document.createElement("a");
               dwndBtn.setAttribute("id","dwnldBrcrBtn");
               const iconHolder = document.createElement("span");
               const btnContext = document.createElement("span");
               btnContext.innerText = "Download Brochure";
               // fetchIcon
               const iconFetchingHandler = async () =>{
                    const iconFetchResult = await fetch("../Assets/svg/dwnld.svg");
                    if(iconFetchResult.status === 200){
                         const iconFile = document.createElement("img");
                         iconFile.src = iconFetchResult.url;
                         iconHolder.appendChild(iconFile);
                         dwndBtn.appendChild(iconHolder);
                         dwndBtn.appendChild(btnContext);
                    }
                    header.appendChild(dwndBtn);
                    header.style.opacity = 1;
               }
               iconFetchingHandler();
          }
          // step2 header navigation loader
          const HeaderNavigationLoader = () =>{
               const navMenu = document.createElement("nav");
               const navLinks = document.createElement("ul");
               
               const navLinksArray = ["Home", "About Us", "Services", "Gallery", "Blog", "Contact Us"];
               navLinksArray.forEach((entry)=>{
                    const navListItem = document.createElement("li");
                    const activeIndicator = document.createElement("div");
                    activeIndicator.classList.add("activeIndicator");
                    navListItem.appendChild(activeIndicator);
                    const navLinksBg = document.createElement("div");
                    navLinksBg.classList.add("navLinksBg");
                    navListItem.appendChild(navLinksBg);
                    const navLink = document.createElement("a");
                    const trimmedUrl = entry.toLocaleLowerCase().replace(/\s/g, '');
                    // navLink.setAttribute("href",  trimmedUrl + "." +  "html");
                    navLink.setAttribute("href",  "javascript:void(0)");
                    navLink.innerHTML = entry;
                    navListItem.addEventListener("click", ()=>{
                         navActiveStatusHandler(navListItem);
                    })
                    navListItem.appendChild(navLink);
                    navLinks.appendChild(navListItem);
               })
               navMenu.appendChild(navLinks);
               header.appendChild(navMenu);
               const headerNav = header.querySelector("nav li a");
               headerNav.addEventListener("mouseover",(e)=>{
                    const headerBg = document.querySelector("header .navLinksBg");
                    // headerBg.style.opacity = 1;
                    const posX  = e.pageX;
                    const posY  = 0 - 12;
                    // headerBg.style.transform =  `translate(${posX}px, ${posY}px)`;  
                    console.log(posX)  
               })
               const headerNavLinks = document.querySelectorAll("header nav ul li");
               headerNavLinks[0].classList.add("active")
               
               const navActiveStatusHandler = (currentElem) =>{
                    headerNavLinks.forEach((headerNavLink)=>{
                         headerNavLink.classList.remove("active")
                    })
 
                    currentElem.classList.add("active")

               }
               // headerNavLinks[0].appendChild(activeIndicator);



               header.style.display = "flex";
               header.style.width = 100 + "%";
               header.style.alignItems = "center";
               header.style.justifyContent = "space-between";
               header.style.gap = "12px";
               downloadBrouchreBtn();
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
          document.querySelector('#header').setAttribute("elementtiming", "myHeader");


