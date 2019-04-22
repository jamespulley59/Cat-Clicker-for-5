class cat {
    constructor(name, picture, clicks = 0) {
        this.name = name;
        this.picture = picture;
        this.clicks = clicks;
    }
}

const cat1 = new cat('My Little Kitty', 'images/cat1.jpg')
const cat2 = new cat('Cat and his Clown', 'images/cat2.jpg')
const cat3 = new cat('cat3', 'images/cat3.jpg')
const cat4 = new cat('cat4', 'images/cat4.jpg')
const cat5 = new cat('cat5', 'images/cat5.jpeg')

// list of cats
const cats = [cat1, cat2, cat3, cat4, cat5];

// select left column in dom
const leftColumn = document.querySelector('.col-4');

const ul = document.createElement('ul');
ul.className = 'list-group';

for(let cat of cats) {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = cat.name;
    ul.appendChild(li);
    li.addEventListener('click', ()=>{
       displayCat(cat);
    })

    ul.appendChild(li)
}
 leftColumn.appendChild(ul);

const displayCat = (cat) => {
    const rightColumn = document.querySelector('.col-8');
    rightColumn.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.textContent = cat.name;
    rightColumn.appendChild(h1);

    const img = document.createElement('img');
    img.setAttribute('src', cat.picture);
    img.setAttribute('alt', 'cat');
    img.addEventListener('click', ()=>{
        cat.clicks++;
        h2.textContent = `Clicks: ${cat.clicks}`; 
    })
    rightColumn.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent =`Clicks: ${cat.clicks}`;
    //h2.textContent = 'Clicks: ' + cat.clicks:
    rightColumn.appendChild(h2);
}

