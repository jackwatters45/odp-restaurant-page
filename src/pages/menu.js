export default function menu() {
  const menu = document.createElement('div');
  menu.classList.add('main-content');

  const platters = document.createElement('div');
  platters.classList.add('menu-section');
  platters.innerHTML = 'Platters';
  const plattersList = document.createElement('ul');
  plattersList.innerHTML = `<li><strong>Cheese is a funny thing</strong> block of cheese, old cheese, cottage cheese, crow
      egg, quail egg</li>
  <li><strong>Dee's a Giant Bird</strong> crow, dragon, human meat (racoon), barnacles, deleware
      river runoff crab, pigeon</li>
  <li><strong>All the Best Foods are Blue</strong> blueberries, blue powerade, blue sludge</li>
  <li><strong>Get out of Jail</strong> all the ingredients of a cake</li>`;
  platters.appendChild(plattersList);
  menu.appendChild(platters);

  const entres = document.createElement('div');
  entres.classList.add('menu-section');
  entres.innerHTML = 'Entres';
  const entresList = document.createElement('ul');
  entresList.innerHTML = `<li><strong>Milk Steak</strong> boiled in milk over hard w/ a side of jelly beans</li>
  <li><strong>Denim Chicken</strong> fried and served in jeans</li>
  <li><strong>Mac's Famous Mac and Cheese</strong> made with the love of a happy suburban household</li>
  <li><strong>Bagged Spagetti</strong> what is your spaghetti policy here?</li>
  <li><strong>Rum Ham</strong> soaked in rum having two pineapple rings for eyes and a red cherry for a nose</li>
  <li><strong>Chimichanga in a Trash Bag</strong> breathe and eat! Separately!</li>`;
  entres.appendChild(entresList);
  menu.appendChild(entres);

  const sandwiches = document.createElement('div');
  sandwiches.classList.add('menu-section');
  sandwiches.innerHTML = 'Sandwiches';
  const sandwichesList = document.createElement('ul');
  sandwichesList.innerHTML = `<li><strong>Grilled Charlie</strong> two slices of bread, cheese and peanut butter on the outside
  and chocolate syrup and butter on the inside</li>
  <li><strong>Grilled Frank</strong> pancake with jelly with a whole stick of butter with bacon,
  sausage, and spam</li>
  <li><strong>Hoagie in Your Mouth</strong> tastes better if you make it in your mouth</li>
  <li><strong>Chicken Sandwich</strong> prepared with beak, the way charlie likes it</li>`;
  sandwiches.appendChild(sandwichesList);
  menu.appendChild(sandwiches);

  const drinks = document.createElement('div');
  drinks.classList.add('menu-section');
  drinks.innerHTML = 'Entres';
  const drinksList = document.createElement('ul');
  drinksList.innerHTML = `<li><strong>Fight Milk</strong> a mixture of crow egg, milk, and vodka</li>
  <li><strong>Riot Punch</strong> grain alcohol and punch</li>
  <li><strong>Monkey Beer</strong> beer, whiskey, and human milk</li>
  <li><strong>Wine in coke can</strong> frank's incredibly inconspicuous concoction</li>
  <li><strong>Basement Juice</strong> green paint</li>`;
  drinks.appendChild(drinksList);
  menu.appendChild(drinks);

  const content = document.querySelector('#content');
  content.appendChild(menu);
}
