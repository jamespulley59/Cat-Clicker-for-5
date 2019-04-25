// model 
class cat {
       constructor(name, picture, clicks = 0) {
        this.name = name;
        this.picture = picture;
        this.clicks = clicks;
    }
}
var model = {
 
cats: [
new cat('My Little Kitty', 'images/cat1.jpg'),
new cat('Cat and his Clown', 'images/cat2.jpg'),
new cat('cat3', 'images/cat3.jpg'),
new cat('cat4', 'images/cat4.jpg'),
new cat('cat5', 'images/cat5.jpeg'),
],
addCat: function(catName, catPicture) {         const cat = {
        name: catName,
        picture: catPicture,
        clicks: 0
    }
    model.cats.push(cat);
}
}

//octopus
var octopus = {
    getCats: function() {
        return model.cats;
    },
    addCat: function(catName, catPicture) {
        model.addCat(catName, catPicture);
    }
}

// view
var view = {
    init: function() {
        const leftColumn = document.querySelector('.col-4');
        leftColumn.innerHTML = '';

        const ul = document.createElement('ul');
        ul.className = 'list-group';

        for(let cat of octopus.getCats()) {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = cat.name;
            ul.appendChild(li);
            li.addEventListener('click', ()=>{
                this.render(cat);
            })
            ul.appendChild(li);
        }
        leftColumn.appendChild(ul);
        //add admin btn
        const adminBtn = document.createElement('button');
        adminBtn.textContent = 'Add New Cat';
        adminBtn.className = 'btn btn-warning mt-3';
        adminBtn.addEventListener('click', this.showForm);
        leftColumn.appendChild(adminBtn);

        const form = document.createElement('form');
        form.addEventListener('submit', this.addCat);
        leftColumn.appendChild(form);      
        },
    render: function(cat) {  
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
    },
    showForm: function() {
        const form = document.querySelector('form');          
        form.innerHTML = '';
        // name
        const nameGroup = document.createElement('div');
        nameGroup.className = 'form-group';

        const nameLabel = document.createElement('label');
        nameLabel.textContent = 'Cat Name';
        nameLabel.setAttribute('for', 'catName');

        const nameInput = document.createElement('input');
        nameInput.className = 'form-control';    
        nameInput.setAttribute('id', 'catName');

        nameGroup.appendChild(NameLabel);
        nameGroup.appendChild(nameInput);
        form.appendChild(nameGroup); 
        // img
        const imgGroup = document.createElement('div');
        imgGroup.className = 'form-group';

        const imgLabel = document.createElement('label');
        imgLabel.textContent = 'Cat Picture';
        imgLabel.setAttribute('for', 'catPicture');

        const imgInput = document.createElement('input');
        imgInput.className = 'form-control';    
        imgInput.setAttribute('id', 'catPicture');

        imgGroup.appendChild(imgLabel);
        imgGroup.appendChild(imgInput);
        form.appendChild(imgGroup); 
    
        const submitBtn = document.createElement('button');
        submitBtn.textContent = 'Submit';
        submitBtn.className = "btn btn-success";
        form.appendChild(submitBtn);

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.className = "btn btn-danger float-right";
        cancelBtn.setAttribute('type', 'button');
        cancelBtn.addEventListener('click', ()=>{
            form.innerHTML = '';
        })
        form.appendChild(cancelBtn);    
    },
    addCat: function(e) {
        e.preventDefault();
        const catName = document.querySelector('#catName').value;
        const catPicture = document.querySelector('#catPicture').value;
        octopus.addCat(catName, catPicture);
        view.init();
    }
}

view.init();
