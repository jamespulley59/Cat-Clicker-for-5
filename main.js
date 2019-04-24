// all cats have/are this
class cat {
    constructor(name, picture, clicks = 0) {
        this.name = name;
        this.picture = picture;
        this.clicks = clicks;
    }
}
// changes cat name/picture into usable/short form; ie., 'cat3' 
const cat1 = new cat('My Little Kitty', 'images/cat1.jpg')
const cat2 = new cat('Cat and his Clown', 'images/cat2.jpg')
const cat3 = new cat('cat3', 'images/cat3.jpg')
const cat4 = new cat('cat4', 'images/cat4.jpg')
const cat5 = new cat('cat5', 'images/cat5.jpeg')

// list of cats
const cats = [cat1, cat2, cat3, cat4, cat5];

// select left column in dom
const leftColumn = document.querySelector('.col-4');
// says we'll have a list grouped together and call it 'list-group'
const ul = document.createElement('ul');
ul.className = 'list-group';
// list group consists of list-group-item called 'li'
// says text = cat name
// addEventListener is clicker/btn that works when you click cat picture
// append child means ...............................
// ? this info is added to parent/dom ?
for(let cat of cats) {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = cat.name;
    ul.appendChild(li);
    li.addEventListener('click', ()=>{
       displayCat(cat);
    })

    ul.appendChild(li);
}
// all the above stuff effects left column/list of clickable cat names
 leftColumn.appendChild(ul);
// says displayCat means cat will: 
// select right column in dom
// says right column stuff is coming from inner HTML, but where?...........
// creates sometghing called h1, and h1 defines font size
// says h1 is the cats name
// appendChild adds all this displayCat info to right column
const displayCat = (cat) => {
    const rightColumn = document.querySelector('.col-8');
    rightColumn.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.textContent = cat.name;
    rightColumn.appendChild(h1);
// create something called img
// img will pull from source in model to change
// alt name in case of break?.............................
// eventlistener recognizes user did something (clicked a button) {is what octopus 
// tells model to do}...
// increase by 1 every click,  model tels octopus to tell view...
// displays number of clicks
    const img = document.createElement('img');
    img.setAttribute('src', cat.picture);
    img.setAttribute('alt', 'cat');
    img.addEventListener('click', ()=>{
        cat.clicks++;
        h2.textContent = `Clicks: ${cat.clicks}`; 
    })
    // belongs to right column
    rightColumn.appendChild(img);
    // shouldn't this below be before appendChild. 
    // ???????????appendChild only once for both (img, h2)
    
    //creates h2
    //something is duplicating between img h2. did i copy wrong
    const h2 = document.createElement('h2');
    h2.textContent =`Clicks: ${cat.clicks}`;    
    rightColumn.appendChild(h2);
}

