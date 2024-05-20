let APIKEY = "LWPqPGlzWB3wJs45UZ2d3hPIVwoUnBTi";
let url = `https://api.giphy.com/v1/gifs/random?api_key=LWPqPGlzWB3wJs45UZ2d3hPIVwoUnBTi&tag=raccoon&rating=g`;
console.log(url);
fetch(url)
.then(response => response.json())
.then(content => {
    //  data, pagination, meta
    console.log(content.data);
    console.log("META", content.meta);
    let fig = document.createElement("figure");
    let img = document.createElement("img");
    let fc = document.createElement("figcaption");
    img.src = content.data.images.downsized.url;
    img.alt = content.data.title;
    fc.textContent = content.data.title;
    fig.appendChild(img);
    fig.appendChild(fc);
    let out = document.querySelector(".out");
    out.insertAdjacentElement("afterbegin", fig);
})
.catch(err => {
    console.error(err);
});