import "./App.css";

const data1 = [
  "Great Wall of China",
  "Christ the Redeemer (Rio de Janeiro)",
  "Machu Picchu (Peru)",
  "Chichen Itza (Mexico)",
  "Roman Colosseum",
  "Taj Mahal, India",
  "Petra, Jordan",
];

const data2 = [
  {
    name: "Great Wall of China",
    img: "https://www.thomascook.in/blog/wp-content/uploads/2018/02/the-great-wall-2190047_960_720-e1517999791900.jpg",
    content: [
      "At 5,500 miles, the Great Wall of China is the world’s longest manmade structure, built to protect the Chinese Empire from the invading Mongols.",
      "But the number is actually larger, more than 13,000 miles, if one considers the area of the wall built over thousands of years. To get an idea of this length, consider the fact that the Equator is 24,000 miles.",
      "And no, unlike popular myth, this structure cannot be viewed from space unless using a visual aid. Sadly, somewhere around 1966-1976, many bricks from the wall were taken away to build homes and factories, else the entire structure would have been better preserved than it is now. It is believed that the structure is facing erosion and parts of the wall may disappear entirely in 20 years. It’s time for a visit, don’t you think?",
    ],
  },
  {
    name: "Christ the Redeemer (Rio de Janeiro)",
    img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/ChristTheRedeemer.jpg",
    content: [
      "The art deco-style Christ the Redeemer statue is perhaps the largest statue of Jesus in the world and it was built mostly through donations.",
      "The statue was designed in France and shipped to Brazil where it was recreated using reinforced concrete and a light colored stone from a nearby quarry.",
      "However, the stone is in short supply and restoration work is being done with a different stone, slowly turning the statue darker over time.",
      "The statue attracts more than 2 million visitors each year. Its mountain-top position also attracts lightning, and it gets hit 5-6 times a year.",
      "Once, the statue lost its thumb in a lightning strike. If you’re looking to buy or rent a house in Rio de Janeiro, be warned.",
      "Should your home offer you even the slightest glimpse of the statue, it will be priced higher than a similar house in the same area with no view.",
    ],
  },
  {
    name: "Machu Picchu (Peru)",
    img: "https://www.thomascook.in/blog/wp-content/uploads/2017/06/1024px-Machu_Picchu_Peru.jpg",
    content: [
      "No one really knows why the Incans abandoned the amazing city of Machu Picchu.",
      "Perched precariously between two towering Andean peaks, it isn’t just one structure but a complex of over 150 buildings including homes, baths, temples, and sanctuaries.",
      "The site is an incredible engineering marvel that allows the city to sit on the slope without sliding off.",
      "There is a 2400 feet water canal that will work even today with a few minor repairs.",
      "The walls are made from heavy granite that was rolled up the mountainside and the stones are chiseled to fit without needing any mortar.",
      "Visiting Machu Picchu isn’t for the fainthearted. You can get there by foot or by train, but it requires a lot of physical stamina as well as altitude conditioning.",
      "You don’t want to start walking up and realize that you can’t make it. The locals say that chewing on coca leaves is known to help.",
    ],
  },
  {
    name: "Chichen Itza (Mexico)",
    img: "https://www.thomascook.in/blog/wp-content/uploads/2019/10/Chichen-Itza-Mexico.jpg",
    content: [
      "Back in 800-1200, this city was a powerful trading center and was the political and economic hub of the Mayan civilization.",
      "The pyramid of Kukulkan, the most popular icon here, has four staircases, of 91 steps each. If you add the steps and then count the upper platform, you get the number 365, which is the length of the Haab Mayan calendar, something that we all follow even today.",
      "During the spring and summer equinox, the shadow of the pyramid falls in such a way that it creates the appearance of a feathered serpent – the body of the deity of Kukulkan – slithering down, ending with the sculpted head at the end of the staircase.",
      "Some structures are known for their unusual sounds. If you clap in front of the steps of the pyramid, it sounds like chirping of the quetzal, a bird with iridescent green plumage and typically red underparts, found in the forests of tropical America.",
      "And if you do the same in the Ball Court, it produces 9 echoes in the middle of the court.",
    ],
  },
  {
    name: "Roman Colosseum",
    img: "https://assets.traveltriangle.com/blog/wp-content/uploads/2017/05/Colosseum-Rome.jpg",
    content: [
      "The Colosseum is perhaps one of the most recognized ruins of the world. Forget its violent past for a moment and join us for a short tour around this engineering marvel.",
      "Did you know that the structure had a moveable shade that could cover the entire theater? When you have to sit in events, some lasting days, you would be thankful for this protection against the sun and elements.",
      "Did you know that despite seating 50,000-80,000 spectators, it could be evacuated in less than 15 minutes? Amazing!",
      "Entry to the colosseum was free to all. Often the emperor used events as a tactic to gain popularity. Some events also had free food. Can you even begin to imagine a free concert or sports match today?",
      "The colosseum has a basement with trapdoors to release animals and to quickly dispose-off the bodies. The grand arches once housed life-size bronze statues and the entire surface was covered with marble. Unfortunately, earthquakes and robbers took away much of its glory.",
    ],
  },
  {
    name: "Taj Mahal, India",
    img: "https://www.thomascook.in/blog/wp-content/uploads/2018/04/taj-mahal-deal_2722393b.jpg",
    content: [
      "Who hasn’t heard of the Taj Mahal? The most fascinating and perfect specimen of Muslim art in India, the mausoleum built by Shah Jahan for his wife Mumtaz Mahal is an amalgamation of architectural styles including Persian, Islamic, Turkish and Indian.",
      "Every inch of the white marble structure is beautifully decorated except the actual grave of Mumtaz Mahal because according to Islamic tradition, a grave cannot be adorned with decoration as it is an inappropriate expression of one’s ego.",
      "The Taj Mahal has been designed in such a way that the structure will fall away from the grave in case of any unforeseen event.",
      "And this collapse is a real concern since there is slow structural damage evident to surveyors.",
      "The icon has always been vulnerable during times of international hostility. To protect it from any attack, architects covered it with scaffolding that resembled nothing but a pile of bamboo from the air.",
    ],
  },
  {
    name: "Petra, Jordan",
    img: "https://www.thomascook.in/blog/wp-content/uploads/2019/10/Petra-Jorden.jpg",
    content: [
      "Call it Petra, Al-Batra or the Lost City; we are all just glad that this magnificent city is now one of the Seven Wonders of the World.",
      "Even though it’s built in the middle of the desert, its inhabitants were experts in water collection and through the construction of tunnels and chambers, supplied water to every corner of the city, even creating gardens and farms inside.",
      "Do you know that Petra is one of the oldest cities in the world, and it was an important trading center back in the first century BC?",
      "It had 20,000-30,000 people living in it and it is believed that a massive earthquake in AD 363 destroyed half the city after which it sat uninhabited for five centuries until it was rediscovered in 1812.",
      "The city is home to numerous incredible structures carved into stone – a 4,000-seat amphitheater and the El-Deir monastery are among the more famous.",
      "The world holds numerous treasures, and as world travelers, we must know the history behind them and seek out their secrets to truly appreciate our global heritage.",
      "If you’d like to visit any of these amazing wonders with Thomas Cook‘s World Tour Packages & we can customize an itinerary to suit your schedule.",
    ],
  },
];

function App() {
  return (
    <div className="app">
      <div className="headingDiv">
        <h2 className="upper-heading">7 wonders of the world</h2>
        <img
          src={
            "https://blog.thomascook.in/wp-content/uploads/2019/10/seven-wonders-of-the-world.jpg"
          }
          alt=""
        />
      </div>

      <div className="list-content-div">
        <p className="content-para">
          Below are the list of 7 Wonders Of The World :
        </p>
        <div className="list-div">
          <ol className="lists">
            {data1.map((ele) => (
              <li className="list">{ele}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="content-div">
        {data2.map((item) => {
          return (
            <div className="item-div">
              <h3 className="item-heading">{item.name}</h3>
              <div className="img-div">
                <img className="image" src={item.img} alt={item.name} />
              </div>
              <div className="item-content-div">
                {item.content.map((ele) => {
                  return <p className="content-para">{ele}</p>;
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="blog-owner">
        <p>Blog By Bharti Patel</p>
      </div>
    </div>
  );
}

export default App;
