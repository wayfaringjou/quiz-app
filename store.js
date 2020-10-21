const store = {
  questions: [
    {
      question: `How many confirmed elements can you find on the periodic table?`,
      answers: ["118", "90", "14", "56"],
      correctAnswer: "118",
      tidbit: `Out of the 118 elements found on the periodic table, 90 of them can be found existing in nature. The other 28 elements are man-made, and they were inspired by technetium, the first man-made element.`,
    },
    {
      question: `It's frequently used to fill up party balloons, but what's the symbol for helium?`,
      answers: ["He", "Ho", "H", "Hs"],
      correctAnswer: "He",
      tidbit: `After hydrogen (H), helium is the second most common element in the known universe. Tasteless, colorless and odorless, helium (He) is used for more than giving you a wacky voice at parties. It's one of the most unique elements on the periodic table.`,
    },
    {
      question: `What element corresponds with the symbol "Fe"?`,
      answers: ["Iron", "Silver", "Lithium", "Fluorine"],
      correctAnswer: "Iron",
      tidbit: `If you were working with the element denoted as "Fe" on the periodic table, you would be working with iron. Iron is the fourth most abundant element found in the earth's crust, and it's the sixth most common element in the entire universe.`,
    },/*
    {
      question: `Elements found on Earth are exactly the same as elements found on which other planet?`,
      answers: ["Jupiter", "Venus", "Mars", "Uranus"],
      correctAnswer: "Mars",
      tidbit: `We haven't yet been able to collect samples from Venus, Jupiter or Uranus, but we do know that the elements on Mars are identical to those found on Earth. Some of the elements found on Mars' crust are magnesium, iron and calcium.`,
    },
    {
      question: `Its symbol is N, but do you know which element is about 78% of the air you breathe?`,
      answers: ["Niobium", "Nobelium", "Nitrogen", "Nickel"],
      correctAnswer: "Nitrogen",
      tidbit: `Nitrogen's atomic weight of 7 puts it right beside oxygen on the periodic table. When you breathe in, you inhale both elements, but nitrogen makes up the larger percentage.`,
    },
    {
      question: `Do you know for which of these elements Mendeleev left a gap when he created the table? Its symbol is Ga.`,
      answers: ["Gallium", "Gadolinium", "Gold", "Germanium"],
      correctAnswer: "Gallium",
      tidbit: `When Mendeleev created the periodic table, he predicted that gallium — an element similar to aluminum— would soon be discovered. Only six years later, he was proven correct when a French scientist named Lecoq de Boisbaudran discovered it in 1875.`,
    },
    {
      question: `When Mendeleev was creating the periodic table, which card game did he use as inspiration?`,
      answers: ["Solitaire", "Rummy", "Gin", "Euchre"],
      correctAnswer: "Solitaire",
      tidbit: `A huge gaming enthusiast, University of St. Petersburg professor Dmitri Mendeleev decided to sort each element by its atomic weight. He then sorted them by "suit" with similar elements making up each column — just like the game of solitaire.`,
    },
    {
      question: `Which of these countries is named after the element with the symbol Ag?`,
      answers: ["Angola", "Albania", "Argentina", "Algeria"],
      correctAnswer: "Argentina",
      tidbit: `Every year, Argentina mines over 10 million pounds of silver. Known as The Land of Silver, it's the largest producer of the metal in the world. It only makes sense that it would have been named after the element Ag, or Argentum.`,
    },
    {
      question: `The heaviest naturally occurring element's atomic weight is 92, but what is it called?`,
      answers: ["Iron", "Neptunium", "Uranium", "Sulfur"],
      correctAnswer: "Uranium",
      tidbit: `Symbolized as "U" on the periodic table, uranium is the heaviest element on earth. Its man-made counterpart, ununoctium, carries an atomic weight of 118. When the element with the atomic weight of 120 is discovered, ununoctium will have to take a back seat.`,
    },
    {
      question: `Named after the Greek word "argos," which of these elements did Mendeleev originally leave off the periodic table?`,
      answers: ["Argon", "Americium", "Oxygen", "Palladium"],
      correctAnswer: "Argon",
      tidbit: `When argon was discovered in 1894, Mendeleev decided to ignore it because it didn't fit into his version of the periodic table. Argon's name is taken from the Greek word "argos." Argos means lazy or idle, and the element's slow, nonreactive behavior makes it a natural fit.`,
    },
    {
      question: `If you go from left to right on the periodic table, what happens to the valence electrons?`,
      answers: [
        "They disappear.",
        "They increase in number.",
        "They mutate with other numbers.",
        "They decrease in number.",
      ],
      correctAnswer: "They increase in number.",
      tidbit: `When going from left to right on the periodic table, you'll notice that the number of valence electrons increases. Likewise, you'll notice that energy levels increase as you scan from top to bottom.`,
    },
    {
      question: `What name is given to the outermost shell of an atom, where determining chemical properties are found?`,
      answers: ["Atom shell", "Cell shell", "Elemental shell", "Valence shell"],
      correctAnswer: "Valence shell",
      tidbit: `The part of an atom where the determining electrons are found is called the valence shell. The electrons found in the valence shell determine the chemical property and allow them to be classified as the correct element.`,
    },
    {
      question: `Although heavier elements exist in stars, the heaviest element that may be produced by fusion in a star is:`,
      answers: ["Helium", "Carbon", "Silicon", "Iron"],
      correctAnswer: "Iron",
      tidbit: `Iron is the heaviest element produced in stars from fusion via the process of nucleosynthesis. It is believed heavier elements arise from neutron star collisions.`,
    },
    {
      question: `Can you accurately guess which of these elements is the rarest?`,
      answers: ["Uranium", "Francium", "Argentum", "Cobalt"],
      correctAnswer: "Francium",
      tidbit: `Francium has an atomic number of 87, and you can find it noted on the periodic table with the abbreviation "Fr." There are only a couple of ounces of it on earth, and it has no real use outside of scientific research.`,
    },
    {
      question: `What number will you find at the bottom of each element on the periodic table?`,
      answers: [
        "Atomic number",
        "Weight number",
        "Mass number",
        "Proton number",
      ],
      correctAnswer: "Mass number",
      tidbit: `Each of the elements on the periodic table has four pieces of information: the atomic number, the element's symbol, the element's name and the mass number. The mass number, found at the bottom, indicates the number of protons and neutrons found in that element's nucleus.`,
    },
    {
      question: `Which name is given to the line on the periodic table that divides metals and nonmetals?`,
      answers: [
        "The staircase",
        "The division",
        "Elemental line",
        "The metallic line",
      ],
      correctAnswer: "The staircase",
      tidbit: `Over the course of history, the line that separates metal and nonmetal elements has been called many names. Most commonly called the staircase, you'll sometimes hear it called the amphoteric line and the metal-nonmetal line.`,
    },
    {
      question: `If you look at the left part of the staircase, which elemental group will you see?`,
      answers: ["Nonmetals", "Metals", "Isotopes", "Metalloids"],
      correctAnswer: "Metals",
      tidbit: `On the left side of the staircase, you will find the elements that belong to the metal family. To the right, you'll find metalloids that can perform as either metal or nonmetal elements.`,
    },
    {
      question: `Nearly 75% of all the elements on the periodic table are ...`,
      answers: ["Inert gasses", "Metals", "Noble gasses", "Organic"],
      correctAnswer: "Metals",
      tidbit: `Out of the 118 elements on the periodic table, at least 91 of them are metals. Wihile some of them appear in both the metallic and non-metallic categories, those that are not considered metals are called metalloids.`,
    },
    {
      question: `What color does white phosphorus glow when oxidizing in air?`,
      answers: ["Purple", "Blue", "White", "Green"],
      correctAnswer: "green",
      tidbit: `Phosphorus produces a green glow when it oxidizes. It's worth noting this is not phosphorescence, despite the name.`,
    },
    {
      question: `The lightest metallic element floats on water. This element is:`,
      answers: ["Lithium", "Beryllium", "Boron", "Sodium"],
      correctAnswer: "Lithium",
      tidbit: `The lightest metal on the periodic table is lithium. It floats in water, but it also burns in water, too.`,
    },
    {
      question: `How many groups or columns are there in the periodic table?`,
      answers: ["18", "7", "6", "14"],
      correctAnswer: "18",
      tidbit: `Simply put, each of the 18 columns in the periodic table is made up of similar elements. Each group — such as inert or noble gases — is put together so that chemists can more accurately predict how an element may react in different situations.`,
    },
    {
      question: `Do you know which of these chemical elements forms up to 10 million compounds?`,
      answers: ["Argon", "Arsenic", "Helium", "Carbon"],
      correctAnswer: "Carbon",
      tidbit: `Carbon takes its name from "carbo," the Latin word for coal. Making up .032% of the earth's crust, carbon can be found in many forms, including diamonds, graphite and lithium-ion batteries.`,
    },
    {
      question: `The only element in the halide family that is a liquid at room temperature and pressure is:`,
      answers: ["Chlorine", "Iodine", "Fluorine", "Bromine"],
      correctAnswer: "Bromine",
      tidbit: `Bromine is the only liquid halogen at ordinary temperature and pressure.`,
    },
    {
      question: `Each horizontal row on the periodic table is called what?`,
      answers: ["Period", "Group", "Column", "Sorting"],
      correctAnswer: "Period",
      tidbit: `The name "periodic table" comes from the horizontal rows that are called periods. Of the eight total periods, the first row has the least with only two elements. The sixth row has the most with 11.`,
    },
    {
      question: `The first synthetic or man-made element was:`,
      answers: ["Uranium", "Radium", "Plutonium", "Technetium"],
      correctAnswer: "Technetium",
      tidbit: `Technetium was the first element prepared by humans, in 1924 or 1937, depending who you credit for the discovery. The element was prepared by bombarding a molybdenum sample with neutrons. The word technetium means "artificial element".`,
    },
    {
      question: `The most abundant metal in the Earth's crust is:`,
      answers: ["Magnesium", "Aluminum", "Silicon", "Iron"],
      correctAnswer: "Aluminum",
      tidbit: `Silicon is a metalloid, not a metal, although it is the third most abundant element in the Earth's crust. The most abundant metal is aluminum, which accounts for about 8% of the crust by volume.`,
    },*/
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};
