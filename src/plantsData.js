const plantsData = [
  {
      id: 1,
      title: "Holy Basil (Tulsi)",
      embedUrl: "https://sketchfab.com/models/2f0c45fa2d6b4e599a2d838c30109296/embed",
      description: "Known for its adaptogenic properties, helps with stress relief and respiratory health.",
      medicinalProperties: ["stress relief", "immunity", "respiratory"],
      category: "Herb",
      partUsed: "Leaves",
      region: "South Asia"
  },
  {
      id: 2,
      title: "Rosemary",
      embedUrl: "https://sketchfab.com/models/d5c0f249ff8a4d13840abf681bb92d29/embed",
      description: "Improves memory and concentration, stimulates hair growth.",
      medicinalProperties: ["memory", "hair growth", "circulation"],
      category: "Herb",
      partUsed: "Leaves",
      region: "Mediterranean"
  },
  {
      id: 3,
      title: "Aloe Vera",
      embedUrl: "https://sketchfab.com/models/66c6699e50ab4863989777f920a981dd/embed",
      description: "Soothes burns and skin irritations, aids digestion.",
      medicinalProperties: ["skin care", "digestion", "hydration"],
      category: "Succulent",
      partUsed: "Leaves",
      region: "Africa"
  },
  {
      id: 4,
      title: "Turmeric",
      embedUrl: "https://sketchfab.com/models/55407296d92a47ad8c8482c56dc656e1/embed",
      description: "Anti-inflammatory, supports joint health and immunity.",
      medicinalProperties: ["anti-inflammatory", "immunity", "joint health"],
      category: "Root",
      partUsed: "Rhizome",
      region: "South Asia"
  },
  {
      id: 5,
      title: "Peppermint",
      embedUrl: "https://sketchfab.com/models/1700ea2c98e847aaba1e810510e699e0/embed",
      description: "Aids digestion, relieves headaches and nasal congestion.",
      medicinalProperties: ["digestion", "headache", "respiratory"],
      category: "Herb",
      partUsed: "Leaves",
      region: "Europe"
  },
  {
      id: 6,
      title: "Neem",
      embedUrl: "https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed",
      description: "Antibacterial, purifies blood, and helps in skin disorders.",
      medicinalProperties: ["antibacterial", "blood purifier", "skin care"],
      category: "Tree",
      partUsed: "Leaves",
      region: "South Asia"
  },
  {
      id: 7,
      title: "Ashwagandha",
      embedUrl: "https://sketchfab.com/models/9b2c1234567/embed",
      description: "Reduces stress, boosts energy, and improves brain function.",
      medicinalProperties: ["stress relief", "energy", "brain health"],
      category: "Herb",
      partUsed: "Roots",
      region: "India"
  },
  {
      id: 8,
      title: "Guduchi (Giloy)",
      embedUrl: "https://sketchfab.com/models/3c4d567890a/embed",
      description: "Boosts immunity, fights infections, and detoxifies the body.",
      medicinalProperties: ["immunity", "detox", "fever relief"],
      category: "Climber",
      partUsed: "Stem",
      region: "India"
  },
  {
      id: 9,
      title: "Indian Gooseberry (Amla)",
      embedUrl: "https://sketchfab.com/models/60ab2bc091674382a086391613e65d6f/embed",
      description: "Rich in Vitamin C, improves digestion and hair growth.",
      medicinalProperties: ["vitamin C", "digestion", "hair growth"],
      category: "Tree",
      partUsed: "Fruit",
      region: "India"
  },
  {
      id: 10,
      title: "Brahmi",
      embedUrl: "https://sketchfab.com/models/5e6f789012c/embed",
      description: "Enhances memory, reduces anxiety, and improves brain function.",
      medicinalProperties: ["memory", "anxiety relief", "brain health"],
      category: "Herb",
      partUsed: "Leaves",
      region: "India"
  },
  {
      id: 11,
      title: "Bael (Bilva)",
      embedUrl: "https://sketchfab.com/models/6f7g890123d/embed",
      description: "Good for digestion, prevents constipation, and reduces acidity.",
      medicinalProperties: ["digestion", "acidity relief", "constipation"],
      category: "Tree",
      partUsed: "Fruit",
      region: "India"
  },
  {
      id: 12,
      title: "Shatavari",
      embedUrl: "https://sketchfab.com/models/7g8h901234e/embed",
      description: "Improves female reproductive health and boosts lactation.",
      medicinalProperties: ["women's health", "hormonal balance", "lactation"],
      category: "Herb",
      partUsed: "Roots",
      region: "India"
  },
  {
      id: 13,
      title: "Hibiscus",
      embedUrl: "https://sketchfab.com/models/8h9i012345f/embed",
      description: "Supports hair growth and regulates blood pressure.",
      medicinalProperties: ["hair growth", "blood pressure", "heart health"],
      category: "Flower",
      partUsed: "Flowers",
      region: "Tropics"
  },
  {
      id: 14,
      title: "Fenugreek (Methi)",
      embedUrl: "https://sketchfab.com/models/9i0j123456g/embed",
      description: "Helps manage diabetes and improves digestion.",
      medicinalProperties: ["diabetes control", "digestion", "weight management"],
      category: "Herb",
      partUsed: "Seeds",
      region: "South Asia"
  },
  {
      id: 15,
      title: "Cinnamon (Dalchini)",
      embedUrl: "https://sketchfab.com/models/0j1k234567h/embed",
      description: "Regulates blood sugar and has anti-inflammatory properties.",
      medicinalProperties: ["blood sugar", "anti-inflammatory", "heart health"],
      category: "Tree",
      partUsed: "Bark",
      region: "Sri Lanka"
  },
  {
      id: 16,
      title: "Guggul",
      embedUrl: "https://sketchfab.com/models/3d4e567890a/embed",
      description: "Used in Ayurveda for weight management and cholesterol control.",
      medicinalProperties: ["weight loss", "cholesterol", "heart health"],
      category: "Resin",
      partUsed: "Resin",
      region: "India"
  },
  {
      id: 17,
      title: "Karela (Bitter Gourd)",
      embedUrl: "https://sketchfab.com/models/4e5f678901b/embed",
      description: "Helps manage diabetes, purifies blood, and improves digestion.",
      medicinalProperties: ["diabetes", "blood purifier", "digestion"],
      category: "Vegetable",
      partUsed: "Fruit",
      region: "South Asia"
  },
  {
      id: 18,
      title: "Safed Musli",
      embedUrl: "https://sketchfab.com/models/5f6g789012c/embed",
      description: "Boosts stamina, improves reproductive health, and strengthens immunity.",
      medicinalProperties: ["stamina", "immunity", "reproductive health"],
      category: "Herb",
      partUsed: "Roots",
      region: "India"
  },
  {
      id: 19,
      title: "Bhringraj",
      embedUrl: "https://sketchfab.com/models/6g7h890123d/embed",
      description: "Promotes hair growth, prevents premature graying, and improves liver health.",
      medicinalProperties: ["hair growth", "liver health", "anti-aging"],
      category: "Herb",
      partUsed: "Leaves",
      region: "India"
  },
  {
    id: 21,
    title: "Mulethi (Licorice)",
    embedUrl: "https://sketchfab.com/models/7h8i901234e/embed",
    description: "Soothes sore throat, improves digestion, and boosts immunity.",
    medicinalProperties: ["sore throat", "digestion", "immunity"],
    category: "Herb",
    partUsed: "Root",
    region: "South Asia"
},
{
    id: 22,
    title: "Gokshura",
    embedUrl: "https://sketchfab.com/models/8i9j012345f/embed",
    description: "Used for kidney health, testosterone boost, and urinary tract health.",
    medicinalProperties: ["kidney health", "testosterone", "urinary tract"],
    category: "Herb",
    partUsed: "Fruit",
    region: "India"
},
{
    id: 23,
    title: "Kutki",
    embedUrl: "https://sketchfab.com/models/9j0k123456g/embed",
    description: "Supports liver detoxification, digestion, and immunity.",
    medicinalProperties: ["liver detox", "digestion", "immunity"],
    category: "Herb",
    partUsed: "Root",
    region: "Himalayas"
},
{
    id: 24,
    title: "Jatamansi",
    embedUrl: "https://sketchfab.com/models/0k1l234567h/embed",
    description: "A powerful herb for relaxation, stress relief, and brain health.",
    medicinalProperties: ["stress relief", "brain health", "sleep"],
    category: "Herb",
    partUsed: "Root",
    region: "Himalayas"
},
{
    id: 25,
    title: "Manjistha",
    embedUrl: "https://sketchfab.com/models/1l2m345678i/embed",
    description: "A potent blood purifier, helps with skin disorders and detoxification.",
    medicinalProperties: ["blood purifier", "skin health", "detox"],
    category: "Herb",
    partUsed: "Root",
    region: "India"
},
{
    id: 26,
    title: "Shankhpushpi",
    embedUrl: "https://sketchfab.com/models/2m3n456789j/embed",
    description: "Improves memory, calms the mind, and reduces anxiety.",
    medicinalProperties: ["memory", "anxiety", "brain health"],
    category: "Herb",
    partUsed: "Whole Plant",
    region: "India"
},
{
    id: 27,
    title: "Arjuna",
    embedUrl: "https://sketchfab.com/models/3n4o567890k/embed",
    description: "Supports heart health, improves circulation, and strengthens arteries.",
    medicinalProperties: ["heart health", "circulation", "blood pressure"],
    category: "Tree",
    partUsed: "Bark",
    region: "India"
},
{
    id: 28,
    title: "Nagkesar",
    embedUrl: "https://sketchfab.com/models/4o5p678901l/embed",
    description: "Used in Ayurveda for skin health, fever reduction, and anti-inflammatory effects.",
    medicinalProperties: ["skin health", "anti-inflammatory", "fever relief"],
    category: "Tree",
    partUsed: "Flowers",
    region: "India"
},
{
    id: 29,
    title: "Haritaki",
    embedUrl: "https://sketchfab.com/models/5p6q789012m/embed",
    description: "A powerful detox herb that supports digestion and longevity.",
    medicinalProperties: ["detox", "digestion", "longevity"],
    category: "Fruit",
    partUsed: "Fruit",
    region: "India"
},
{
    id: 30,
    title: "Bhibhitaki",
    embedUrl: "https://sketchfab.com/models/6q7r890123n/embed",
    description: "Known for improving eyesight, hair health, and respiratory function.",
    medicinalProperties: ["eyesight", "hair health", "respiratory"],
    category: "Fruit",
    partUsed: "Fruit",
    region: "India"
},
{
  id: 31,
  title: "Chirata",
  embedUrl: "https://sketchfab.com/models/7r8s901234o/embed",
  description: "A bitter herb known for purifying blood and treating fevers.",
  medicinalProperties: ["blood purifier", "fever relief", "detox"],
  category: "Herb",
  partUsed: "Whole Plant",
  region: "Himalayas"
},
{
  id: 32,
  title: "Bakuchi (Psoralea corylifolia)",
  embedUrl: "https://sketchfab.com/models/1a2b345678c/embed",
  description: "Used for treating skin disorders, vitiligo, and wound healing.",
  medicinalProperties: ["skin health", "wound healing", "vitiligo"],
  category: "Herb",
  partUsed: "Seeds",
  region: "India"
},
{
  id: 33,
  title: "Kalmegh (Andrographis paniculata)",
  embedUrl: "https://sketchfab.com/models/2b3c456789d/embed",
  description: "Known for liver protection, fever relief, and boosting immunity.",
  medicinalProperties: ["liver health", "immunity", "fever relief"],
  category: "Herb",
  partUsed: "Leaves",
  region: "South Asia"
},
{
  id: 34,
  title: "Patharchatta (Bryophyllum pinnatum)",
  embedUrl: "https://sketchfab.com/models/3c4d567890e/embed",
  description: "Helps dissolve kidney stones and supports urinary tract health.",
  medicinalProperties: ["kidney health", "urinary tract", "diuretic"],
  category: "Herb",
  partUsed: "Leaves",
  region: "India"
},
{
  id: 35,
  title: "Punarnava (Boerhavia diffusa)",
  embedUrl: "https://sketchfab.com/models/4d5e678901f/embed",
  description: "Acts as a diuretic, supports kidney function, and reduces inflammation.",
  medicinalProperties: ["kidney function", "diuretic", "anti-inflammatory"],
  category: "Herb",
  partUsed: "Root",
  region: "India"
},
{
  id: 36,
  title: "Shilajit",
  embedUrl: "https://sketchfab.com/models/5e6f789012g/embed",
  description: "Boosts energy, enhances stamina, and improves overall vitality.",
  medicinalProperties: ["energy", "stamina", "anti-aging"],
  category: "Mineral",
  partUsed: "Resin",
  region: "Himalayas"
},
{
  id: 37,
  title: "Vidanga (Embelia ribes)",
  embedUrl: "https://sketchfab.com/models/6f7g890123h/embed",
  description: "Used in Ayurveda for deworming, digestion, and detoxification.",
  medicinalProperties: ["deworming", "digestion", "detox"],
  category: "Herb",
  partUsed: "Fruit",
  region: "India"
},
{
  id: 38,
  title: "Kankola (Piper cubeba)",
  embedUrl: "https://sketchfab.com/models/7g8h901234i/embed",
  description: "Supports respiratory health, treats cough and cold.",
  medicinalProperties: ["respiratory", "cough relief", "anti-inflammatory"],
  category: "Herb",
  partUsed: "Fruit",
  region: "South Asia"
},
{
  id: 39,
  title: "Agastya (Sesbania grandiflora)",
  embedUrl: "https://sketchfab.com/models/8h9i012345j/embed",
  description: "Rich in vitamins, improves eyesight, and supports digestion.",
  medicinalProperties: ["eyesight", "digestion", "vitamin-rich"],
  category: "Tree",
  partUsed: "Leaves & Flowers",
  region: "Tropical Asia"
},
{
  id: 40,
  title: "Musta (Cyperus rotundus)",
  embedUrl: "https://sketchfab.com/models/9i0j123456k/embed",
  description: "Regulates digestion, treats diarrhea, and reduces fever.",
  medicinalProperties: ["digestion", "diarrhea relief", "fever relief"],
  category: "Herb",
  partUsed: "Root",
  region: "India"
},
{
  id: 41,
  title: "Vacha (Acorus calamus)",
  embedUrl: "https://sketchfab.com/models/0j1k234567l/embed",
  description: "Enhances brain function, treats speech disorders, and supports memory.",
  medicinalProperties: ["memory", "brain health", "speech clarity"],
  category: "Herb",
  partUsed: "Rhizome",
  region: "India"
},
{
  id: 42,
  title: "Shatavari (Asparagus racemosus)",
  embedUrl: "https://sketchfab.com/models/1k2l345678m/embed",
  description: "Supports female reproductive health, lactation, and hormonal balance.",
  medicinalProperties: ["women's health", "lactation", "hormonal balance"],
  category: "Herb",
  partUsed: "Root",
  region: "India"
},
{
  id: 43,
  title: "Rasna (Pluchea lanceolata)",
  embedUrl: "https://sketchfab.com/models/2l3m456789n/embed",
  description: "Reduces joint pain, treats arthritis, and improves mobility.",
  medicinalProperties: ["joint health", "arthritis relief", "mobility"],
  category: "Herb",
  partUsed: "Leaves & Root",
  region: "India"
},
{
  id: 44,
  title: "Nagarmotha (Cyperus scariosus)",
  embedUrl: "https://sketchfab.com/models/3m4n567890o/embed",
  description: "Aids digestion, detoxifies the body, and balances metabolism.",
  medicinalProperties: ["digestion", "detox", "metabolism"],
  category: "Herb",
  partUsed: "Rhizome",
  region: "India"
},
{
  id: 45,
  title: "Dhania (Coriandrum sativum)",
  embedUrl: "https://sketchfab.com/models/4n5o678901p/embed",
  description: "Regulates blood sugar, improves digestion, and has cooling properties.",
  medicinalProperties: ["blood sugar", "digestion", "cooling effect"],
  category: "Herb",
  partUsed: "Seeds & Leaves",
  region: "Global"
},
{
  id: 46,
  title: "Datura (Datura metel)",
  embedUrl: "https://sketchfab.com/models/5o6p789012q/embed",
  description: "Used for asthma relief, pain management, and treating cough.",
  medicinalProperties: ["asthma relief", "pain relief", "cough relief"],
  category: "Herb",
  partUsed: "Leaves & Seeds",
  region: "India"
},
{
  id: 47,
  title: "Madhunashini (Gymnema sylvestre)",
  embedUrl: "https://sketchfab.com/models/6p7q890123r/embed",
  description: "Known as the sugar destroyer, helps in managing diabetes.",
  medicinalProperties: ["diabetes control", "blood sugar regulation"],
  category: "Herb",
  partUsed: "Leaves",
  region: "India"
},
{
  id: 48,
  title: "Bala (Sida cordifolia)",
  embedUrl: "https://sketchfab.com/models/7q8r901234s/embed",
  description: "Boosts strength, stamina, and supports the nervous system.",
  medicinalProperties: ["strength", "stamina", "nerve health"],
  category: "Herb",
  partUsed: "Root & Leaves",
  region: "India"
},
{
  id: 49,
  title: "Tagar (Valeriana wallichii)",
  embedUrl: "https://sketchfab.com/models/8r9s012345t/embed",
  description: "Promotes relaxation, relieves anxiety, and improves sleep quality.",
  medicinalProperties: ["relaxation", "anxiety relief", "sleep"],
  category: "Herb",
  partUsed: "Root",
  region: "Himalayas"
},
{
  id: 50,
  title: "Gandhak (Sulphur)",
  embedUrl: "https://sketchfab.com/models/9s0t123456u/embed",
  description: "Used for skin disorders, detoxification, and anti-aging effects.",
  medicinalProperties: ["skin health", "detox", "anti-aging"],
  category: "Mineral",
  partUsed: "Purified Sulphur",
  region: "Global"
}
];

export default plantsData;
