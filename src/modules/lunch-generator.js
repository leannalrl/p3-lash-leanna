class LunchGenerator{
  constructor(lunch){
    this.lunch = lunch;
  }
}

let lunchlist = [{
    idLunch: 1,
    lunchName: 'Ham Sandwich',
	lunchingredients: 'Baggett, Provalone Cheese, & Honey Backed Ham.'
  },
  {
    idLunch: 2,
    lunchName: 'Turkey Sandwich',
	lunchingredients: 'Baggett, Provalone Cheese, Mayo, & Turkey.'
  },
  {
    idLunch: 3,
    lunchName: 'Apple Pie',
	lunchingredients: 'Pie Crust, Apple, & Cinnamon.'
  },
   {
    idLunch: 4,
    lunchName: 'Pumpkin Pie',
	lunchingredients: 'Pie Crust, Pumpkin, & Whipped Cream.'
  },
 {
    idLunch: 5,
    lunchName: 'Broccoli and Potato Casserol',
	lunchingredients: 'Broccoli, Potato, Parmesan Cheese, Milk, Flour, & Butter.'
  },
 {
    idLunch: 6,
    lunchName: 'Stew',
	lunchingredients: 'Carrots, Potatoes, Beef, & Tomatoes.'
  },
 {
    idLunch: 7,
    lunchName: 'French Onion Soup',
	lunchingredients: 'Parmesan Cheese, Onions, Onion Powder, Parsley Flakes, Celery, Paprika, and black Pepper.'
  },

 {
    idLunch: 8,
    lunchName: 'Pigs in a Blanket',
	lunchingredients: 'Mini Hotdogs & Cresent Rolls.'
  },
 {
    idLunch: 9,
    lunchName: 'Chili',
	lunchingredients: 'Ground Beef, Onion, Stewed Tomatoes, Tomato Sauce, Kidney Beans, Chili Powder, Gralic Powder, Salt, & Pepper.'
  },
 {
    idLunch: 10,
    lunchName: 'Mac & Cheese',
	lunchingredients: 'Melted Butter, Flour, Salt, Pepper, Cheese, & Noodles.'
  },
];

function GetLunch() {
  var random_num = Math.floor(Math.random() * lunchlist.length);
  var random =  lunchlist[random_num].lunchName + "<br>" + lunchlist[random_num].lunchingredients;
  document.getElementById("message").innerHTML = random;
}


export const lunchlist = new LunchGenerator('Christmas Lunch Generator 2020');
