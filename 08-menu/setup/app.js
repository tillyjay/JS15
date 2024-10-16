//items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


//select HTML elements
const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');


//load items - add event listener to window object, runs code only after HTML doc has been loaded but not everything else like stylesheets 
window.addEventListener('DOMContentLoaded', () => {
  //call function with menu arrary as argument
  displayMenuItems(menu);
});


//filter items
//loop through each button and attach event listner to each one
filterBtns.forEach(btn => {
  //listen for click event on each button,'e' is event object that contains info about event ('click' event in this case)
  btn.addEventListener('click', (e) => {
    //'e.currentTarget' refers to element event listner is attached to (clicked button)
    //'dataset.id' accesses 'data-id' attribute of button, 'data-id' stores category ID for filtering
    const category = e.currentTarget.dataset.id;
    //filter menu array based on category of clicked button
    const menuCategory = menu.filter((menuItem) => {
      //if category of menuItem matches selected category, return menuItem
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    // category is 'all', display all items
    if (category === 'all') {
      displayMenuItems(menu);
    } else {
      //else display filtered item based on selected category
      displayMenuItems(menuCategory);
    }

   });
});


//display menu items function with menuItems param
const displayMenuItems = (menuItems) => {
    //iterate over array, for each item in array generate HTML strcture representing an article for menu item
    let displayMenu = menuItems.map((item) => {
      //return template literal creating article element for each menu item, dynamically inserts data  
      return `<article class="menu-item">
                <img src="${item.img}" class="photo" alt="${item.title}" />
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price}</h4>
                  </header>
                    <p class="item-text">${item.desc}</p>
                </div>
              </article>`;
      });
      //join HTML strings into single string, .join('') is used to remove comas between array elements
      displayMenu = displayMenu.join('');
      //insert single HTML block into 'section-center', displays menu items dynamically
      sectionCenter.innerHTML = displayMenu;
}