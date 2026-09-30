export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  authorOrIllustrator: string;
  role: 'Cover Design' | 'Illustration';
  category: 'covers' | 'children';
  genreTag: string;
  blurb: string;
  extendedBlurb?: string;
  keyQuote?: string;
  coverImage: string;
  palette: {
    bg: string;
    accent: string;
    border: string;
  };
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  // ==========================================
  // TAB 1: BOOK COVERS & NOVELS (DEFAULT ACTIVE)
  // ==========================================
  {
    id: 'beneath-the-foxglove',
    title: 'Beneath the Foxglove',
    subtitle: 'Murder, Memory and the Poison We Bury',
    authorOrIllustrator: 'G.K. Boni',
    role: 'Cover Design',
    category: 'covers',
    genreTag: 'Southern Noir · Mystery Thriller',
    blurb: 'In Peki, secrets don’t stay buried. They push up through the red earth—bright, poisonous, and sharp as regret.',
    extendedBlurb: 'Detective Fafa Bankas—former beauty queen, now wearing suspicion like a second skin—comes home to a village choking on silence. In Peki, loyalty is sold by the kilo, and answers come at the cost of blood. Dig too deep, and you end up under the same dirt as the secrets.',
    keyQuote: 'In a village full of secrets, even beauty can kill.',
    coverImage: '/src/assets/images/beneath_foxglove_book_1790810195160.jpg',
    palette: {
      bg: '#18120e',
      accent: '#38bdf8',
      border: 'rgba(56, 189, 248, 0.35)',
    },
  },
  {
    id: 'storm',
    title: 'STORM',
    authorOrIllustrator: 'Susan Wilson',
    role: 'Cover Design',
    category: 'covers',
    genreTag: 'Literary Fiction · Drama & Resilience',
    blurb: 'A deeply moving story about a troubled young girl who had to fight through life, early motherhood, and heartbreak to protect her family.',
    extendedBlurb: 'After becoming a mother at fourteen and starting a family with her lover, she hoped for betterment in her circumstances, but life had its own set of plans. Dive into her life and get up close with the kind of pain no one talks about. Reflect with Susan as you learn that time truly is the greatest healer, even in immense grief and tragedy.',
    keyQuote: 'Time truly is the greatest healer, even in immense grief.',
    coverImage: '/src/assets/images/storm_novel_book_1790810224889.jpg',
    palette: {
      bg: '#0c1624',
      accent: '#60a5fa',
      border: 'rgba(96, 165, 250, 0.35)',
    },
  },
  {
    id: 'surviving-the-game',
    title: 'Surviving the Game',
    subtitle: 'The Childcare Chronicles',
    authorOrIllustrator: 'Mrs. Kimberly Watkins-Almond',
    role: 'Cover Design',
    category: 'covers',
    genreTag: 'Memoir & Leadership · True Story',
    blurb: 'This is not a manual. This is a movement. A raw and real journey from a 20-year-old student to an industry pillar overcoming toxic boardrooms and crises.',
    extendedBlurb: 'An intimate, unflinching look into the business of childcare. Navigating licensing nightmares, pandemic pivots, and financial chaos, Kimberly Watkins-Almond shares a battle-tested blueprint for leaders who refuse to fold under pressure.',
    keyQuote: 'It’s more than burnout—it’s breakthrough.',
    coverImage: '/src/assets/images/surviving_game_book_1790810787497.jpg',
    palette: {
      bg: '#1e140d',
      accent: '#38bdf8',
      border: 'rgba(56, 189, 248, 0.35)',
    },
  },
  {
    id: 'the-bad-board-members',
    title: 'The Bad Board Members',
    subtitle: 'Surviving Power, Politics and Public Betrayal',
    authorOrIllustrator: 'Mrs. Kimberly Watkins-Almond',
    role: 'Cover Design',
    category: 'covers',
    genreTag: 'Whistleblower Non-Fiction · Political Exposé',
    blurb: 'A 17-year front-row seat to corruption, kickbacks, and unchecked egos inside two deeply dysfunctional school board districts.',
    extendedBlurb: 'From boardroom brawls to backroom deals in grocery store aisles, Kim exposes how compromised officials sacrificed classrooms for self-enrichment. A scathing reckoning and a clarion call for transparency in public governance.',
    keyQuote: 'They tried to break her. Instead, she wrote the book.',
    coverImage: '/src/assets/images/bad_board_book_1790810800937.jpg',
    palette: {
      bg: '#200b0d',
      accent: '#f43f5e',
      border: 'rgba(244, 63, 94, 0.35)',
    },
  },
  {
    id: 'ven-of-nordia',
    title: 'Ven of Nordia',
    authorOrIllustrator: 'Ezu Feboke',
    role: 'Cover Design',
    category: 'covers',
    genreTag: 'Nordic Dark Fantasy · Epic Saga',
    blurb: 'Ancient runic thrones, blood oaths, and spectral emerald crowns colliding across the frost-bitten ridges of Nordia.',
    extendedBlurb: 'When the ancestral blade awakens beneath the green auroras, ancient lineages are summoned to war. Ezu Feboke weaves an epic tapestry of northern warlords, forgotten gods, and mortal sacrifice.',
    keyQuote: 'The green crown claims its toll in ice and steel.',
    coverImage: '/src/assets/images/ven_nordia_book_1790810814852.jpg',
    palette: {
      bg: '#0a1917',
      accent: '#10b981',
      border: 'rgba(16, 185, 129, 0.35)',
    },
  },
  {
    id: 'leveraging-the-power',
    title: 'Leveraging the Power of the Process',
    authorOrIllustrator: 'Dr. Cedric B. Howard',
    role: 'Cover Design',
    category: 'covers',
    genreTag: 'Executive Leadership · Personal Growth',
    blurb: 'A masterclass in discipline, sustained momentum, and high-performance execution drawing from three decades of leadership excellence.',
    extendedBlurb: 'Success is rarely an accident; it is the compounding output of consistent process. Dr. Howard bridges academic theory with practical boardroom strategy, teaching emerging leaders how to turn obstacles into springboard opportunities.',
    keyQuote: 'Unleash your potential. Master the process.',
    coverImage: '/src/assets/images/power_process_book_1790810830281.jpg',
    palette: {
      bg: '#151e2b',
      accent: '#38bdf8',
      border: 'rgba(56, 189, 248, 0.35)',
    },
  },
  {
    id: 'legendary-tales',
    title: 'Legendary Tales & Short Story Adventures',
    subtitle: 'Vol. 1',
    authorOrIllustrator: 'T.P. Taylor',
    role: 'Cover Design',
    category: 'covers',
    genreTag: 'Dark Fantasy Anthology · Myth & Lore',
    blurb: 'Journey into twilight cemeteries and shadowed realms where wyverns stalk the moonlight and ancient secrets demand blood tribute.',
    extendedBlurb: 'A gripping compendium of dark fantasy tales spanning werewolf curses, necromancy, and forgotten covenants under blood-red moons.',
    keyQuote: 'Where mythical creatures and epic quests awaken.',
    coverImage: '/src/assets/images/legendary_tales_book_1790810927268.jpg',
    palette: {
      bg: '#1c1012',
      accent: '#f87171',
      border: 'rgba(248, 113, 113, 0.35)',
    },
  },
  {
    id: 'chasing-greatness',
    title: 'Chasing Greatness',
    authorOrIllustrator: 'Dr. Darren Johnson',
    role: 'Cover Design',
    category: 'covers',
    genreTag: 'Sports Biography · High School Football',
    blurb: 'Tad Danielson is a high school football player with lofty goals, moving to the big city to fulfill his destiny under stadium lights.',
    extendedBlurb: 'The son of a local sports hero, Tad Danielson tackles the grit, sacrifice, and psychological pressure of elite athletic ambition. A testament to relentless work ethic and belief.',
    keyQuote: 'Will he realize his potential? The chase is on.',
    coverImage: '/src/assets/images/chasing_greatness_book_1790810940690.jpg',
    palette: {
      bg: '#111b15',
      accent: '#22c55e',
      border: 'rgba(34, 197, 94, 0.35)',
    },
  },

  // ==========================================
  // TAB 2: CHILDREN'S ILLUSTRATED STORIES
  // ==========================================
  {
    id: 'carboot-karma',
    title: 'Carboot Karma',
    authorOrIllustrator: 'Illustrated by: Riz Wan',
    role: 'Illustration',
    category: 'children',
    genreTag: "Children's Literature · Empathy & Kindness",
    blurb: 'Aiden dreams of a pair of blue-striped trainers and works hard at a local car boot sale, only to make a selfless choice that changes everything.',
    extendedBlurb: 'Aiden wanted a pair of trainers calling his name in the shop window, but knew his family could not afford them. Setting up a blanket stall with his little sister, he sells his old toys and learns to haggle. When he spots a school uniform his sister desperately needs, he spends his earnings for her. In a touching twist, his selfless generosity rewards him in the most inspiring way.',
    keyQuote: 'Kindness always finds its way back home.',
    coverImage: '/src/assets/images/carboot_karma_book_1790810210737.jpg',
    palette: {
      bg: '#162312',
      accent: '#38bdf8',
      border: 'rgba(56, 189, 248, 0.35)',
    },
  },
  {
    id: 'hector-the-hermit-crab',
    title: 'Hector The Hermit Crab',
    authorOrIllustrator: 'Illustrated by: Riz Wan',
    role: 'Illustration',
    category: 'children',
    genreTag: "Children's Picture Book · Marine Life & Compassion",
    blurb: 'Jimmy and Tammy love their new pet crab Hector, but realize true love means letting him return to his family in the open ocean lagoon.',
    extendedBlurb: 'When captured by collectors and brought to a giant pet emporium, Hector misses his sandy shallows. Tammy and Jimmy give him a loving home, but when they notice his sadness, they make the unselfish decision to set him free. An essential life lesson for young readers: "A true act of love is ensuring that everyone is happy."',
    keyQuote: 'A true act of love is ensuring that everyone is happy.',
    coverImage: '/src/assets/images/hector_crab_book_1790810702445.jpg',
    palette: {
      bg: '#1b1b11',
      accent: '#38bdf8',
      border: 'rgba(56, 189, 248, 0.35)',
    },
  },
  {
    id: 'hide-and-seek',
    title: 'Hide-and-Seek',
    authorOrIllustrator: 'Illustrated by: Riz Wan',
    role: 'Illustration',
    category: 'children',
    genreTag: "Children's Adventure · Values & Integrity",
    blurb: 'A simple evening game of hide-and-seek leads James, Sally, and Mark into an underground cavern and the adventure of their lives.',
    extendedBlurb: 'When Sally falls through a hollow tree trunk into a hidden cavern, she uncovers an antique wooden chest laden with gems, pearls, and gold coins. Rather than keeping the riches, the children work with authorities and choose to donate their discovery to local families in need.',
    keyQuote: 'An exciting story that has little readers turning the pages.',
    coverImage: '/src/assets/images/hide_seek_book_1790810719361.jpg',
    palette: {
      bg: '#131b26',
      accent: '#38bdf8',
      border: 'rgba(56, 189, 248, 0.35)',
    },
  },
  {
    id: 'maisie-manners',
    title: 'Maisie Manners',
    authorOrIllustrator: 'Illustrated by: Riz Wan',
    role: 'Illustration',
    category: 'children',
    genreTag: "Children's Social Growth · Manners & Friendship",
    blurb: 'A vibrant superhero tale of Maisie, who uses warmth, gentle patience, and playful lessons to help Naughty Nathan discover the power of politeness.',
    extendedBlurb: 'Maisie Manners showers kindness with each and every twirl! When Nathan finds himself isolated because of rude behavior, Maisie visits his family and proves that "being polite costs nothing, but shows people you really care." Nathan transforms into Nice Nathan, welcomed by friends again.',
    keyQuote: 'Being polite costs nothing, but shows people you really care.',
    coverImage: '/src/assets/images/maisie_manners_book_1790810733597.jpg',
    palette: {
      bg: '#251329',
      accent: '#818cf8',
      border: 'rgba(129, 140, 248, 0.35)',
    },
  },
  {
    id: 'sunny-meadows',
    title: 'Sunny Meadows Woodland School',
    subtitle: 'A School Trip to Shadow Woods',
    authorOrIllustrator: 'Illustrated by: Riz Wan',
    role: 'Illustration',
    category: 'children',
    genreTag: "Woodland Adventure · Courage & Acceptance",
    blurb: 'Hank the shy hedgehog always felt like an outsider, until a school field trip danger allows his unique quills to save the entire class.',
    extendedBlurb: 'Miss Squirrel leads Class 1 into the towering Shadow Woods. When a hungry snake corners Matilda Mouse and her classmates, Hank steps up bravely, curling into a protective spiky shield that saves everyone. Hank learns that what makes you different makes you a hero.',
    keyQuote: 'Hank was not odd; he was a hero and their new best friend.',
    coverImage: '/src/assets/images/sunny_meadows_book_1790810747186.jpg',
    palette: {
      bg: '#1a1f16',
      accent: '#4ade80',
      border: 'rgba(74, 222, 128, 0.35)',
    },
  },
  {
    id: 'the-tooth-fairies',
    title: 'The Tooth Fairies',
    subtitle: '& the Cleaning Factory',
    authorOrIllustrator: 'Illustrated by: Riz Wan',
    role: 'Illustration',
    category: 'children',
    genreTag: "Magical Fantasy · Health & Dental Care",
    blurb: 'In the secret village of Ordon Gardens, tooth fairies Incisor, Canine, and Molar design a special nocturnal mission to help children protect their smiles.',
    extendedBlurb: 'When children eat too many sugary sweets, incoming milk teeth become brittle and fragile. The three industrious fairies craft a 5-step healthy tooth guide delivered straight under sleeping pillows alongside shiny exchange coins, restoring healthy smiles across the world.',
    keyQuote: 'The fairies guide to sparkling, healthy smiles.',
    coverImage: '/src/assets/images/tooth_fairies_book_1790810762292.jpg',
    palette: {
      bg: '#14221d',
      accent: '#2dd4bf',
      border: 'rgba(45, 212, 191, 0.35)',
    },
  },
];
