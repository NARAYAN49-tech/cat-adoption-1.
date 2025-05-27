
let body = document.querySelector("body");
let astra = document.createElement("header");
let h1 = document.createElement("h1");
h1.innerText = "Header";
let ul = document.createElement("ul");
ul.style.display = "flex";
ul.style.gap = "20px";
["Home","Decor","Products","Contacts","Orders"].forEach((e) => {
    let li = document.createElement("li");
    li.innerText = e;
    li.style.listStyle = "none";
    ul.append(li);
    li.style.outlineOffset = "blue 10px";
    li.style.fontSize = "20px";
    li.style.transition = "ease-in-out";
    li.addEventListener("mouseenter",()=>{
        li.style.fontSize = "22px";
                li.style.position = "sticky";
        li.style.transition = "ease-in-out";
    });
    li.addEventListener("mouseleave",()=>{
        li.style.fontSize = "20px";
               li.style.position = "sticky";
        li.style.transition = "ease-in-out";
    });
    li.addEventListener("mouseover",()=>{
        li.style.fontSize = "22px";
                li.style.position = "sticky";
        li.style.transition = "ease-in-out";
    });
    li.addEventListener("click",()=>{
        li.style.fontSize = "22px";
        li.style.position = "sticky";
        li.style.transition = "ease-in-out";
    });
});
let btn = document.createElement("button");
btn.innerText = "Sign Up";
btn.style.fontSize = "25px";
btn.style.width = "150px";
btn.style.height = "50px";
btn.style.borderRadius = "20px";
btn.style.transition = "ease-in-out";
btn.addEventListener("click",()=>{
    btn.style.fontSize = "27px";
    btn.style.transition = "ease-in-out";
    btn.style.height = "55px";
    btn.style.width = "150px";
   
});

btn.addEventListener("mouseenter",()=>{
    btn.style.fontSize = "27px";
    btn.style.transition = "ease-in-out";
    btn.style.height = "55px";
    btn.style.width = "120px";
  
});
    btn.style.backgroundColor = "white";
    btn.style.color = color();
btn.addEventListener("mouseleave",()=>{
    btn.style.fontSize = "25px";
    btn.style.transition = "ease-in-out";
    btn.style.height = "50px";
    btn.style.width = "150px";
});

astra.append(h1, ul, btn);
// astra.append(ul);
// astra.append(btn);
body.prepend(astra);
astra.style.height ="100px";
function color() {
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    let rgb = `rgb(${red},${green},${blue})`;
    return rgb;
};
console.log("THE COLOR : ",color);
astra.style.backgroundColor = color();
astra.style.color = "white";
astra.style.outline = "4px blur gray";
astra.style.display = "flex";
astra.style.justifyContent = "space-around";
astra.style.alignItems  = "center";
//header section over
setTimeout(()=>{
let division = document.createElement("div");
division.style.backgroundColor = color();
division.style.height = "80px";
division.style.width = "100%";
let h1 = document.createElement("h1");
h1.style.color = color(); 
h1.innerText = "One moment can change a day, one day can change a life, and one life can change the world.";
division.append(h1);
h1.style.justifyContent = "center";
h1.style.alignItems = "center";

astra.insertAdjacentElement("afterend",division);

//  main body section starts
let container = document.createElement("main");
let subContainer1 = document.createElement("div");
for(let i=0; i<12; i++) {
    let cards = document.createElement("div");
    cards.style.height = "300px";
    cards.style.width = "250px";
    cards.style.border = "3px solid";
    cards.style.borderRadius = "10px";
    cards.style.backgroundColor = color();
    cards.style.justifyContent = "center";
    cards.style.alignItems = "center";
    cards.style.color = color();
    let img = document.createElement("img");
    
    let url = "https://api.thecatapi.com/v1/images/search";

    async function imagess(link) {
        let imagesss = await axios.get(link);
        let imgUrl = imagesss.data[0].url;
        img.setAttribute("src",imgUrl);
        return imagesss.data[0].url;
    }
    imagess(url);
    // img.setAttribute("src",imagess(url));
    img.setAttribute("alt","cats image");
    img.style.boxSizing = "border-box";
    img.style.objectFit = "cover";
    img.style.width = "100%";
    img.style.height = "80%";
    cards.append(img);
    let btnss = document.createElement("button");
    btnss.innerText = "View Cats Features";
    btnss.style.height = "10%";
    btnss.style.width = "80%";
    cards.append(btnss);
    btnss.style.margin = "15px";
    btnss.style.justifyContent = "center";
    btnss.style.alignItems = "center";
    btnss.style.color = color();
    btnss.style.fontSize = "15px";
    btnss.style.textAlign = "center";
    subContainer1.append(cards);

}
subContainer1.style.gap = "25px";
subContainer1.style.display = "flex";
subContainer1.style.justifyContent = "center";
subContainer1.style.alignItems = "center";
subContainer1.style.flexWrap = "wrap";
container.style.marginTop = "25px";
container.append(subContainer1);
division.insertAdjacentElement("afterend",container);
    
},10000);
// body section ends

// footer section starts
let footer = document.createElement("footer");
footer.style.display = "flex";
let company = document.createElement("div");
let logo = document.createElement("h1");
logo.innerText = "Header";
let h3 = document.createElement("h3");
h3.innerText = "Header Head Office, 204, Keshar Tower, Amanora, Pune";
company.append(logo, h3);
footer.append(company);
company.style.width = "500px";



let logos = document.createElement("div");
['<i class="fa-brands fa-linkedin"></i>','<i class="fa-brands fa-staylinked"></i>','<i class="fa-brands fa-google"></i>','<i class="fa-brands fa-google-play"></i>','<i class="fa-brands fa-facebook"></i>','<i class="fa-brands fa-square-instagram"></i>','<i class="fa-brands fa-square-whatsapp"></i>','<i class="fa-brands fa-x-twitter"></i>'].forEach((el) =>{
    let img = document.createElement("img");
    img.setAttribute("src",el);
    logos.append(img);
});

footer.append(logos);
footer.style.justifyContent = "space-around";
footer.style.alignItems = "center";
footer.style.height = "150px";
footer.style.marginTop = "50px";
footer.style.backgroundColor = color();
// container.insertAdjacentElement("afterend",footer);
body.append(footer);
let url = "https://dog.ceo/api/breeds/image/random";
let image = fetch(url).then((res) => {
    console.log("result ||| ",res);
    return res.json();
}).then((data)=>{
    console.log("data::",data);
    let img = document.createElement("img");

}).catch((err) => {
    console.log("error :||: ",err);
    
});
console.log(image);
