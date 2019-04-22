class cat {
    constructor(name, picture, clicks = 0) {
        this.name = name;
        this.pictuer = picture;
        this.clicks = clicks;
    }
}
const cat1 = new cat('My Little Kitty', 'img/cat.jpg')
const cat1 = new cat('Cat and his Clown', 'img/cat.jpg')
const cat1 = new cat('cat3', 'img/cat.jpg')
const cat1 = new cat('cat4', 'img/cat.jpg')
const cat1 = new cat('cat5', 'img/cat.jpg')

const cats = [cat1, cat2, cat3, cat4, cat5];

const leftColumn = document.querySelector('.col-4');

const ul = document.createElement('ul');
ul.className = 'list-group';

for(let cat of cats) {
    const li = document.createElement('li');
    li.textContent = cat.name;
    li.addEventListener('click', ()=>{
        displayCat(cat);
    })
    ul.appendChild(li);

}

leftColumn.appendChild(ul);

const displayCat = (ul);
const rightcolumn = document.querySelector('.col-8');
rightColumn.innerHTML = '';
const h1 = document.createElement('h1');
h1.textContent = cat.name;
rightColumn.appendChild(h1);

const img = document.createElement('img');
img.setAttribute('src', cat.picture);
img.setAttribute('alt', 'cat');
img.addEventListener('click', ()=>{
    cat.clicks++;
    h2.textContent
} )
rightColumn.appendChild(img);

const h2 = documnet.createElement('h2');
h2.textContent =`Clicks: ${cat.clicks}`;
//h2.textContent = 'Clicks: ' + cat.clicks:
rightColumn.appendChild(h2);


