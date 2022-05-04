const questions = [
  {
    questionText: "The series Friends is set in which city?",
    answerOptions: [
      { answerText: "New York", isCorrect: true },
      { answerText: "Los Angeles", isCorrect: false },
      { answerText: "Miame", isCorrect: false },
      { answerText: "Seattle", isCorrect: false },
    ],
  },
  {
    questionText: "What pet did Ross own?",
    answerOptions: [
      { answerText: "A dog named Keith", isCorrect: false },
      { answerText: "A rabbit called Lancelot", isCorrect: false },
      { answerText: "A monkey named Marcel", isCorrect: true },
      { answerText: "A lizard named Alistair", isCorrect: false },
    ],
  },
  {
    questionText: "What is Monica skilled at?",
    answerOptions: [
      { answerText: "Bricklaying", isCorrect: false },
      { answerText: "Cooking", isCorrect: true },
      { answerText: "American football", isCorrect: false },
      { answerText: "Singing", isCorrect: false },
    ],
  },
  {
    questionText:
      "Monica briefly dates billionaire Pete Becker. Which country does he take her for their first date?",
    answerOptions: [
      { answerText: "France", isCorrect: false },
      { answerText: "Italy", isCorrect: true },
      { answerText: "England", isCorrect: false },
      { answerText: "Greece", isCorrect: false },
    ],
  },
  {
    questionText:
      "Rachel was popular in high school. Her prom date Chip ditched her for which girl at school?",
    answerOptions: [
      { answerText: "Sally Roberts", isCorrect: false },
      { answerText: "Amy Welsh", isCorrect: true },
      { answerText: "Valerie Thompson", isCorrect: false },
      { answerText: "Emily Foster", isCorrect: false },
    ],
  },
  {
    questionText:
      "What’s the name of the 1950s-themed diner where Monica worked as a waitress?",
    answerOptions: [
      { answerText: "Marilyn & Audrey", isCorrect: false },
      { answerText: "Twilight Galaxy", isCorrect: false },
      { answerText: "Moondance Diner", isCorrect: true },
      { answerText: "Marvin’s", isCorrect: false },
    ],
  },
  {
    questionText: "What’s the name of Joey’s penguin?",
    answerOptions: [
      { answerText: "Snowflake", isCorrect: false },
      { answerText: "Waddle", isCorrect: false },
      { answerText: "Huggsy", isCorrect: true },
      { answerText: "Bobber", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which cartoon character was on Phoebe’s thermos that Ursula threw under a bus?",
    answerOptions: [
      { answerText: "Pebbles Flintstone", isCorrect: false },
      { answerText: "Yogi Bear", isCorrect: false },
      { answerText: "Judy Jetson", isCorrect: true },
      { answerText: "Bullwinkle", isCorrect: false },
    ],
  },
  {
    questionText: "What’s the name of Janice’s first husband?",
    answerOptions: [
      { answerText: "Gary Litman", isCorrect: true },
      { answerText: "Sid Goralnik", isCorrect: false },
      { answerText: "Rob Bailystock", isCorrect: false },
      { answerText: "Nick Layster", isCorrect: false },
    ],
  },
  {
    questionText: "What song is Phoebe best known for?",
    answerOptions: [
      { answerText: "Smelly Cat", isCorrect: true },
      { answerText: "Smelly Dog", isCorrect: false },
      { answerText: "Smelly Rabbit", isCorrect: false },
      { answerText: "Smelly Worm", isCorrect: false },
    ],
  },
  {
    questionText: "What job does Ross have?",
    answerOptions: [
      { answerText: "Paleontologist", isCorrect: true },
      { answerText: "Artist", isCorrect: false },
      { answerText: "Photographer", isCorrect: false },
      { answerText: "Insurance salesman", isCorrect: false },
    ],
  },
  {
    questionText: "What does Joey never share?",
    answerOptions: [
      { answerText: "His books", isCorrect: false },
      { answerText: "His information", isCorrect: false },
      { answerText: "His food", isCorrect: true },
      { answerText: "His DVDs", isCorrect: false },
    ],
  },
  {
    questionText: "What is Chandler’s middle name?",
    answerOptions: [
      { answerText: "Muriel", isCorrect: true },
      { answerText: "Jason", isCorrect: false },
      { answerText: "Kim", isCorrect: false },
      { answerText: "Zachary", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which Friends character plays Dr. Drake Ramoray on the show Days Of Our Lives?",
    answerOptions: [
      { answerText: "Ross Geller", isCorrect: false },
      { answerText: "Pete Becker", isCorrect: false },
      { answerText: "Eddie Menuek", isCorrect: false },
      { answerText: "Joey Tribbiani", isCorrect: true },
    ],
  },
  {
    questionText: "Who was Chandler’s TV magazine always addressed to?",
    answerOptions: [
      { answerText: "Chanandler Bong", isCorrect: true },
      { answerText: "Chanandler Bang", isCorrect: false },
      { answerText: "Chanandler Bing", isCorrect: false },
      { answerText: "Chanandler Beng", isCorrect: false },
    ],
  },
  {
    questionText: "What is Janice most likely to say?",
    answerOptions: [
      { answerText: "Talk to the hand!", isCorrect: false },
      { answerText: "Get me a coffee!", isCorrect: false },
      { answerText: "Oh… my… God!", isCorrect: true },
      { answerText: "No way!", isCorrect: false },
    ],
  },
  {
    questionText:
      "What’s the name of the grumpy person who works at the coffee shop?",
    answerOptions: [
      { answerText: "Herman", isCorrect: false },
      { answerText: "Gunther", isCorrect: true },
      { answerText: "Frasier", isCorrect: false },
      { answerText: "Eddie", isCorrect: false },
    ],
  },
  {
    questionText: "Who sang the Friends theme?",
    answerOptions: [
      { answerText: "The Banksys", isCorrect: false },
      { answerText: "The Rembrandts", isCorrect: true },
      { answerText: "The Constables", isCorrect: false },
      { answerText: "The Da Vinci Band", isCorrect: false },
    ],
  },
  {
    questionText:
      "What kind of uniform does Joey wear to Monica and Chandler’s wedding?",
    answerOptions: [
      { answerText: "Chef", isCorrect: false },
      { answerText: "Soldier", isCorrect: true },
      { answerText: "Fire fighter", isCorrect: false },
      { answerText: "A baseball player", isCorrect: false },
    ],
  },
  {
    questionText: "What are Ross and Monica’s parents called?",
    answerOptions: [
      { answerText: "Jack and Jill", isCorrect: false },
      { answerText: "Philip and Holly", isCorrect: false },
      { answerText: "Jack and Judy", isCorrect: true },
      { answerText: "Margaret and Peter", isCorrect: false },
    ],
  },
  {
    questionText: "What is the name of Phoebe’s alter-ego?",
    answerOptions: [
      { answerText: "Phoebe Neeby", isCorrect: false },
      { answerText: "Monica Bing", isCorrect: false },
      { answerText: "Regina Phalange", isCorrect: true },
      { answerText: "Elaine Benes", isCorrect: false },
    ],
  },
  {
    questionText: "What is the name of Rachel’s Sphynx cat?",
    answerOptions: [
      { answerText: "Baldy", isCorrect: false },
      { answerText: "Mrs. Whiskerson", isCorrect: true },
      { answerText: "Sid", isCorrect: false },
      { answerText: "Felix", isCorrect: false },
    ],
  },
  {
    questionText:
      "When Ross and Rachel were“on a break,”Ross slept with Chloe. Where does she work?",
    answerOptions: [
      { answerText: "Xerox", isCorrect: true },
      { answerText: "Microsoft", isCorrect: false },
      { answerText: "Domino’s", isCorrect: false },
      { answerText: "Bank of America", isCorrect: false },
    ],
  },
  {
    questionText:
      "Chandler’s mom had an interesting career and even more interesting love life. What’s her name?",
    answerOptions: [
      { answerText: "Priscilla Mae Galway", isCorrect: false },
      { answerText: "Nora Tyler Bing", isCorrect: true },
      { answerText: "Mary Jane Blaese", isCorrect: false },
      { answerText: "Jessica Grace Carter", isCorrect: false },
    ],
  },
  {
    questionText:
      "Monica and Chandler met on Thanksgiving in 1987. She pursued her career as a chef because Chandler complimented her on which dish?",
    answerOptions: [
      { answerText: "Green bean casserole", isCorrect: false },
      { answerText: "Meatloaf", isCorrect: false },
      { answerText: "Stuffing", isCorrect: false },
      { answerText: "Macaroni and cheese", isCorrect: true },
    ],
  },
];

module.exports = { questions };
