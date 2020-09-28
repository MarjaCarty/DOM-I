const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav

let keys = Object.keys(siteContent.nav);

for (let i = 0; i < keys.length - 1; i++) {
  let link = document.querySelector(`nav a:nth-of-type(${i + 1})`);
  link.href = keys[i];
  link.textContent = siteContent["nav"][`nav-item-${i + 1}`];
  console.log(link);
}

// CTA

document.querySelector(".cta-text h1").textContent = siteContent.cta.h1;
document.querySelector(".cta-text button").textContent = siteContent.cta.button;
document.querySelector(".cta #cta-img").src = siteContent.cta["img-src"];

// Main Content

let textContentsh4 = document.querySelectorAll(".text-content h4");
console.log(textContentsh4);

textContentsh4[0].textContent = siteContent["main-content"]["features-h4"];
textContentsh4[1].textContent = siteContent["main-content"]["about-h4"];
textContentsh4[2].textContent = siteContent["main-content"]["services-h4"];
textContentsh4[3].textContent = siteContent["main-content"]["product-h4"];
textContentsh4[4].textContent = siteContent["main-content"]["vision-h4"];

document.querySelector("#middle-img").src =
  siteContent["main-content"]["middle-img-src"];

let textContentp = document.querySelectorAll(".text-content p");

textContentp[0].textContent = siteContent["main-content"]["features-content"];
textContentp[1].textContent = siteContent["main-content"]["about-content"];
textContentp[2].textContent = siteContent["main-content"]["services-content"];
textContentp[3].textContent = siteContent["main-content"]["product-content"];
textContentp[4].textContent = siteContent["main-content"]["vision-content"];

// Contact

document.querySelector(".contact h4").textContent =
  siteContent["contact"]["contact-h4"];

document.querySelector(".contact p").textContent =
  siteContent["contact"]["address"];
document.querySelector(".contact p:nth-of-type(2)").textContent =
  siteContent["contact"]["phone"];
document.querySelector(".contact p:nth-of-type(3)").textContent =
  siteContent["contact"]["email"];

// Footer
document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];

//New Content

let link1 = document.createElement("a");
link1.textContent = "New";

let link2 = document.createElement("a");
link2.textContent = "Item";

document.querySelector("nav").appendChild(link1);
document.querySelector("nav").prepend(link2);

///////////////////////////////////////////

let allLinks = document.querySelectorAll("nav a");

allLinks.forEach((link) => {
  link.style.color = "green";
});

//////////////////////////////////////////
