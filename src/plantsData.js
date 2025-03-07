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
      id: 13,
      title: "Hibiscus",
      embedUrl: "https://sketchfab.com/models/345bc5348efb4b32918672fe8e119202/embed",
      description: "Supports hair growth and regulates blood pressure.",
      medicinalProperties: ["hair growth", "blood pressure", "heart health"],
      category: "Flower",
      partUsed: "Flowers",
      region: "Tropics"
  },
  {
      id: 14,
      title: "Fenugreek (Methi)",
      embedUrl: "https://sketchfab.com/models/81f3b0e19eff4c6a985e5ddab4eb6559/embed",
      description: "Helps manage diabetes and improves digestion.",
      medicinalProperties: ["diabetes control", "digestion", "weight management"],
      category: "Herb",
      partUsed: "Seeds",
      region: "South Asia"
  },
  
 
  {
      id: 17,
      title: "Karela (Bitter Gourd)",
      embedUrl: "https://sketchfab.com/models/0e3628f5a2df4bb4aca41c14aaf1f12b/embed",
      description: "Helps manage diabetes, purifies blood, and improves digestion.",
      medicinalProperties: ["diabetes", "blood purifier", "digestion"],
      category: "Vegetable",
      partUsed: "Fruit",
      region: "South Asia"
  },
  {
      id: 18,
      title: "Safed Musli",
      embedUrl: "https://sketchfab.com/models/dea160e4409746fe931a67a151f994ab/embed",
      description: "Boosts stamina, improves reproductive health, and strengthens immunity.",
      medicinalProperties: ["stamina", "immunity", "reproductive health"],
      category: "Herb",
      partUsed: "Roots",
      region: "India"
  },
  {
      id: 19,
      title: "Bhringraj",
      embedUrl: "https://sketchfab.com/models/c914e2eb8bab46e0b60b891aa4b125fe/embed",
      description: "Promotes hair growth, prevents premature graying, and improves liver health.",
      medicinalProperties: ["hair growth", "liver health", "anti-aging"],
      category: "Herb",
      partUsed: "Leaves",
      region: "India"
  },
  {
    id: 21,
    title: "Mulethi (Licorice)",
    embedUrl: "https://sketchfab.com/models/452d7ad88ecd48d3848bf47bb6547597/embed",
    description: "Soothes sore throat, improves digestion, and boosts immunity.",
    medicinalProperties: ["sore throat", "digestion", "immunity"],
    category: "Herb",
    partUsed: "Root",
    region: "South Asia"
},


{
    id: 24,
    title: "Jatamansi",
    embedUrl: "https://sketchfab.com/models/163a7756b69e442cb68f10ff7e48782f/embed",
    description: "A powerful herb for relaxation, stress relief, and brain health.",
    medicinalProperties: ["stress relief", "brain health", "sleep"],
    category: "Herb",
    partUsed: "Root",
    region: "Himalayas"
},


{
    id: 27,
    title: "Arjuna",
    embedUrl: "https://sketchfab.com/models/ef1c19f243d44f6a904cf25ac6710652/embed",

    description: "Supports heart health, improves circulation, and strengthens arteries.",
    medicinalProperties: ["heart health", "circulation", "blood pressure"],
    category: "Tree",
    partUsed: "Bark",
    region: "India"
},

{
    id: 29,
    title: "Haritaki",
    embedUrl: "https://sketchfab.com/models/ef1c19f243d44f6a904cf25ac6710652/embed",
    description: "A powerful detox herb that supports digestion and longevity.",
    medicinalProperties: ["detox", "digestion", "longevity"],
    category: "Fruit",
    partUsed: "Fruit",
    region: "India"
},


{
  id: 32,
  title: "Bakuchi (Psoralea corylifolia)",
  embedUrl: "https://sketchfab.com/models/b7ceb9bffc9049708a2c63a9844f76ef/embed",
  description: "Used for treating skin disorders, vitiligo, and wound healing.",
  medicinalProperties: ["skin health", "wound healing", "vitiligo"],
  category: "Herb",
  partUsed: "Seeds",
  region: "India"
},
{
  id: 33,
  title: "Kalmegh (Andrographis paniculata)",
  embedUrl: "https://sketchfab.com/models/07a518bbd3c844d483a5494dacc123f6/embed",
  description: "Known for liver protection, fever relief, and boosting immunity.",
  medicinalProperties: ["liver health", "immunity", "fever relief"],
  category: "Herb",
  partUsed: "Leaves",
  region: "South Asia"
},
{
  id: 34,
  title: "Patharchatta (Bryophyllum pinnatum)",
  embedUrl: "https://sketchfab.com/models/1c53764b458e4734a682671227fca1e1/embed",
  description: "Helps dissolve kidney stones and supports urinary tract health.",
  medicinalProperties: ["kidney health", "urinary tract", "diuretic"],
  category: "Herb",
  partUsed: "Leaves",
  region: "India"
},
{
  id: 35,
  title: "Punarnava (Boerhavia diffusa)",
  embedUrl: "https://sketchfab.com/models/e9832f38484f4f85b3f9081b51fa3799/embed",
  description: "Acts as a diuretic, supports kidney function, and reduces inflammation.",
  medicinalProperties: ["kidney function", "diuretic", "anti-inflammatory"],
  category: "Herb",
  partUsed: "Root",
  region: "India"
},
{
  id: 36,
  title: "Shilajit",
  embedUrl: "https://sketchfab.com/models/98158fb9250c4a85a55925e69a220363/embed",
  description: "Boosts energy, enhances stamina, and improves overall vitality.",
  medicinalProperties: ["energy", "stamina", "anti-aging"],
  category: "Mineral",
  partUsed: "Resin",
  region: "Himalayas"
},

{
  id: 38,
  title: "Kankola (Piper cubeba)",
  embedUrl: "https://sketchfab.com/models/569c4898d8d44b38bbf3220669a38949/embed",
  description: "Supports respiratory health, treats cough and cold.",
  medicinalProperties: ["respiratory", "cough relief", "anti-inflammatory"],
  category: "Herb",
  partUsed: "Fruit",
  region: "South Asia"
}




];

export default plantsData;
