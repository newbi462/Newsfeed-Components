/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
  //  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.
  ,
  {
    title: 'Step 5: Add a new article to the array',
    date: 'Oct 30st, 2019',
    firstParagraph: `Imagination is the key to painting. Put your feelings into it, your heart, it's your world. I can't think of anything more rewarding than being able to express yourself to others through painting. And just raise cain. See there, told you that would be easy.`,

    secondParagraph: `In nature, dead trees are just as normal as live trees. This is your world. A beautiful little sunset. Maybe there was an old trapper that lived out here and maybe one day he went to check his beaver traps, and maybe he fell into the river and drowned.`,

    thirdParagraph: `That's what painting is all about. It should make you feel good when you paint. Work on one thing at a time. Don't get carried away - we have plenty of time. You have freedom here. The only guide is your heart. Volunteering your time; it pays you and your whole community fantastic dividends.`
  },
  {
    title: 'ReadME says add a few Directions say one?',
    date: 'Oct 30st, 2019',
    firstParagraph: `Here's something that's fun. Just let these leaves jump off the brush The very fact that you're aware of suffering is enough reason to be overjoyed that you're alive and can experience it. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. Just relax and let it flow. That easy.`,

    secondParagraph: `Life is too short to be alone, too precious. Share it with a friend. Tree trunks grow however makes them happy. We'll do another happy little painting. If there's two big trees invariably sooner or later there's gonna be a little tree.`,

    thirdParagraph: `There's nothing wrong with having a tree as a friend. We'll throw some happy little limbs on this tree. Van Dyke Brown is a very nice brown, it's almost like a chocolate brown. Those great big fluffy clouds. We don't have to be concerned about it. We just have to let it fall where it will.`
  }


];

// Step 1: Create a function that creates a component. You will want your component to look like the template below:

function step1(arrIndexObject) {
//  <div class="article">
  let divArticlebox = document.createElement('div');
  divArticlebox.classList.add('article');
//    <h2>{title of the article}</h2>
  let h2Var = document.createElement('h2');
  h2Var.textContent = arrIndexObject.title;
  divArticlebox.appendChild(h2Var);
//    <p class="date">{date of the article}</p>
  let pDateVar = document.createElement('p');
  pDateVar.classList.add('date');
  pDateVar.textContent = arrIndexObject.date;
  divArticlebox.appendChild(pDateVar);
//    {three separate paragraph elements}
  let p1Var = document.createElement('p');
  p1Var.textContent = arrIndexObject.firstParagraph;
  divArticlebox.appendChild(p1Var);

  let p2Var = document.createElement('p');
  p2Var.textContent = arrIndexObject.secondParagraph;
  divArticlebox.appendChild(p2Var);

  let p3Var = document.createElement('p');
  p3Var.textContent = arrIndexObject.thirdParagraph;
  divArticlebox.appendChild(p3Var);

//    <span class='expandButton'></span>
  let spanVar = document.createElement('span');
  spanVar.textContent = "I NEED TO SEE THE BUTTON"; // this is the unicode she refranced \u25BC found at https://graphemica.com/%E2%96%BC
  spanVar.classList.add('expandButton');

//  Step 2: Add an event listener to the expandButton span.
// This event listener should toggle the class 'article-open' on the 'article' div.
  spanVar.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'black';
    spanVar.textContent = "Close Article"; // \u25b2 from the same site
    divArticlebox.classList.toggle("article-open");
  })// deed to make this CB the toggle reqested abnove

  divArticlebox.appendChild(spanVar);
//  </div>

//  Hint: You will need to use createElement more than once here!

//  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

/* DOM OUTSIDE COMPONET?
  const forcetoHold = document.querySelector('.articles');
  forcetoHold.appendChild(divArticlebox);
*/

  //Step 3: return the entire component.
  return divArticlebox;

};
step1(data[1]);//to call a test index


/*
    Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

    Step 3: return the entire component.
*/
//  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.
  const mapOver = data.map( index => step1(index)  );
  // ????? why do we need to map over rather than just loop out strait to dom?
  const forcetoHold = document.querySelector('.articles');
  mapOver.forEach(function(index) {
    forcetoHold.appendChild(index);
  });
