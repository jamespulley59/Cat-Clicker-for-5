// model
var model = {

    cat: function (name, picture, clicks = 0) {
        this.name = name;
        this.picture = picture;
        this.clicks = clicks;
    },
    
 
cat1: new cat('My Little Kitty', 'images/cat1.jpg'),
cat2: new cat('Cat and his Clown', 'images/cat2.jpg'),
cat3: new cat('cat3', 'images/cat3.jpg'),
cat4: new cat('cat4', 'images/cat4.jpg'),
cat5: new cat('cat5', 'images/cat5.jpeg'),

cats: [cat1, cat2, cat3, cat4, cat5]
}

//octopus
var octopus = {
    getCats: function() {
        return model.cats;
    }
}

// view
var view = {
    init: function() {
        
const leftColumn = document.querySelector('.col-4');

const ul = document.createElement('ul');
ul.className = 'list-group';

for(let cat of octopus.getCats) {
    const li = document.createElement('li');
    li.className = 'list-group-item btn btn-block';
    li.textContent = cat.name;
    ul.appendChild(li);
    li.addEventListener('click', ()=>{
       render(cat);
    })

    ul.appendChild(li);
    }


 leftColumn.appendChild(ul);
},
 render: function(cat) {
    }
 

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
    rightColumn.appendChild(h2);
}
