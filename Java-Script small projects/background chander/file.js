const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?fit=700,700",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "https://imgmedia.lbb.in/media/2019/08/5d662c8ea84656a7661be92a_1566977166741.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "https://www.discovermyindia.in/wp-content/uploads/2020/03/kerala_sadya-scaled.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?cs=srgb&dl=cuisine-delicious-dinner-958546.jpg&fm=jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?cs=srgb&dl=cuisine-delicious-dinner-958546.jpg&fm=jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?cs=srgb&dl=cuisine-delicious-dinner-958546.jpg&fm=jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?cs=srgb&dl=cuisine-delicious-dinner-958546.jpg&fm=jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?cs=srgb&dl=cuisine-delicious-dinner-958546.jpg&fm=jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?cs=srgb&dl=cuisine-delicious-dinner-958546.jpg&fm=jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const container = document.querySelector('.container');

  window.addEventListener('DOMContentLoaded',function(){
    let displayMenu = menu.map(function(item){
        return `
        <div class="block">
        <div class="item">
          <div class="image">
            <img src="${item.img}" alt="menuimg" srcset="">
          </div>
          <div class="detail">
            <h1>${item.title}</h1>
            <h5>${item.price} Rs</h5>
            <div class="underline"></div>
            <div class="item-detail">${item.desc}
            </div>
          </div>
        </div>
      </div>
        `
    })
    displayMenu = displayMenu.join("");
    console.log(displayMenu)
    container.innerHTML = displayMenu;
  })