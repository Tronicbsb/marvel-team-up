/* ================================================================
   Marvel Super Heroes Team-Up — Engine & Banco de Dados
   ================================================================ */


// ── SISTEMA DE INTERNACIONALIZAÇÃO (I18N) ──
let currentLang = 'en';
try {
  currentLang = localStorage.getItem('marvel_lang') || 'en';
} catch(e) {}

const I18N = {
  en: {
    "nav_hero_rules": "Hero Rules",
    "nav_gallery": "Card Gallery",
    "nav_companion": "Companion Engine",
    "hero_badge": "Marvel MTG Co-op Companion",
    "hero_title": "Marvel Super Heroes <span class='gradient-text'>Team-Up</span>",
    "hero_desc": "Interactive companion app for Magic: The Gathering cooperative mode. Face a multiverse of Marvel villains with your friends or play solo in this premium fan adaptation based on the cooperative rules.",
    "btn_rules": "How to Play",
    "btn_companion": "Start Game",
    "gallery_title": "Card Gallery",
    "gallery_desc": "Explore all custom cards from the Marvel villain deck.",
    "tab_all": "Show All",
    "tab_bosses": "Enemy Bosses (11)",
    "tab_tactics": "Boss Tactics (11)",
    "tab_minions": "Minions (3 types · 10 copies in deck)",
    "companion_title": "Game Panel",
    "companion_desc": "Manage life points, enemy deck, and rules automatically.",
    "config_title": "Game Setup",
    "player_count": "Number of Players",
    "btn_2p": "2 Players",
    "btn_3p": "3 Players",
    "btn_4p": "4 Players",
    "setup_desc": "2-3 players: 6 random bosses out of 11. 4 players: 10 bosses. The Event Deck always contains 27 cards.",
    "btn_reset": "Restart Match",
    "heroes_life": "Heroes Life",
    "bosses_life": "Bosses Life",
    "life_shared": "Life Points (Shared)",
    "heroes": "HEROES",
    "bosses": "BOSSES",
    "boss_stage": "Boss Stage",
    "cards_turn": "Cards / Turn",
    "boss_deck": "Boss Deck",
    "stage_label": "Current Stage:",
    "turn_label": "Game Turn:",
    "event_cards_label": "Event Deck Cards:",
    "cemetery_tactics_label": "Graveyard Tactics:",
    "boss_deck_label": "BOSS DECK",
    "defeated_match_label": "DEFEATED IN THIS MATCH:",
    "no_boss_defeated_yet": "No boss defeated yet.",
    "next_boss_turn_btn": "NEXT BOSS TURN",
    "reset_match_btn": "RESTART MATCH",
    "enemy_graveyard": "Cemetery",
    "btn_draw": "Action Phase (Draw)",
    "btn_dice": "Roll d6 Dice",
    "btn_next": "End Turn",
    "log_title": "Action Log",
    "active_bosses": "ACTIVE STAGE BOSSES",
    "active_bosses_desc": "These are the elite villains currently leading the assault.",
    "fire_nation_action_phase": "VILLAIN ACTION PHASE",
    "action_phase_desc": "By clicking <strong style='color: var(--fire-gold);'>Next Turn</strong>, the bosses automatically play <strong id='cards-per-turn-label'>2</strong> cards from the Event Deck in order. Minions enter the battlefield; tactics are resolved and discarded.",
    "cards_left_label": "Left",
    "event_deck_label": "Event Deck",
    "actions_revealed_turn": "ACTIONS REVEALED THIS TURN:",
    "enemy_battlefield": "ENEMY BATTLEFIELD (MINIONS)",
    "enemy_battlefield_desc": "Marvel villain minions in active combat. They attack the heroes every turn if possible.",
    "cemetery_discard": "GRAVEYARD & DISCARDS",
    "cemetery_desc": "History of resolved tactics and defeated minions. Hover to focus or click to view/edit.",
    "battle_log": "BATTLE LOG (CONSOLE)",
    "battlefield": "Battlefield (Minions)",
    "drawn_actions": "Revealed Actions",
    "cemetery": "Cemetery",
    "defeated_bosses": "Defeated Bosses",
    "quick_guide_title": "Quick Game Guide (Based on Official Rules)",
    "guide_enemy_turn": "Enemy Turn Structure:",
    "guide_untap": "<strong>Untap Step:</strong> Untap all creatures and bosses the enemy army controls.",
    "guide_action": "<strong>Action Phase:</strong> Draw the top two cards of the Event Deck sequentially. Reveal the first, resolve it completely (if it is a Tactic, execute and discard; if it is a Creature, put it on the battlefield), and then reveal and resolve the second.",
    "guide_multiplayer": "<em>Multiplayer Scaling:</em> If playing with 3 or 4 players, reveal 3 cards each action turn!",
    "guide_combat": "<strong>Combat Step:</strong> Each creature in the enemy army attacks the heroes if able (creatures cast this turn do not attack unless they have haste).",
    "guide_stage_advance": "Stage Advancement:",
    "guide_stage_1": "When the Boss team's total life reaches 0, that stage is defeated.",
    "guide_stage_2": "Remove the old bosses from the game. Keep the minions, the Event Deck, the graveyard, and the turn phase exactly as they are!",
    "guide_stage_3": "Reveal the new bosses for the next stage and restore the Bosses' total life (20 HP, or 30 HP if playing with 4 players).",
    "guide_stage_dist": "<strong>Distribution by Stage:</strong>",
    "guide_stage_dist_1": "2 or 3 Players (6 Bosses total): Stage 1 = 1 Boss, Stage 2 = 2 Bosses, Stage 3 = 3 Bosses.",
    "guide_stage_dist_2": "4 Players (10 Bosses total): Stage 1 = 2 Bosses, Stage 2 = 3 Bosses, Stage 3 = 5 Bosses.",
    "footer_text": "Not affiliated with Wizards of the Coast or Marvel. Created for the MTG community.",
    "modal_edit_art": "Edit Art & Text",
    "modal_reset_art": "Reset",
    "modal_close": "Close",
    "cust_title": "Customize Card",
    "cust_name": "Custom Name:",
    "cust_art": "Art Image URL:",
    "cust_text": "Rules Text:",
    "cust_pt": "Power/Toughness:",
    "cust_save": "Save Changes",
    "cust_cancel": "Cancel",
    "die_roll": "Result: <strong>-</strong> — use to resolve abilities!"
  },
  pt: {
    "nav_hero_rules": "Regras dos Heróis",
    "nav_gallery": "Galeria de Cartas",
    "nav_companion": "Motor Companion",
    "hero_badge": "Marvel MTG Co-op Companion",
    "hero_title": "Marvel Super Heroes <span class='gradient-text'>Team-Up</span>",
    "hero_desc": "Aplicativo companion interativo para o modo cooperativo de Magic: The Gathering. Enfrente viloes Marvel multiversais com seus amigos ou jogue solo nesta adaptacao fan premium baseada nas regras cooperativas oficiais.",
    "btn_rules": "Como Jogar",
    "btn_companion": "Iniciar Partida",
    "gallery_title": "Galeria de Cartas",
    "gallery_desc": "Explore todas as cartas customizadas do baralho de viloes Marvel.",
    "tab_all": "Todas",
    "tab_bosses": "Chefes Inimigos (11)",
    "tab_tactics": "Táticas dos Chefes (11)",
    "tab_minions": "Lacaios (3 tipos · 10 cópias no deck)",
    "companion_title": "Painel do Jogo",
    "companion_desc": "Gerencie pontos de vida, deck inimigo e regras automaticamente.",
    "config_title": "Configuração da Partida",
    "player_count": "Número de Jogadores",
    "btn_2p": "2 Jogadores",
    "btn_3p": "3 Jogadores",
    "btn_4p": "4 Jogadores",
    "setup_desc": "2-3 jogadores: 6 chefes aleatórios de 11. 4 jogadores: 10 chefes. O Event Deck sempre contém 27 cartas.",
    "btn_reset": "Reiniciar Partida",
    "heroes_life": "Vida dos Heróis",
    "bosses_life": "Vida dos Chefes",
    "life_shared": "Pontos de Vida (Compartilhados)",
    "heroes": "HERÓIS",
    "bosses": "CHEFES",
    "boss_stage": "Estágio do Chefe",
    "cards_turn": "Cartas / Turno",
    "boss_deck": "Deck de Chefes",
    "stage_label": "Estágio Atual:",
    "turn_label": "Turno do Jogo:",
    "event_cards_label": "Cartas do Event Deck:",
    "cemetery_tactics_label": "Táticas no Cemitério:",
    "boss_deck_label": "DECK DE CHEFES",
    "defeated_match_label": "DERROTADOS NESTA PARTIDA:",
    "no_boss_defeated_yet": "Nenhum chefe derrotado ainda.",
    "next_boss_turn_btn": "PRÓXIMO TURNO DOS CHEFES",
    "reset_match_btn": "REINICIAR PARTIDA",
    "enemy_graveyard": "Cemitério",
    "btn_draw": "Fase de Ação (Comprar)",
    "btn_dice": "Rolar Dado d6",
    "btn_next": "Encerrar Turno",
    "log_title": "Registro de Ações",
    "active_bosses": "CHEFES ATIVOS",
    "active_bosses_desc": "Estes são os viloes de elite que lideram o ataque atualmente.",
    "fire_nation_action_phase": "FASE DE ACAO DOS VILOES",
    "action_phase_desc": "Ao clicar em <strong style='color: var(--fire-gold);'>Próximo Turno</strong>, os chefes jogam automaticamente <strong id='cards-per-turn-label'>2</strong> cartas do Event Deck em ordem. Lacaios entram no campo de batalha; táticas são resolvidas e descartadas.",
    "cards_left_label": "Restantes",
    "event_deck_label": "Event Deck",
    "actions_revealed_turn": "AÇÕES REVELADAS NESTE TURNO:",
    "enemy_battlefield": "CAMPO DE BATALHA INIMIGO (LACAIOS)",
    "enemy_battlefield_desc": "Lacaios de viloes Marvel em combate ativo. Elas atacam os heróis a cada turno, se possível.",
    "cemetery_discard": "CEMITÉRIO E DESCARTES",
    "cemetery_desc": "Histórico de táticas resolvidas e lacaios derrotados. Passe o mouse para focar ou clique para ver/editar.",
    "battle_log": "REGISTRO DE BATALHA (CONSOLE)",
    "battlefield": "Campo de Batalha (Lacaios)",
    "drawn_actions": "Ações Reveladas",
    "cemetery": "Cemitério",
    "defeated_bosses": "Chefes Derrotados",
    "quick_guide_title": "Guia Rápido do Jogo (Baseado nas Regras Oficiais)",
    "guide_enemy_turn": "Estrutura do Turno Inimigo:",
    "guide_untap": "<strong>Etapa de Desvirar:</strong> Desvire todas as criaturas e chefes que o exército inimigo controla.",
    "guide_action": "<strong>Fase de Ação:</strong> Compre as duas cartas do topo do Event Deck sequencialmente. Revele a primeira, resolva-a completamente (se for uma Tática, execute e descarte; se for uma Criatura, coloque-a no campo de batalha), e então revele e resolva a segunda.",
    "guide_multiplayer": "<em>Escalonamento Multijogador:</em> Se jogar com 3 ou 4 jogadores, revele 3 cartas por turno de ação!",
    "guide_combat": "<strong>Etapa de Combate:</strong> Cada criatura no exército inimigo ataca os heróis se possível (criaturas conjuradas neste turno não atacam a menos que tenham ímpeto).",
    "guide_stage_advance": "Avanço de Estágio:",
    "guide_stage_1": "Quando a vida total do time de Chefes chegar a 0, aquele estágio é derrotado.",
    "guide_stage_2": "Remova os chefes antigos do jogo. Mantenha os lacaios, o Event Deck, o cemitério e a fase do turno exatamente como estão!",
    "guide_stage_3": "Revele os novos chefes para o próximo estágio e restaure a vida total dos Chefes (20 PV, ou 30 PV se jogar com 4 jogadores).",
    "guide_stage_dist": "<strong>Distribuição por Estágio:</strong>",
    "guide_stage_dist_1": "2 ou 3 Jogadores (6 Chefes no total): Estágio 1 = 1 Chefe, Estágio 2 = 2 Chefes, Estágio 3 = 3 Chefes.",
    "guide_stage_dist_2": "4 Jogadores (10 Chefes no total): Estágio 1 = 2 Chefes, Estágio 2 = 3 Chefes, Estágio 3 = 5 Chefes.",
    "footer_text": "Nao afiliado com Wizards of the Coast ou Marvel. Criado para a comunidade de MTG.",
    "modal_edit_art": "Editar Arte e Texto",
    "modal_reset_art": "Restaurar",
    "modal_close": "Fechar",
    "cust_title": "Personalizar Carta",
    "cust_name": "Nome Customizado:",
    "cust_art": "URL da Imagem da Arte:",
    "cust_text": "Texto de Regras:",
    "cust_pt": "Poder/Resistência:",
    "cust_save": "Salvar Alterações",
    "cust_cancel": "Cancelar",
    "die_roll": "Resultado: <strong>-</strong> — use para resolver habilidades!"
  }
};

function switchLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem('marvel_lang', lang);
  } catch(e) {}
  
  applyTranslations();
  if (typeof updateUI === 'function') {
    updateUI();
  }
  if (typeof renderCardGallery === 'function') {
    renderCardGallery('all');
  }
  
  // Update button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function applyTranslations() {
  const dict = I18N[currentLang] || I18N['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' && el.type === 'button') {
        el.value = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
}


// -- BANCO DE DADOS DAS CARTAS (Marvel Super Heroes Team-Up) --

const CARD_DATABASE = {
  bosses: [
    {
      id: "combustion_man",
      originalName: "Baxter, Exzzperimental Zzientist",
      name: "Arnim Zola, Bio-Fanatic",
      element: "fire",
      type: "Chefe Lendario - Cientista da Hydra",
      rules: "Criaturas chamadas HYDRA Troopers que os chefes controlam tem voar.",
      flavor: "A ciencia de Zola transforma soldados descartaveis em armas biologicas obedientes.",
      pt: "4/4",
      artDefault: "Z",
      nameEn: "Arnim Zola, Bio-Fanatic",
      typeEn: "Legendary Boss - Hydra Scientist",
      rulesEn: `Creatures named HYDRA Troopers the bosses control have flying.`,
      flavorEn: "Zola's science turns disposable soldiers into obedient biological weapons."
    },
    {
      id: "zuko",
      originalName: "Bebop, Porcine Punk",
      name: "Bullseye, Death Dealer",
      element: "earth",
      type: "Chefe Lendario - Deus da Trapaça",
      rules: "Sempre que os chefes atacarem, coloque um marcador +1/+1 em cada criatura chamada HYDRA Troopers.",
      type: "Chefe Lendario - Mercenario Assassino",
      flavor: "Ele ri no meio do caos, e cada agente da Hydra aprende a mirar onde mais doi.",
      pt: "3/5",
      artDefault: "B",
      nameEn: "Bullseye, Death Dealer",
      typeEn: "Legendary Boss - Assassin Mercenary",
      rulesEn: `Whenever the bosses attack, put a +1/+1 counter on each creature named HYDRA Troopers.`,
      flavorEn: "He laughs in the chaos, and every Hydra agent learns where to aim for pain."
    },
    {
      id: "ty_lee",
      originalName: "Chrome Dome, Cyber-Ninja",
      name: "Winter Soldier, Icy Assassin",
      element: "water",
      type: "Chefe Lendario - Mercenario",
      rules: "Lacaios que os chefes controlam recebem +1/+0 para cada chefe em jogo.",
      type: "Chefe Lendario - Arma Cibernetica",
      flavor: "Condicionado pela Hydra, ele transforma disciplina militar em forca letal.",
      pt: "2/6",
      artDefault: "W",
      nameEn: "Winter Soldier, Icy Assassin",
      typeEn: "Legendary Boss - Cybernetic Weapon",
      rulesEn: `Minions the bosses control get +1/+0 for each boss on the battlefield.`,
      flavorEn: "Conditioned by Hydra, he turns military discipline into lethal force."
    },
    {
      id: "azula",
      originalName: "Karai, Shadow Warrior",
      name: "Madame Hydra",
      element: "fire",
      type: "Chefe Lendario - Deusa da Morte",
      rules: "Sempre que uma criatura que os herois controlam morrer, os herois perdem 1 ponto de vida.",
      type: "Chefe Lendario - Comandante da Hydra",
      flavor: "Ela comanda celulas secretas com uma frieza que transforma perdas em propaganda.",
      pt: "4/4",
      artDefault: "H",
      nameEn: "Madame Hydra",
      typeEn: "Legendary Boss - Hydra Commander",
      rulesEn: `Whenever a creature the heroes control dies, the heroes lose 1 life.`,
      flavorEn: "She commands secret cells with a chill that turns every loss into propaganda."
    },
    {
      id: "zhao",
      originalName: "Krang, Dimension X Overlord",
      name: "M.O.D.O.K.",
      element: "spirit",
      type: "Chefe Lendario - Comandante Hydra",
      rules: "Os chefes jogam uma carta adicional a cada turno.\nNo inicio do turno dos chefes, os chefes perdem 2 pontos de vida.",
      type: "Chefe Lendario - Cerebro Cientifico",
      flavor: "Uma mente gigantesca exige calculos demais, recursos demais e sacrificios demais.",
      pt: "5/4",
      artDefault: "M",
      nameEn: "M.O.D.O.K.",
      typeEn: "Legendary Boss - Scientific Menace",
      rulesEn: `The bosses play an additional card each turn.\nAt the beginning of the bosses' turn, the bosses lose 2 life.`,
      flavorEn: "A gigantic mind demands too many calculations, too many resources, and too many sacrifices."
    },
    {
      id: "hama",
      originalName: "Leatherhead, Sewer Gator",
      name: "Killmonger, Scourge of Wakanda",
      element: "earth",
      type: "Chefe Lendario - Metamorfa",
      rules: "Quando esta carta entrar, os chefes ganham 5 pontos de vida para cada chefe em jogo.",
      type: "Chefe Lendario - Guerreiro Mercenario",
      flavor: "Cada confronto vencido fortalece sua lenda e atrai novos seguidores para a guerra.",
      pt: "4/5",
      artDefault: "K",
      nameEn: "Killmonger, Scourge of Wakanda",
      typeEn: "Legendary Boss - Mercenary Warrior",
      rulesEn: `When this card enters, the bosses gain 5 life for each boss on the battlefield.`,
      flavorEn: "Every won duel strengthens his legend and draws new followers into the war."
    },
    {
      id: "long_feng",
      originalName: "Rat King, the Chaosbringer",
      name: "The Kingpin of Crime",
      element: "earth",
      type: "Chefe Lendario - Monarca Arcano",
      rules: "Lacaios que os chefes controlam tem toque mortifero.",
      type: "Chefe Lendario - Senhor do Submundo",
      flavor: "Na cidade dele, ate uma ordem sussurrada pode ser uma sentenca.",
      pt: "3/5",
      artDefault: "K",
      nameEn: "The Kingpin of Crime",
      typeEn: "Legendary Boss - Underworld Kingpin",
      rulesEn: `Minions the bosses control have deathtouch.`,
      flavorEn: "In his city, even a whispered order can be a sentence."
    },
    {
      id: "mai",
      originalName: "Rocksteady, Rowdy Rhino",
      name: "Elektra, Daughter of the Hand",
      element: "spirit",
      type: "Chefe Lendario - Atirador de Elite",
      rules: "Sempre que os chefes atacarem, coloque um marcador +1/+1 em cada criatura chamada HYDRA Troopers.",
      type: "Chefe Lendario - Ninja da Mao",
      flavor: "A Hand se move em silencio, mas cada golpe dela deixa um aviso.",
      pt: "4/4",
      artDefault: "E",
      nameEn: "Elektra, Daughter of the Hand",
      typeEn: "Legendary Boss - Hand Ninja",
      rulesEn: `Whenever the bosses attack, put a +1/+1 counter on each creature named HYDRA Troopers.`,
      flavorEn: "The Hand moves in silence, but every strike she lands leaves a warning."
    },
    {
      id: "sozin",
      originalName: "Savanti Romero, Temporal Rogue",
      name: "Baron Helmut Zemo",
      element: "spirit",
      type: "Chefe Lendario - Titã Louco",
      rules: "Sempre que uma ou mais criaturas que os chefes controlam causarem dano de combate aos herois, os herois escolhem uma carta e a colocam no fundo do grimorio.",
      type: "Chefe Lendario - Estrategista Mastermind",
      flavor: "Ele nao precisa vencer a luta se conseguir fazer os herois se desfazerem por dentro.",
      pt: "5/5",
      artDefault: "Z",
      nameEn: "Baron Helmut Zemo",
      typeEn: "Legendary Boss - Mastermind Strategist",
      rulesEn: `Whenever one or more creatures the bosses control deal combat damage to the heroes, the heroes choose a card and put it on the bottom of the library.`,
      flavorEn: "He does not need to win the fight if he can make the heroes collapse from within."
    },
    {
      id: "ozai",
      originalName: "Shredder, Foot Clan Overlord",
      name: "Baron Strucker, HYDRA Overlord",
      element: "fire",
      type: "Chefe Lendario - Senhor do Tempo",
      rules: "Sempre que uma criatura que os chefes controlam morrer, os herois perdem 1 ponto de vida.",
      type: "Chefe Lendario - Chefe Principal da Hydra",
      flavor: "Corta uma cabeca e duas tomam seu lugar, todas respondendo ao Barao Strucker.",
      pt: "6/6",
      artDefault: "S",
      nameEn: "Baron Strucker, HYDRA Overlord",
      typeEn: "Legendary Boss - Hydra Overlord",
      rulesEn: `Whenever a creature the bosses control dies, the heroes lose 1 life.`,
      flavorEn: "Cut off one head and two take its place, all answering to Baron Strucker."
    },
    {
      id: "jet_brainwashed",
      originalName: "Slash, the Dark Mirror",
      name: "Crossbones, Malicious Mercenary",
      element: "fire",
      type: "Chefe Lendario - Simbionte",
      rules: "Criaturas atacantes que os chefes controlam tem iniciativa.",
      type: "Chefe Lendario - Combatente Brutal",
      flavor: "Crossbones prefere uma entrada direta, explosiva e sem sobreviventes no caminho.",
      pt: "5/3",
      artDefault: "C",
      nameEn: "Crossbones, Malicious Mercenary",
      typeEn: "Legendary Boss - Brutal Combatant",
      rulesEn: `Attacking creatures the bosses control have first strike.`,
      flavorEn: "Crossbones prefers a direct, explosive entrance with no survivors in the way."
    }
  ],

  minions: [
    {
      id: "fire_soldier",
      originalName: "Foot Disciple",
      name: "HYDRA Troopers",
      element: "fire",
      type: "Criatura - Tropas da HYDRA",
      rules: "Esta criatura nao pode bloquear.",
      flavor: "Infantaria basica da HYDRA, treinada para avancar mesmo quando a missao e impossivel.",
      pt: "3/3",
      artDefault: "H",
      nameEn: "HYDRA Troopers",
      typeEn: "Creature - HYDRA Troopers",
      rulesEn: `This creature can't block.`,
      flavorEn: "HYDRA's basic infantry, trained to advance even when the mission is impossible."
    },
    {
      id: "fire_scout",
      originalName: "Foot Skirmisher",
      name: "Ninja of the Hand",
      element: "spirit",
      type: "Criatura - Ninja da Hand",
      rules: "Voar.\n(Esta criatura nao pode ser bloqueada por criaturas sem voar.)\nEsta criatura nao pode bloquear.",
      flavor: "Rapido demais para ser cercado, o ninja da Hand surge onde a defesa esta aberta.",
      pt: "2/1",
      artDefault: "N",
      nameEn: "Ninja of the Hand",
      typeEn: "Creature - Hand Ninja",
      rulesEn: `Flying.\n(This creature can't be blocked except by creatures with flying or reach.)\nThis creature can't block.`,
      flavorEn: "Too quick to be surrounded, the Hand ninja appears wherever the defense is open."
    },
    {
      id: "fire_vanguard",
      originalName: "Foot Enforcer",
      name: "Agents of HYDRA",
      element: "fire",
      type: "Criatura - Agente de Elite da Hydra",
      rules: "Esta criatura nao pode bloquear.\nEsta criatura so pode ser bloqueada por uma criatura.",
      flavor: "Executores veteranos da organizacao, enviados quando a tropa comum nao basta.",
      pt: "6/3",
      artDefault: "A",
      nameEn: "Agents of HYDRA",
      typeEn: "Creature - Elite Hydra Agent",
      rulesEn: `This creature can't block.\nThis creature can only be blocked by one creature.`,
      flavorEn: "Veteran enforcers of the organization, sent when ordinary troops are not enough."
    }
  ],

  events: [
    {
      id: "combustion_blast",
      originalName: "Baxter's Experiments",
      name: "Super-Soldier Serum",
      element: "fire",
      type: "Tatica (Plano Vilanesco)",
      rules: "Copie o proximo evento que os Chefes jogarem.\n(Coloque este card ao lado do deck de eventos. Depois que o proximo evento for jogado e resolvido, coloque este card no descarte de eventos.)",
      flavor: "Um experimento cientifico e militar que dobra o perigo do proximo plano.",
      nameEn: "Super-Soldier Serum",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `Copy the next event the Bosses play.\n(Put this card aside. After the next event is played and resolved, put this card into the graveyard.)`,
      flavorEn: "A scientific and military experiment that doubles the danger of the next scheme."
    },
    {
      id: "zuko_fire_lash",
      originalName: "Bebop's Rampage",
      name: "Death to Our Enemies",
      element: "fire",
      type: "Tatica (Plano Vilanesco)",
      rules: "Esta Tatica causa 2 pontos de dano a cada criatura que os herois controlam.",
      flavor: "Os viloes atacam com agressividade total, sem poupar ninguem no caminho.",
      nameEn: "Death to Our Enemies",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `This Tactic deals 2 damage to each creature the heroes control.`,
      flavorEn: "The villains attack with total aggression, sparing no one in their path."
    },
    {
      id: "ty_lee_chi_block",
      originalName: "Chrome Dome's Overload",
      name: "Robot Domination",
      element: "earth",
      type: "Tatica (Plano Vilanesco)",
      rules: "Cada heroi sacrifica uma criatura virada que controla.",
      flavor: "Tecnologia fora de controle transforma cada maquina em uma ordem de execucao.",
      nameEn: "Robot Domination",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `Each hero sacrifices a tapped creature they control.`,
      flavorEn: "Technology out of control turns every machine into an execution order."
    },
    {
      id: "azula_infiltration",
      originalName: "Karai's Planning",
      name: "Villainous Hideout",
      element: "water",
      type: "Tatica (Plano Vilanesco)",
      rules: "Os herois perdem 3 pontos de vida e os chefes ganham 3 pontos de vida.",
      flavor: "Na base inimiga, cada mapa na parede ja aponta para a proxima derrota.",
      nameEn: "Villainous Hideout",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `The heroes lose 3 life and the bosses gain 3 life.`,
      flavorEn: "Inside the enemy base, every map on the wall already points to the next defeat."
    },
    {
      id: "zhao_conquest",
      originalName: "Krang's Stratagem",
      name: "Construct a Cosmic Cube",
      element: "fire",
      type: "Tatica (Plano Vilanesco)",
      rules: "Como equipe, os herois descartam um total de 2 cartas.",
      flavor: "Um plano de dominacao ganha forma enquanto energia cosmica se acumula.",
      nameEn: "Construct a Cosmic Cube",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `As a team, the heroes discard a total of 2 cards.`,
      flavorEn: "A domination plan takes shape as cosmic energy builds."
    },
    {
      id: "hama_bloodbending",
      originalName: "Leatherhead's Smackdown",
      name: "The Ruinous Wrecking Crew",
      element: "water",
      type: "Tatica (Plano Vilanesco)",
      rules: "Como equipe, os herois escolhem uma criatura que controlam com o maior poder e a destroem. Os chefes perdem pontos de vida igual ao poder dela.",
      flavor: "A pancadaria destrutiva derruba o maior defensor e cobra o preco em vida.",
      nameEn: "The Ruinous Wrecking Crew",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `As a team, the heroes choose a creature they control with the greatest power and destroy it. The bosses lose life equal to its power.`,
      flavorEn: "The destructive brawl drops the strongest defender and exacts a price in life."
    },
    {
      id: "long_feng_brainwash",
      originalName: "Rat King's Revolution",
      name: "The Masters of Evil",
      element: "earth",
      type: "Tatica (Plano Vilanesco)",
      rules: "Cada heroi vira X criaturas que controla, onde X e o numero de chefes em jogo.\n(Se uma permanente ja estiver virada, ela continua virada.)",
      flavor: "Uma coalizao criminosa se ergue, e cada heroi sente a pressao do cerco.",
      nameEn: "The Masters of Evil",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `Each hero taps X creatures they control, where X is the number of bosses on the battlefield.\n(If a permanent is already tapped, it remains tapped.)`,
      flavorEn: "A criminal coalition rises, and every hero feels the pressure of the siege."
    },
    {
      id: "mai_pinpoint",
      originalName: "Rocksteady's Beatdown",
      name: "Evil's Thrall",
      element: "earth",
      type: "Tatica (Plano Vilanesco)",
      rules: "Destrua todas as criaturas com voar que os herois controlam.",
      flavor: "Capangas violentos avancam sob uma forca brutal que nao aceita recuo.",
      nameEn: "Evil's Thrall",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `Destroy all creatures with flying the heroes control.`,
      flavorEn: "Violent henchmen advance under a brutal force that accepts no retreat."
    },
    {
      id: "sozin_comet_erase",
      originalName: "Savanti Romero's Curse",
      name: "Thunderbolts Conspiracy",
      element: "spirit",
      type: "Tatica (Plano Vilanesco)",
      rules: "Cada heroi devolve X criaturas que controla para a mao de seus donos, onde X e o numero de chefes em jogo.",
      flavor: "Um plano secreto vira os recursos dos herois contra eles mesmos.",
      nameEn: "Thunderbolts Conspiracy",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `Each hero returns X creatures they control to their owners' hands, where X is the number of bosses on the battlefield.`,
      flavorEn: "A secret plan turns the heroes' own resources against them."
    },
    {
      id: "ozai_decree",
      originalName: "Shredder's Challenge",
      name: "Hour of Defeat",
      element: "water",
      type: "Tatica (Plano Vilanesco)",
      rules: "Retorne 2 cartas de Soldado aleatorias do cemiterio dos chefes para o campo de batalha sob o controle dos chefes.",
      flavor: "O desafio do chefe chega no pior momento, trazendo reforcos do descarte.",
      nameEn: "Hour of Defeat",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `Return 2 random Soldier cards from the bosses' graveyard to the battlefield under the bosses' control.`,
      flavorEn: "The boss challenge arrives at the worst moment, bringing reinforcements from the discard."
    },
    {
      id: "jet_rampage",
      originalName: "Slash's Smash",
      name: "Punishing Punch",
      element: "spirit",
      type: "Tatica (Plano Vilanesco)",
      rules: "Destrua todos os Aliados que os herois controlam.",
      flavor: "Um golpe brutal atravessa a linha de frente e derruba os aliados.",
      nameEn: "Punishing Punch",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `Destroy all Allies the heroes control.`,
      flavorEn: "A brutal blow breaks through the front line and drops the allies."
    },
    {
      id: "fire_ambush",
      originalName: "Villain Infiltration",
      name: "HYDRA Infiltration",
      element: "fire",
      type: "Tatica (Plano Vilanesco)",
      rules: "Como equipe, os herois escolhem uma criatura que controlam com o maior poder e a destroem.",
      flavor: "A infiltracao da HYDRA derruba o maior defensor antes do alarme tocar.",
      nameEn: "HYDRA Infiltration",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `As a team, the heroes choose a creature they control with the greatest power and destroy it.`,
      flavorEn: "HYDRA infiltration drops the strongest defender before the alarm sounds."
    },
    {
      id: "firebombing",
      originalName: "Villain Mayhem",
      name: "Cruel Alliance",
      element: "fire",
      type: "Tatica (Plano Vilanesco)",
      rules: "Como equipe, os herois escolhem 3 criaturas que controlam. Destrua todas as outras criaturas que os herois controlam.",
      flavor: "Uma alianca de viloes obriga os herois a escolher quem ainda conseguem salvar.",
      nameEn: "Cruel Alliance",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `As a team, the heroes choose 3 creatures they control. Destroy all other creatures the heroes control.`,
      flavorEn: "An alliance of villains forces the heroes to choose who they can still save."
    },
    {
      id: "resurgence",
      originalName: "Villain Scheme",
      name: "Decoy Ploy",
      element: "spirit",
      type: "Tatica (Plano Vilanesco)",
      rules: "Embaralhe esta carta e todo o cemiterio dos chefes de volta no grimorio (Event Deck) dos chefes.",
      flavor: "O plano enganoso puxa o descarte de volta para o baralho e muda a rota da batalha.",
      nameEn: "Decoy Ploy",
      typeEn: "Tactic (Villain Scheme)",
      rulesEn: `Shuffle this card and the bosses' entire graveyard back into the bosses' Event Deck.`,
      flavorEn: "The deceptive ploy pulls the discard back into the deck and changes the battle's path."
    }
  ]
};

// -- SISTEMA DE PERSISTENCIA DE CUSTOMIZACAO DE ARTE (LocalStorage) --

// Artes base recuperadas da galeria temporaria. O localStorage ainda pode sobrescrever estes links.
const DEFAULT_CUSTOM_ART = {
  combustion_man: { artUrl: "https://cards.scryfall.io/art_crop/front/0/7/07c70df6-b064-424a-852e-201b312a5b54.jpg" },
  zuko: { artUrl: "https://cards.scryfall.io/art_crop/front/f/d/fd1f0b5f-5e0e-4da1-ab54-a62db5af3591.jpg" },
  ty_lee: { artUrl: "https://cards.scryfall.io/art_crop/front/e/b/ebf71ffc-6e3e-4ca0-a84a-3c1ebd2b64b1.jpg" },
  azula: { artUrl: "https://cards.scryfall.io/art_crop/front/e/9/e94ccedb-1d27-4098-8823-d8d99b30387c.jpg" },
  zhao: { artUrl: "https://cards.scryfall.io/art_crop/front/3/8/38e87542-50f7-4812-9338-84e4b9b7bb44.jpg" },
  hama: { artUrl: "https://cards.scryfall.io/art_crop/front/5/0/5060aa13-4b33-4b3a-8bdb-dd81308fa3e3.jpg" },
  long_feng: { artUrl: "https://cards.scryfall.io/art_crop/front/4/9/495c08ea-5502-4bfe-aa15-fa85556755ae.jpg" },
  mai: { artUrl: "https://cards.scryfall.io/art_crop/front/a/c/ac3e586c-d654-4631-beda-a5e29cf04717.jpg" },
  sozin: { artUrl: "https://cards.scryfall.io/art_crop/front/c/2/c2aadc25-7755-4bc8-a8af-b01d27eec364.jpg" },
  ozai: { artUrl: "https://cards.scryfall.io/art_crop/front/e/a/eaf2251a-ffaf-4055-9474-7e3d08d89609.jpg" },
  jet_brainwashed: { artUrl: "https://cards.scryfall.io/art_crop/front/1/5/1576148a-2371-49ba-8eef-0bc2ec3dcaf3.jpg" },
  fire_soldier: { artUrl: "https://cards.scryfall.io/art_crop/front/4/0/40c202f1-6e0d-42f4-a41e-e0be3362d585.jpg" },
  fire_scout: { artUrl: "https://cards.scryfall.io/art_crop/front/6/b/6b8116d8-2cc6-449b-a8b4-8a5166553497.jpg" },
  fire_vanguard: { artUrl: "https://cards.scryfall.io/art_crop/front/8/5/857fef2e-df1f-4ec6-a262-f6fa52389cf9.jpg" },
  combustion_blast: { artUrl: "https://cards.scryfall.io/art_crop/front/8/4/845b0be1-4f85-4a8c-8205-dc85c8cf9a61.jpg" },
  zuko_fire_lash: { artUrl: "https://cards.scryfall.io/art_crop/front/f/2/f2a8f518-c0b5-4e15-aab2-49b5ef29fb41.jpg" },
  ty_lee_chi_block: { artUrl: "https://cards.scryfall.io/art_crop/front/b/2/b26bb968-6612-43fe-9147-a3d4786cbc20.jpg" },
  azula_infiltration: { artUrl: "https://cards.scryfall.io/art_crop/front/8/2/822b0249-e1df-453d-8b60-75a5196ed818.jpg" },
  zhao_conquest: { artUrl: "https://cards.scryfall.io/art_crop/front/4/4/448de757-ac16-4529-b851-1a1331b821a5.jpg" },
  hama_bloodbending: { artUrl: "https://cards.scryfall.io/art_crop/front/4/d/4d8c8ceb-84cd-46d2-9230-ab6ca4569334.jpg" },
  long_feng_brainwash: { artUrl: "https://cards.scryfall.io/art_crop/front/6/5/65ba4439-3282-4179-85b9-67a25e2e5d24.jpg" },
  mai_pinpoint: { artUrl: "https://cards.scryfall.io/art_crop/front/3/1/310e30cd-b8c3-40ea-9d61-57c5c5fc2a0b.jpg" },
  sozin_comet_erase: { artUrl: "https://cards.scryfall.io/art_crop/front/f/4/f498c1a4-54d2-4e87-952f-8cf7e408930c.jpg" },
  ozai_decree: { artUrl: "https://cards.scryfall.io/art_crop/front/9/e/9e0034dd-396e-46af-b931-0daa25da4406.jpg" },
  jet_rampage: { artUrl: "https://cards.scryfall.io/art_crop/front/a/3/a33a4cb4-1b57-47ca-8e5e-58ff46a6e0ce.jpg" },
  fire_ambush: { artUrl: "https://cards.scryfall.io/art_crop/front/c/2/c2e446e1-e384-4d5f-8099-544f78c08510.jpg" },
  firebombing: { artUrl: "https://cards.scryfall.io/art_crop/front/d/8/d895d5a1-d382-438b-8551-e142bb5142af.jpg" },
  resurgence: { artUrl: "https://cards.scryfall.io/art_crop/front/d/8/d8719b74-48ef-4f68-b59a-949edd644ddc.jpg" }
};
const CustomizationStore = {
  key: 'marvel_teamup_custom_art_db',
  
  getAll() {
    if (typeof localStorage === 'undefined') return {};
    const saved = localStorage.getItem(this.key);
    return saved ? JSON.parse(saved) : {};
  },
  
  get(cardId) {
    const local = this.getAll()[cardId] || {};
    const globalDefault = DEFAULT_CUSTOM_ART[cardId] || {};
    const merged = { ...globalDefault, ...local };
    return Object.keys(merged).length ? merged : null;
  },
  
  save(cardId, data) {
    const db = this.getAll();
    db[cardId] = { ...(db[cardId] || {}), ...data };
    localStorage.setItem(this.key, JSON.stringify(db));
  },
  
  reset(cardId) {
    const db = this.getAll();
    delete db[cardId];
    localStorage.setItem(this.key, JSON.stringify(db));
  },
  
  resetAll() {
    localStorage.removeItem(this.key);
  }
};

// Migração pontual de textos antigos salvos no localStorage
function migrateLegacyCustomTexts() {
  if (typeof localStorage === 'undefined') return;
  try {
    const db = CustomizationStore.getAll();
    if (!db || typeof db !== 'object') return;
    let changed = false;

    // 1) Correções específicas já padronizadas no projeto
    const exactRuleFixes = {
      jet_rampage: "Destrua todos os Aliados que os heróis controlam.",
      ozai: "Sempre que uma criatura que os chefes controlam morrer, os heróis perdem 1 ponto de vida.",
      mai: "Sempre que os chefes atacarem, coloque um marcador +1/+1 em cada criatura chamada HYDRA Troopers.",
      hama: "Quando esta carta entrar, os chefes ganham 5 pontos de vida para cada chefe em jogo.",
      long_feng: "Lacaios que os chefes controlam tem toque mortifero."
    };

    Object.entries(exactRuleFixes).forEach(([cardId, canonicalRule]) => {
      const item = db[cardId];
      if (!item || typeof item.customText !== 'string') return;
      if (item.customText !== canonicalRule) {
        db[cardId] = { ...item, customText: canonicalRule };
        changed = true;
      }
    });

    // 2) Varredura global de termos antigos
    Object.keys(db).forEach((cardId) => {
      const item = db[cardId];
      if (!item || typeof item.customText !== 'string') return;

      let updated = item.customText;
      updated = updated.replace(/Dobradores\s*\(benders\)/gi, 'Aliados');
      updated = updated.replace(/\bbenders\b/gi, 'Aliados');
      updated = updated.replace(/\bDobradores\b/gi, 'Aliados');

      // Ajustes de consistência de texto recorrentes
      updated = updated.replace(/Soldado da Hydra(?!\.)/gi, 'HYDRA Troopers');
      updated = updated.replace(/Hydra Soldier/gi, 'HYDRA Troopers');
      updated = updated.replace(/Soldados que os chefes controlam recebem \+1\/\+0 para cada chefe em jogo\./gi, 'Lacaios que os chefes controlam recebem +1/+0 para cada chefe em jogo.');
      updated = updated.replace(/Soldados que os chefes controlam t[eê]m toque mort[ií]fero\./gi, 'Lacaios que os chefes controlam tem toque mortifero.');
      updated = updated.replace(/Soldiers the bosses control get \+1\/\+0 for each boss on the battlefield\./gi, 'Minions the bosses control get +1/+0 for each boss on the battlefield.');
      updated = updated.replace(/Soldiers the bosses control have deathtouch\./gi, 'Minions the bosses control have deathtouch.');
      updated = updated.replace(/chefes perdem 1 ponto de vida\./gi, 'heróis perdem 1 ponto de vida.');

      if (updated !== item.customText) {
        db[cardId] = { ...item, customText: updated };
        changed = true;
      }
    });

    if (changed) {
      localStorage.setItem(CustomizationStore.key, JSON.stringify(db));
    }
  } catch (err) {
    console.warn('Falha na migração de textos antigos:', err);
  }
}

// ── MAQUINA DE ESTADO DO JOGO COOPERATIVO (Companion Engine) ──

const GameEngine = {
  playerCount: 2,
  heroesLife: 20,
  bossesLife: 20,
  activeStage: 1,
  
  bossDeck: [],      // Lista embaralhada de chefes (6 ou 10 cartas)
  activeBosses: [],  // Chefes atualmente em combate
  
  eventDeck: [],     // Biblioteca de eventos inimiga (27 cartas)
  eventGraveyard: [],// Cemitério
  drawnCards: [],    // Cartas compradas no turno atual
  battlefield: [],   // Criaturas da Hydra em combate
  
  turnCount: 1,
  isGameOver: false,
  isVictory: false,
  
  // Inicialização da Partida
  setupGame(players) {
    this.playerCount = players;
    this.activeStage = 1;
    this.eventGraveyard = [];
    this.drawnCards = [];
    this.battlefield = [];
    this.logEntries = [];
    this.turnCount = 1;
    this.isGameOver = false;
    this.isVictory = false;
    
    // 1. Configurar Boss Deck conforme Player Count
    //    O conjunto tem 11 cartas de chefe no total.
    //    2-3 Jogadores: escolher 6 aleatoriamente dos 11.
    //    4 Jogadores:   escolher 10 aleatoriamente dos 11.
    const allBosses = [...CARD_DATABASE.bosses]; // 11 bosses
    this.shuffleArray(allBosses);
    
    this.defeatedBosses = []; // Histórico de derrotados nesta partida

    if (players === 4) {
      // 4 Jogadores: 10 Chefes (Stage 1: 2 Bosses | Stage 2: 3 Bosses | Stage 3: 5 Bosses)
      this.bossDeck = allBosses.slice(0, 10);
      this.heroesLife = 40;
      this.bossesLife = 30;
      // Estágio 1: revela os 2 primeiros do deck embaralhado
      this.activeBosses = this.bossDeck.splice(0, 2);
    } else {
      // 2 ou 3 Jogadores: 6 Chefes escolhidos aleatoriamente dos 11 disponíveis
      // (Stage 1: 1 Boss | Stage 2: 2 Bosses | Stage 3: 3 Bosses)
      this.bossDeck = allBosses.slice(0, 6);
      this.heroesLife = (players === 3) ? 30 : 20;
      this.bossesLife = (players === 3) ? 30 : 20;
      // Estágio 1: revela o primeiro chefe do topo do deck
      this.activeBosses = this.bossDeck.splice(0, 1);
    }
    
    // 2. Criar e Embaralhar Event Deck (27 cartas conforme as regras oficiais TMNT/Avatar Team-Up)
    //    DB tem 14 táticas: 11 de boss específicas + Emboscada + Bombardeio + Ressurgimento (1 cópia cada)
    //    + cópias extras abaixo para atingir os totais corretos:
    //    - 11x Táticas de boss (1 cada): combustion, zuko, ty_lee, azula, zhao, hama, long_feng, mai, sozin, ozai, jet
    //    - 2x HYDRA Infiltration (Villain Infiltration) -> 1 no DB + 1 extra abaixo
    //    - 3x Cruel Alliance (Villain Mayhem) -> 1 no DB + 2 extras abaixo
    //    - 1x Ressurgimento Imperial (Villain Scheme) → 1 no DB
    //    Total táticas: 14 (do forEach) + 1 + 2 = 17
    //    - 5x HYDRA Troopers (Foot Disciple)
    //    - 3x Ninja of the Hand (Foot Skirmisher)
    //    - 2x Agents of HYDRA (Foot Enforcer)
    //    Total lacaios: 10
    //    GRAND TOTAL: 17 + 10 = 27 ✓
    const deck = [];
    
    // 14 táticas do DB (11 boss específicas + 3 gerais — cada uma 1 cópia)
    CARD_DATABASE.events.forEach(ev => {
      deck.push({ ...ev, instanceId: `event_${ev.id}_${Date.now()}_${Math.random()}` });
    });
    
    // 5x HYDRA Troopers (Foot Disciple)
    for (let i = 0; i < 5; i++) {
      deck.push({ ...CARD_DATABASE.minions[0], instanceId: `minion_soldier_${i}` });
    }
    
    // 3x Ninja of the Hand (Foot Skirmisher)
    for (let i = 0; i < 3; i++) {
      deck.push({ ...CARD_DATABASE.minions[1], instanceId: `minion_scout_${i}` });
    }
    
    // 2x Agents of HYDRA (Foot Enforcer)
    for (let i = 0; i < 2; i++) {
      deck.push({ ...CARD_DATABASE.minions[2], instanceId: `minion_vanguard_${i}` });
    }
    
    // Nota: Villain Infiltration (2x) e Villain Mayhem (3x) já vêm nos events com IDs únicos.
    // As cópias extras precisam ser adicionadas manualmente pois o DB tem só 1 de cada:
    const fireAmbush = CARD_DATABASE.events.find(e => e.id === 'fire_ambush');
    if (fireAmbush) {
      deck.push({ ...fireAmbush, instanceId: `event_fire_ambush_copy2` });
    }
    
    const firebombing = CARD_DATABASE.events.find(e => e.id === 'firebombing');
    if (firebombing) {
      deck.push({ ...firebombing, instanceId: `event_firebombing_copy2` });
      deck.push({ ...firebombing, instanceId: `event_firebombing_copy3` });
    }
    
    this.shuffleArray(deck);
    this.eventDeck = deck;
  },
  
  // Fase de Ação (Compra X cartas de Evento)
  drawEventCard() {
    if (this.isGameOver) return null;
    
    // Se o deck estiver vazio, recicla automaticamente o cemitério
    if (this.eventDeck.length === 0) {
      if (this.eventGraveyard.length > 0) {
        this.eventDeck = [...this.eventGraveyard];
        this.shuffleArray(this.eventDeck);
        this.eventGraveyard = [];
        this.logMessage("⚠️ O deck inimigo acabou! O cemitério foi reembaralhado automaticamente no Event Deck.", "⚠️ The enemy deck is empty! The graveyard was automatically reshuffled into the Event Deck.");
      } else {
        this.logMessage("🚨 Sem cartas no deck ou cemitério dos chefes!", "🚨 No cards left in the bosses' deck or graveyard!");
        return null;
      }
    }
    
    const card = this.eventDeck.pop();
    this.drawnCards.push(card);
    
    // Se for uma criatura inimiga, entra em campo (battlefield)
    const isMinion = CARD_DATABASE.minions.some(m => m.id === card.id);
    if (isMinion) {
      card.summoningSickness = true; // Aplica o enjoo de invocação (não pode atacar neste turno)
      this.battlefield.push(card);
      this.logMessage(`👾 Criatura Invocada: ${card.name} (${card.pt}) [Enjoo de Invocação]`, `👾 Creature Summoned: ${card.nameEn || card.name} (${card.pt}) [Summoning Sickness]`);
    } else {
      this.logMessage(`🔮 Tática Revelada: ${card.name}`, `🔮 Tactic Revealed: ${card.nameEn || card.name}`);
      
      // Tratamento especial da carta de Ressurgimento
      if (card.id === 'resurgence') {
        this.resolveResurgence();
      }
    }
    
    return card;
  },
  
  // Avançar Estágio de Chefes (Quando a vida dos chefes atinge 0)
  nextStage() {
    // Adiciona os chefes ativos anteriores ao histórico de derrotados
    this.defeatedBosses = [...this.defeatedBosses, ...this.activeBosses];
    this.activeBosses = [];

    this.activeStage++;
    
    if (this.activeStage > 3) {
      this.isGameOver = true;
      this.isVictory = true;
      this.logMessage("🏆 VITÓRIA SUPREMA DOS HERÓIS! Todos os chefes da Hydra foram derrotados!", "🏆 SUPREME HERO VICTORY! All Hydra bosses have been defeated!");
      return;
    }
    
    // Configurar Chefes e Vidas do Próximo Estágio puxando do topo do deck
    if (this.playerCount === 4) {
      this.bossesLife = 30;
      if (this.activeStage === 2) {
        // Stage 2: Revela os próximos 3 chefes do topo do deck
        this.activeBosses = this.bossDeck.splice(0, 3);
      } else if (this.activeStage === 3) {
        // Stage 3: Revela os próximos 5 chefes do topo do deck (os últimos)
        this.activeBosses = this.bossDeck.splice(0, 5);
      }
    } else {
      this.bossesLife = 20;
      if (this.activeStage === 2) {
        // Stage 2: Revela os próximos 2 chefes do topo do deck
        this.activeBosses = this.bossDeck.splice(0, 2);
      } else if (this.activeStage === 3) {
        // Stage 3: Revela os próximos 3 chefes do topo do deck
        this.activeBosses = this.bossDeck.splice(0, 3);
      }
    }
    
    const bossNames = this.activeBosses.map(b => (currentLang === 'en' && b.nameEn) ? b.nameEn : b.name).join(", ");
    this.logMessage(`🔥 Fase de Chefes Avançada! Estágio ${this.activeStage} iniciado. Novos Chefes Revelados: ${bossNames}!`, `🔥 Boss Phase Advanced! Stage ${this.activeStage} started. New Bosses Revealed: ${bossNames}!`);
  },
  
  // Avançar Turno do Jogo — descarta o turno anterior e auto-compra as cartas do novo turno
  nextTurn() {
    if (this.isGameOver) return;

    // A contagem de turno não aumenta no início, pois a Fase de Chefes faz parte do turno atual.

    
    // 1. Descarta automaticamente as TÁTICAS do turno anterior para o cemitério
    //    (Lacaios permanecem no campo de batalha — já estão em this.battlefield)
    const minionIds = CARD_DATABASE.minions.map(m => m.id);
    this.drawnCards.forEach(card => {
      if (!minionIds.includes(card.id) && card.id !== 'resurgence') {
        this.eventGraveyard.push(card);
      }
    });
    this.drawnCards = [];

    // Limpa o enjoo de invocação de todos os lacaios que já estavam no campo de batalha
    this.battlefield.forEach(minion => {
      minion.summoningSickness = false;
    });

    this.logMessage(`⌛ Turno ${this.turnCount} — Fase de Ação dos Chefes:`, `⌛ Turn ${this.turnCount} — Boss Action Phase:`);

    // Efeito passivo do M.O.D.O.K.:
    // - No início do turno dos chefes, eles perdem 2 de vida.
    // - Os chefes jogam 1 evento adicional por turno.
    const zhaoActive = Array.isArray(this.activeBosses) && this.activeBosses.some(b => b && b.id === 'zhao');
    if (zhaoActive) {
      this.bossesLife = Math.max(0, this.bossesLife - 2);
      this.logMessage("🩸 M.O.D.O.K. ativo: os chefes perdem 2 pontos de vida no início do turno.", "🩸 M.O.D.O.K. active: bosses lose 2 life points at the start of the turn.");
      if (this.bossesLife === 0) {
        this.nextStage();
        return;
      }
    }

    // 2. Determina quantas cartas comprar neste turno
    //    2 jogadores → 2 cartas | 3-4 jogadores → 3 cartas
    const baseCardsThisTurn = this.playerCount >= 3 ? 3 : 2;
    const cardsThisTurn = baseCardsThisTurn + (zhaoActive ? 1 : 0);

    // 3. Compra e resolve todas as cartas do turno de uma vez
    for (let i = 0; i < cardsThisTurn; i++) {
      const drawn = this.drawEventCard();
      if (!drawn) break; // Deck e cemitério vazios
    }

    // Efeito do Bullseye e da Elektra:
    // Dispara somente quando há ataque válido de lacaio.
    // Lacaios que entraram neste turno (revelados na Fase de Ação atual) não contam como atacantes.
    const activeBosses = Array.isArray(this.activeBosses) ? this.activeBosses : [];
    const soldierBuffTriggers = activeBosses.filter(b => b && (b.id === 'zuko' || b.id === 'mai')).length;
    const newlySummonedIds = new Set(
      (this.drawnCards || [])
        .filter(c => c && c.pt && c.instanceId)
        .map(c => c.instanceId)
    );
    const hasValidAttacker = (this.battlefield || []).some(minion => minion && !newlySummonedIds.has(minion.instanceId));
    if (soldierBuffTriggers > 0 && hasValidAttacker) {
      let buffed = 0;
      (this.battlefield || []).forEach(minion => {
        if (minion && minion.id === 'fire_soldier') {
          minion.markerPower = (minion.markerPower || 0) + soldierBuffTriggers;
          minion.markerToughness = (minion.markerToughness || 0) + soldierBuffTriggers;
          buffed++;
        }
      });
      if (buffed > 0) {
        const triggerText = soldierBuffTriggers === 1 ? "1 gatilho" : `${soldierBuffTriggers} gatilhos`;
        this.logMessage(`🔥 Bullseye/Elektra (${triggerText}): +${soldierBuffTriggers}/+${soldierBuffTriggers} aplicado em ${buffed} HYDRA Troopers.`, `🔥 Bullseye/Elektra (${triggerText}): +${soldierBuffTriggers}/+${soldierBuffTriggers} applied to ${buffed} HYDRA Troopers.`);
      } else {
        this.logMessage("🔥 Bullseye/Elektra: nenhum HYDRA Troopers em campo para receber +1/+1.", "🔥 Bullseye/Elektra: no HYDRA Troopers on the field to receive +1/+1.");
      }
    } else if (soldierBuffTriggers > 0 && !hasValidAttacker) {
      this.logMessage("🔥 Bullseye/Elektra: sem ataque válido de lacaio neste turno (recém-invocados não atacam).", "🔥 Bullseye/Elektra: no valid minion attacker this turn (newly summoned ones cannot attack).");
    }

    // Ao final da ação dos chefes, o turno deles acaba e a contagem avança para o PRÓXIMO turno dos jogadores.
    this.turnCount++;
  },
  
  // Modificar Vidas
  adjustLife(team, amount) {
    if (team === 'heroes') {
      this.heroesLife = Math.max(0, this.heroesLife + amount);
      if (this.heroesLife === 0) {
        this.isGameOver = true;
        this.isVictory = false;
        this.logMessage("💀 GAME OVER! Os heróis foram derrotados pela Hydra!", "💀 GAME OVER! The heroes were defeated by the Hydra!");
      }
    } else {
      this.bossesLife = Math.max(0, this.bossesLife + amount);
      if (this.bossesLife === 0) {
        this.nextStage();
      }
    }
  },
  
  // Defeat minion on battlefield
  defeatMinion(instanceId) {
    const index = this.battlefield.findIndex(m => m.instanceId === instanceId);
    if (index !== -1) {
      const minion = this.battlefield.splice(index, 1)[0];
      this.eventGraveyard.push(minion);
      this.logMessage(`💀 Lacaio Derrotado: ${minion.name} foi enviado para o Cemitério.`, `💀 Minion Defeated: ${minion.nameEn || minion.name} was sent to the Graveyard.`);
    }
  },

  bossDieResult: null,

  rollBossDie() {
    // Dado padrão do jogo é d6 (qualquer dado de 6 faces)
    const roll = Math.floor(Math.random() * 6) + 1;
    this.bossDieResult = roll;
    this.logMessage(`🎲 Rolagem de Dado: Resultado = ${roll}! (Use para determinar alvos de habilidades e ataques)`, `🎲 Die Roll: Result = ${roll}! (Use to determine ability targets and attacks)`);
    return roll;
  },
  
  // Tratamento da Tática de Ressurgimento Imperial
  resolveResurgence() {
    // Coleta TODAS as táticas que estão no cemitério (descartes anteriores)
    const cardsToReturn = [...this.eventGraveyard];
    
    // Também inclui as táticas já reveladas no turno atual (exceto lacaios que estão no battlefield)
    const minionIds = CARD_DATABASE.minions.map(m => m.id);
    this.drawnCards.forEach(card => {
      if (!minionIds.includes(card.id)) {
        // É uma tática — volta ao deck (incluindo a própria carta de Ressurgimento)
        cardsToReturn.push(card);
      }
    });
    
    // Mantém as cartas reveladas visíveis neste turno para melhor leitura na UI.
    // A limpeza acontece no início do próximo turno.
    
    // Adiciona todas ao deck e embaralha
    this.eventDeck = [...this.eventDeck, ...cardsToReturn];
    this.shuffleArray(this.eventDeck);
    
    // Limpa o cemitério
    this.eventGraveyard = [];
    
    const total = cardsToReturn.length;
    this.logMessage(`🔄 Ressurgimento Imperial! ${total} cartas do cemitério + descarte ativo foram reembaralhadas de volta no Event Deck! (Deck agora tem ${this.eventDeck.length} cartas)`, `🔄 Imperial Resurgence! ${total} cards from the graveyard + active discard were reshuffled into the Event Deck! (Deck now has ${this.eventDeck.length} cards)`);
    
    // Força atualização visual imediata dos contadores
    if (typeof updateUI === 'function') updateUI();
  },
  
  // Helpers Auxiliares
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  },
  
  logMessage(ptText, enText) {
    let msg = ptText;
    if (typeof currentLang !== 'undefined' && currentLang === 'en' && enText) {
      msg = enText;
    }
    if (!Array.isArray(this.logEntries)) this.logEntries = [];
    this.logEntries.push({
      turn: this.turnCount,
      text: msg,
      timestamp: Date.now()
    });
    if (this.logEntries.length > 80) {
      this.logEntries = this.logEntries.slice(-80);
    }
    const logEl = document.getElementById('game-console-log');
    if (logEl) {
      const p = document.createElement('p');
      p.style.marginBottom = '4px';
      p.style.fontSize = '0.85rem';
      p.style.borderLeft = '2px solid var(--fire-gold)';
      p.style.paddingLeft = '6px';
      p.innerHTML = `<strong>[T${this.turnCount}]</strong> ${msg}`;
      logEl.appendChild(p);
      logEl.scrollTop = logEl.scrollHeight;
    }
    console.log(msg);
  }
};

// ── CONTROLADOR DE INTERAÇÃO COM A MESA E GALERIA (3D Tilt & Modais) ──

// Inicia escutas para efeitos visuais 3D
function initCard3DTilt(wrapper) {
  if (!wrapper) return;
  
  wrapper.addEventListener('mousemove', (e) => {
    const card = wrapper.querySelector('.mtg-card');
    if (!card) return;
    
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calcula inclinações baseadas na posição do mouse
    const rotateY = ((x / rect.width) - 0.5) * 30; // Max 15 graus de inclinação
    const rotateX = (0.5 - (y / rect.height)) * 30;
    
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Atualiza overlay de luz/sheen
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;
    card.style.setProperty('--x', `${percentX}%`);
    card.style.setProperty('--y', `${percentY}%`);
  });
  
  wrapper.addEventListener('mouseleave', () => {
    const card = wrapper.querySelector('.mtg-card');
    if (!card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}

// Retorna HTML da Carta Virtual
function renderVirtualCard(card, isOnBattlefield = false, allowEditFromModal = false) {
  const custom = CustomizationStore.get(card.id) || {};
  const artUrl = convertToScryfallArtCrop(custom.artUrl || '');
  const isEn = (typeof currentLang !== 'undefined' && currentLang === 'en');
  const baseName = isEn && card.nameEn ? card.nameEn : card.name;
  const baseRules = isEn && card.rulesEn ? card.rulesEn : card.rules;
  const baseType = isEn && card.typeEn ? card.typeEn : card.type;
  const baseFlavor = isEn && card.flavorEn ? card.flavorEn : card.flavor;
  const cardName = custom.customName || baseName;
  let cardText = custom.customText || baseRules;
  const cardPT = custom.customPT || card.pt || '';
  const cardType = baseType;
  const cardFlavor = baseFlavor;

  // Efeitos temporários vindos de chefes ativos (somente render em campo).
  if (card.grantedFlying) {
    cardText = (isEn ? 'Flying.\n' : 'Voar.\n') + cardText;
  }
  if (card.grantedDeathtouch) {
    cardText = (isEn ? 'Deathtouch.\n' : 'Toque mortífero.\n') + cardText;
  }
  if (card.grantedFirstStrike) {
    cardText = (isEn ? 'First strike.\n' : 'Iniciativa.\n') + cardText;
  }
  
  // Bosses oficiais não exibem ataque/vida (PT).
  const isBoss = (card.type || '').toLowerCase().includes('chefe') || (card.type || '').toLowerCase().includes('boss');
  const isCreature = !isBoss && cardPT !== '';
  
  // Decide se usa artDefault como emoji ou imagem customizada
  let artStyleHTML = '';
  if (artUrl) {
    artStyleHTML = `style="background-image: url('${artUrl}'); background-size: cover; background-position: center; background-repeat: no-repeat;"`;
  }
  
  // Gera circulos de mana para chefes fictícios baseados em elemento
  let manaCostHTML = '';
  if (card.element === 'fire') {
    manaCostHTML = `<div class="mana-circle red">F</div>`;
  } else if (card.element === 'water') {
    manaCostHTML = `<div class="mana-circle blue">W</div>`;
  } else if (card.element === 'earth') {
    manaCostHTML = `<div class="mana-circle">E</div>`;
  } else {
    manaCostHTML = `<div class="mana-circle spirit">S</div>`;
  }
  
  // Emojis grandes se for fallback default
  const fallbackArtEmoji = artUrl ? '' : `<div style="font-size: 4.5rem; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">${card.artDefault || '🔮'}</div>`;
  
  // Se for lacaio no campo de batalha, adiciona botão de Derrotar
  let defeatButtonHTML = '';
  if (isOnBattlefield && isCreature) {
    defeatButtonHTML = `<button class="minion-defeat-btn" onclick="event.stopPropagation(); handleDefeatMinion('${card.instanceId}')">${isEn ? '☠️ Defeat Minion' : '💀 Derrotar Lacaio'}</button>`;
  }

  // Marcadores de lacaio em campo (+1/+0 e +1/+1)
  let counterButtonsHTML = '';
  if (isOnBattlefield && isCreature && card.instanceId) {
    counterButtonsHTML = `
      <div style="display:flex; flex-direction:column; gap:6px; margin-top:4px;">
        <div style="display:flex; gap:6px;">
          <button class="minion-defeat-btn" style="background:rgba(127,29,29,0.9); border-color:#b91c1c; font-size:.62rem; padding:3px 6px; width:34px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', -1, 0)">-</button>
          <button class="minion-defeat-btn" style="background:rgba(234,179,8,0.9); border-color:#eab308; font-size:.62rem; padding:3px 6px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', 1, 0)">+1/+0</button>
          <button class="minion-defeat-btn" style="background:rgba(5,150,105,0.9); border-color:#10b981; font-size:.62rem; padding:3px 6px; width:34px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', 1, 0)">+</button>
        </div>
        <div style="display:flex; gap:6px;">
          <button class="minion-defeat-btn" style="background:rgba(127,29,29,0.9); border-color:#b91c1c; font-size:.62rem; padding:3px 6px; width:34px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', -1, -1)">-</button>
          <button class="minion-defeat-btn" style="background:rgba(16,185,129,0.9); border-color:#10b981; font-size:.62rem; padding:3px 6px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', 1, 1)">+1/+1</button>
          <button class="minion-defeat-btn" style="background:rgba(5,150,105,0.9); border-color:#10b981; font-size:.62rem; padding:3px 6px; width:34px;" onclick="event.stopPropagation(); handleAddMinionCounter('${card.instanceId}', 1, 1)">+</button>
        </div>
      </div>
    `;
  }

  // P/T final (base + marcadores) para lacaios em campo
  let finalPT = cardPT;
  const bossBonusPower = card.bossBonusPower || 0;
  const bossBonusToughness = card.bossBonusToughness || 0;
  if (isOnBattlefield && isCreature && cardPT.includes('/')) {
    const [baseP, baseT] = cardPT.split('/').map(n => parseInt(n, 10));
    if (!Number.isNaN(baseP) && !Number.isNaN(baseT)) {
      const bonusP = card.markerPower || 0;
      const bonusT = card.markerToughness || 0;
      finalPT = `${baseP + bonusP + bossBonusPower}/${baseT + bonusT + bossBonusToughness}`;
    }
  }

  let bossEffectBadgeHTML = '';
  if (isOnBattlefield && (bossBonusPower !== 0 || bossBonusToughness !== 0)) {
    const fmt = (n) => (n >= 0 ? `+${n}` : `${n}`);
    bossEffectBadgeHTML = `
      <div style="margin: 4px 0 0; padding: 3px 6px; border-radius: 6px; border: 1px solid rgba(56,189,248,.55); background: rgba(14,116,144,.25); color: #7dd3fc; font-size: .63rem; font-weight: 700; text-transform: uppercase; letter-spacing: .3px;">
        ✦ ${isEn ? 'Boss Bonus' : 'Bônus de Boss'}: ${fmt(bossBonusPower)}/${fmt(bossBonusToughness)}
      </div>
    `;
  }
  
  let sicknessBadgeHTML = '';
  if (isOnBattlefield && isCreature && card.summoningSickness) {
    sicknessBadgeHTML = `
      <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 10;">
        <span style="font-size: 2rem;">💤</span>
        <span style="background: rgba(0,0,0,0.8); color: #ccc; font-size: 0.65rem; font-weight: bold; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; margin-top: 4px; border: 1px solid #555;">${isEn ? 'Summoning Sickness' : 'Enjoo de Invocação'}</span>
      </div>
    `;
  }

  const wrapperStyle = isOnBattlefield
    ? 'style="height:auto; display:flex; flex-direction:column; align-items:stretch;"'
    : '';

  return `
    <div class="mtg-card-wrapper" ${wrapperStyle} data-card-id="${card.id}" onclick="openCardArtModal('${card.id}', ${allowEditFromModal ? 'true' : 'false'})">
      <div class="mtg-card element-${card.element}">
        <div class="mtg-card-header">
          <span class="mtg-card-name">${cardName}</span>
          <div class="mtg-card-mana">${manaCostHTML}</div>
        </div>
        <div class="mtg-card-art art-${card.element}" ${artStyleHTML}>
          ${fallbackArtEmoji}
          ${sicknessBadgeHTML}
        </div>
        <div class="mtg-card-type-line">
          <span>${cardType}</span>
          <span class="mtg-card-symbol">${card.grantedFirstStrike ? '⚡' : (card.grantedDeathtouch ? '☠️' : (card.grantedFlying ? '🪽' : '👹'))}</span>
        </div>
        <div class="mtg-card-text-box">
          <p>${cardText.replace(/\n/g, '<br>')}</p>
          ${bossEffectBadgeHTML}
          ${cardFlavor ? `<p class="mtg-card-flavor">${cardFlavor}</p>` : ''}
        </div>
        ${isCreature ? `<div class="mtg-card-pt">${finalPT}</div>` : ''}
      </div>
      ${defeatButtonHTML}
      ${counterButtonsHTML}
    </div>
  `;
}

function findCardById(cardId) {
  let card = CARD_DATABASE.bosses.find(b => b.id === cardId);
  if (!card) card = CARD_DATABASE.minions.find(m => m.id === cardId);
  if (!card) card = CARD_DATABASE.events.find(e => e.id === cardId);
  return card || null;
}

function ensureArtModal() {
  let modal = document.getElementById('card-art-modal');
  if (modal) return modal;

  const style = document.createElement('style');
  style.textContent = `
    #card-art-modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.88);
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 16px;
    }
    #card-art-modal .art-modal-content {
      width: auto;
      max-height: 95vh;
      background: transparent;
      border: 0;
      border-radius: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #card-art-modal .art-modal-header {
      display: none;
      justify-content: space-between;
      align-items: center;
      padding: 10px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
      color: #fff;
      font-weight: 700;
      font-size: 0.92rem;
    }
    #card-art-modal .art-modal-close {
      background: transparent;
      border: 0;
      color: #ddd;
      font-size: 1.3rem;
      cursor: pointer;
      line-height: 1;
    }
    #card-art-modal .art-modal-image-wrap {
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      min-height: 0;
    }
    #card-art-modal .art-modal-card-wrap {
      width: min(92vw, 420px);
      aspect-ratio: 5 / 7;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-wrapper {
      width: 100%;
      height: 100%;
      max-width: none;
      transform: none;
      margin: 0;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card {
      transform: none !important;
    }
    /* Ajustes de proporção no modal para parecer mais com carta real */
    #card-art-modal .art-modal-card-wrap .mtg-card {
      border-width: 8px;
      padding: 6px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-header {
      padding: 5px 9px;
      margin-bottom: 6px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-art {
      height: 46%;
      min-height: 160px;
      margin-bottom: 6px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-type-line {
      margin-bottom: 6px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-text-box {
      font-size: 0.78rem;
      line-height: 1.35;
      padding: 8px 9px;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-flavor {
      font-size: 0.74rem;
    }
    #card-art-modal .art-modal-card-wrap .mtg-card-wrapper:hover {
      transform: none;
    }
    @media (max-width: 600px) {
      #card-art-modal .art-modal-card-wrap {
        width: min(94vw, 360px);
      }
      #card-art-modal .art-modal-card-wrap .mtg-card-art {
        min-height: 148px;
      }
      #card-art-modal .art-modal-card-wrap .mtg-card-text-box {
        font-size: 0.76rem;
      }
      #card-art-modal .art-modal-card-wrap .mtg-card-wrapper {
        transform: none;
        margin: 0;
      }
      #card-art-modal .art-modal-card-wrap .mtg-card-wrapper:hover {
        transform: none;
      }
    }
  `;
  document.head.appendChild(style);

  modal = document.createElement('div');
  modal.id = 'card-art-modal';
  modal.innerHTML = `
    <div class="art-modal-content" onclick="event.stopPropagation()">
      <div class="art-modal-image-wrap">
        <div id="card-art-modal-card" class="art-modal-card-wrap"></div>
      </div>
    </div>
  `;

  modal.addEventListener('click', closeCardArtModal);
  document.body.appendChild(modal);
  return modal;
}

let currentArtModalCardId = null;
function openCardArtModal(cardId, allowEdit = false) {
  const card = findCardById(cardId);
  if (!card) return;

  const custom = CustomizationStore.get(card.id) || {};

  currentArtModalCardId = cardId;
  const modal = ensureArtModal();
  const cardWrapEl = document.getElementById('card-art-modal-card');
  if (cardWrapEl) {
    cardWrapEl.innerHTML = renderVirtualCard(card, false, false);
    const wrapper = cardWrapEl.querySelector('.mtg-card-wrapper');
    if (wrapper) {
      wrapper.removeAttribute('onclick');
      wrapper.style.cursor = 'default';
    }
  }
  modal.style.display = 'flex';
}

function closeCardArtModal() {
  const modal = document.getElementById('card-art-modal');
  if (modal) modal.style.display = 'none';
}

// ── UI CONTROLLER & VIEW BINDINGS ──

function updateUI() {
  // Update numbers
  document.getElementById('heroes-life-val').textContent = GameEngine.heroesLife;
  document.getElementById('bosses-life-val').textContent = GameEngine.bossesLife;
  document.getElementById('current-stage-val').textContent = GameEngine.activeStage;
  document.getElementById('turn-count-val').textContent = GameEngine.turnCount;
  
  // Fix: Update BOTH deck count counters
  document.getElementById('deck-count-val').textContent = GameEngine.eventDeck.length;
  const deckCountMini = document.getElementById('deck-count-val-mini');
  if (deckCountMini) deckCountMini.textContent = GameEngine.eventDeck.length;
  
  // Fix: Update BOTH graveyard count counters
  document.getElementById('graveyard-count-val').textContent = GameEngine.eventGraveyard.length;
  const graveyardCountMini = document.getElementById('graveyard-count-val-mini');
  if (graveyardCountMini) graveyardCountMini.textContent = GameEngine.eventGraveyard.length;

  // Active bosses
  const bossesContainer = document.getElementById('active-bosses-container');
  if (bossesContainer) {
    if (GameEngine.activeBosses.length === 0) {
      bossesContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.9rem; padding: var(--space-sm) 0;">${currentLang === 'en' ? 'No active bosses.' : 'Nenhum chefe ativo.'}</div>`;
    } else {
      bossesContainer.innerHTML = GameEngine.activeBosses.map(b => renderVirtualCard(b, false, false)).join('');
    }
  }

  // Battlefield (Lacaios com botão Derrotar ativo!)
  const battlefieldContainer = document.getElementById('battlefield-container');
  if (battlefieldContainer) {
    if (GameEngine.battlefield.length === 0) {
      battlefieldContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.9rem; padding: var(--space-sm) 0;">${currentLang === 'en' ? 'No enemy minions on the battlefield.' : 'Nenhum lacaio inimigo em campo.'}</div>`;
    } else {
      const battlefieldView = GameEngine.battlefield.map(m => getBattlefieldCardView(m));
      battlefieldContainer.innerHTML = battlefieldView.map(m => renderVirtualCard(m, true, false)).join('');
    }
  }

  // Drawn cards this turn
  const drawnContainer = document.getElementById('drawn-cards-container');
  const drawnTitle = document.getElementById('drawn-cards-title');
  if (drawnContainer) {
    if (GameEngine.drawnCards.length === 0) {
      if (drawnTitle) {
        drawnTitle.innerHTML = currentLang === 'en' 
          ? '<span data-i18n="actions_revealed_turn">ACTIONS REVEALED THIS TURN:</span>' 
          : '<span data-i18n="actions_revealed_turn">AÇÕES REVELADAS NESTE TURNO:</span>';
      }
      drawnContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.9rem; padding: 20px 0;">${currentLang === 'en' ? "No cards revealed during this turn's Action." : "Nenhuma carta revelada na Ação deste turno."}</div>`;
    } else {
      if (drawnTitle) {
        drawnTitle.innerHTML = currentLang === 'en' 
          ? `<span>ACTIONS REVEALED ON TURN ${GameEngine.turnCount - 1}:</span>` 
          : `<span>AÇÕES REVELADAS NO TURNO ${GameEngine.turnCount - 1}:</span>`;
      }
      drawnContainer.innerHTML = GameEngine.drawnCards.map(c => renderVirtualCard(getBattlefieldCardView(c), false, false)).join('');
    }
  }

  // Visual Graveyard Rendering
  const graveyardContainer = document.getElementById('graveyard-container');
  if (graveyardContainer) {
    if (GameEngine.eventGraveyard.length === 0) {
      graveyardContainer.innerHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.85rem; padding: var(--space-sm) 0; grid-column: 1 / -1;">${currentLang === 'en' ? 'No cards discarded in the graveyard.' : 'Nenhuma carta descartada no cemitério.'}</div>`;
    } else {
      graveyardContainer.innerHTML = GameEngine.eventGraveyard.map(c => renderVirtualCard(c, false, false)).join('');
    }
  }

  // Atualiza contadores automáticos do baralho de chefes fechado
  const bossDeckCount = document.getElementById('boss-deck-count-val');
  if (bossDeckCount) bossDeckCount.textContent = GameEngine.bossDeck.length;
  
  const bossDeckCountMini = document.getElementById('boss-deck-count-val-mini');
  if (bossDeckCountMini) bossDeckCountMini.textContent = GameEngine.bossDeck.length;

  // Atualiza histórico de chefes derrotados
  const bossesDefeatedList = document.getElementById('bosses-defeated-list');
  if (bossesDefeatedList) {
    if (GameEngine.defeatedBosses.length === 0) {
      bossesDefeatedList.innerHTML = `<span style="color: var(--text-muted); font-style: italic;">${currentLang === 'en' ? 'No boss defeated yet.' : 'Nenhum chefe derrotado ainda.'}</span>`;
    } else {
      bossesDefeatedList.innerHTML = GameEngine.defeatedBosses.map((boss, idx) => {
        return `<div style="padding: 2px 0; border-bottom: 1px solid rgba(255,255,255,0.03); color: var(--text-secondary);">☠️ ${idx + 1}. ${(currentLang === 'en' && boss.nameEn) ? boss.nameEn : boss.name}</div>`;
      }).join('');
    }
  }

  // Atualiza label de cartas por turno na interface
  const cardsPerTurnLabel = document.getElementById('cards-per-turn-label');
  if (cardsPerTurnLabel) {
    cardsPerTurnLabel.textContent = GameEngine.playerCount >= 3 ? '3' : '2';
  }

  // Re-init 3D tilt behaviors
  document.querySelectorAll('.mtg-card-wrapper').forEach(wrapper => {
    initCard3DTilt(wrapper);
  });

  // Game over state checks
  const turnBtn = document.getElementById('btn-next-turn');
  if (GameEngine.isGameOver) {
    if (turnBtn) turnBtn.disabled = true;
    
    // Append a notice to the log console (only once)
    const logEl = document.getElementById('game-console-log');
    if (logEl && !logEl.querySelector('.game-over-notice')) {
      const div = document.createElement('div');
      div.className = 'game-over-notice';
      div.style.marginTop = '12px';
      div.style.padding = '10px';
      div.style.borderRadius = '6px';
      div.style.fontWeight = 'bold';
      div.style.textAlign = 'center';
      if (GameEngine.isVictory) {
        div.style.background = 'rgba(16, 185, 129, 0.15)';
        div.style.border = '1px solid #10b981';
        div.style.color = '#10b981';
        div.innerHTML = currentLang === 'en' ? '🏆 SUPREME HERO VICTORY! The invasion has been totally repelled!' : '🏆 VITÓRIA SUPREMA DOS HERÓIS! A invasão foi totalmente repelida!';
      } else {
        div.style.background = 'rgba(225, 29, 72, 0.15)';
        div.style.border = '1px solid var(--fire-primary)';
        div.style.color = 'var(--fire-primary)';
        div.innerHTML = currentLang === 'en' ? '💀 HERO DEFEAT! The world will fall to the Hydra.' : '💀 DERROTA DOS HERÓIS! O mundo sucumbirá à Hydra.';
      }
      logEl.appendChild(div);
      logEl.scrollTop = logEl.scrollHeight;
    }
  } else {
    if (turnBtn) turnBtn.disabled = false;
  }

  if (typeof renderMobileApp === 'function') {
    renderMobileApp();
  }
}

// Draw event handler (reveals card and updates UI)
function handleActionDraw() {
  if (GameEngine.isGameOver) return;
  GameEngine.drawEventCard();
  updateUI();
}

// Defeat minion event handler
function handleDefeatMinion(instanceId) {
  GameEngine.defeatMinion(instanceId);
  updateUI();
}

function handleAddMinionCounter(instanceId, powerDelta, toughnessDelta) {
  if (!instanceId) return;
  const minion = GameEngine.battlefield.find(m => m.instanceId === instanceId);
  if (!minion) return;

  minion.markerPower = (minion.markerPower || 0) + (powerDelta || 0);
  minion.markerToughness = (minion.markerToughness || 0) + (toughnessDelta || 0);

  const p = powerDelta || 0;
  const t = toughnessDelta || 0;
  const fmt = (n) => (n >= 0 ? `+${n}` : `${n}`);
  const markerText = `${fmt(p)}/${fmt(t)}`;
  if (typeof GameEngine.logMessage === 'function') {
    GameEngine.logMessage(`🧩 Marcador ${markerText} aplicado em ${minion.name}.`, `🧩 Marker ${markerText} applied to ${minion.nameEn || minion.name}.`);
  }
  updateUI();
}

// Roll d6 Dice event handler
function handleRollDie() {
  const dieEl = document.getElementById('dice-d10');
  if (!dieEl) return;
  
  // Spin the die
  dieEl.classList.remove('rolling');
  void dieEl.offsetWidth; // Trigger reflow to restart animation
  dieEl.classList.add('rolling');
  
  const result = GameEngine.rollBossDie();
  
  setTimeout(() => {
    dieEl.textContent = result;
    const msgEl = document.getElementById('dice-result-msg');
    if (msgEl) {
      msgEl.innerHTML = currentLang === 'en' ? `Result: <strong>${result}</strong> — use to resolve abilities or pick targets!` : `Resultado: <strong>${result}</strong> — use para resolver habilidades ou sortear alvos!`;
    }
    updateUI();
  }, 600);
}

// Next turn handler
function handleNextTurn() {
  if (GameEngine.isGameOver) return;
  GameEngine.nextTurn();
  updateUI();
}

// Life adjusters
function adjustHeroesLife(amount) {
  GameEngine.adjustLife('heroes', amount);
  updateUI();
}

// Custom manual life adjusters for bosses
function adjustBossesLife(amount) {
  GameEngine.adjustLife('bosses', amount);
  updateUI();
}

// Reset entire game
function handleResetGame() {
  GameEngine.setupGame(GameEngine.playerCount);
  const consoleLog = document.getElementById('game-console-log');
  if (consoleLog) consoleLog.innerHTML = '';
  GameEngine.logMessage(`🎮 Partida reiniciada para ${GameEngine.playerCount} jogadores.`, `🎮 Match restarted for ${GameEngine.playerCount} players.`);
  updateUI();
}

// Change player count and restart
function handlePlayerChange(players) {
  // Update active states on player count buttons
  document.querySelectorAll('.btn-player-select button').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`player-${players}`);
  if (activeBtn) activeBtn.classList.add('active');
  
  GameEngine.playerCount = players;
  handleResetGame();
}

// ── CUSTOMIZAÇÃO DE CARD ART ──

function openCardCustomizer(cardId) {
  // Find card info from database
  let card = findCardById(cardId);
  if (!card) return;

  // Set card preview in modal
  const previewContainer = document.getElementById('modal-card-preview');
  if (previewContainer) {
    previewContainer.innerHTML = renderVirtualCard(card);
    const wrapper = previewContainer.querySelector('.mtg-card-wrapper');
    if (wrapper) {
      // Remove onclick so it doesn't trigger openCardCustomizer recursively
      wrapper.removeAttribute('onclick');
      initCard3DTilt(wrapper);
    }
  }

  // Pre-fill form fields
  document.getElementById('modal-card-id').value = cardId;
  const custom = CustomizationStore.get(cardId) || {};
  
  document.getElementById('customizer-image-url').value = convertToScryfallArtCrop(custom.artUrl || '');
  document.getElementById('customizer-name').value = custom.customName || (currentLang === 'en' && card.nameEn ? card.nameEn : card.name);
  document.getElementById('customizer-text').value = custom.customText || card.rules;
  
  const ptGroup = document.getElementById('customizer-pt-group');
  const ptInput = document.getElementById('customizer-pt');
  const isBoss = (card.type || '').toLowerCase().includes('chefe') || (card.type || '').toLowerCase().includes('boss');
  if (!isBoss && (card.pt || custom.customPT)) {
    ptGroup.style.display = 'flex';
    ptInput.value = custom.customPT || card.pt || '';
  } else {
    ptGroup.style.display = 'none';
    ptInput.value = '';
  }

  // Open modal
  const modal = document.getElementById('customizer-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeCardCustomizer() {
  const modal = document.getElementById('customizer-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// Convert uploaded file to base64 and set URL field
function handleImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    document.getElementById('customizer-image-url').value = event.target.result;
    // Live update preview
    updateModalPreview();
  };
  reader.readAsDataURL(file);
}

// Live update card preview inside modal
function updateModalPreview() {
  const cardId = document.getElementById('modal-card-id').value;
  let card = findCardById(cardId);
  if (!card) return;

  // Temporary mock data from form values
  const rawPreviewUrl = document.getElementById('customizer-image-url').value;
  const mockCustom = {
    artUrl: convertToScryfallArtCrop(rawPreviewUrl),
    customName: document.getElementById('customizer-name').value,
    customText: document.getElementById('customizer-text').value,
    customPT: document.getElementById('customizer-pt').value
  };

  // Temporarily store in customization memory or render directly
  const previewContainer = document.getElementById('modal-card-preview');
  if (previewContainer) {
    // Generate card with temporary form custom parameters
    const tempCard = { ...card };
    // We override renderVirtualCard behavior for preview
    const isBoss = (tempCard.type || '').toLowerCase().includes('chefe') || (tempCard.type || '').toLowerCase().includes('boss');
    const previewPT = mockCustom.customPT || tempCard.pt || '';
    const isCreature = !isBoss && previewPT !== '';
    let artStyleHTML = '';
    if (mockCustom.artUrl) {
      artStyleHTML = `style="background-image: url('${mockCustom.artUrl}'); background-size: cover; background-position: center; background-repeat: no-repeat;"`;
    }
    
    let manaCostHTML = '';
    if (tempCard.element === 'fire') {
      manaCostHTML = `<div class="mana-circle red">F</div>`;
    } else if (tempCard.element === 'water') {
      manaCostHTML = `<div class="mana-circle blue">W</div>`;
    } else if (tempCard.element === 'earth') {
      manaCostHTML = `<div class="mana-circle">E</div>`;
    } else {
      manaCostHTML = `<div class="mana-circle spirit">S</div>`;
    }
    
    const fallbackArtEmoji = mockCustom.artUrl ? '' : `<div style="font-size: 4.5rem; width:100%; height:100%; display:flex; align-items:center; justify-content:center;">${tempCard.artDefault || '🔮'}</div>`;
    
    previewContainer.innerHTML = `
      <div class="mtg-card-wrapper" data-card-id="${tempCard.id}">
        <div class="mtg-card element-${tempCard.element}">
          <div class="mtg-card-header">
            <span class="mtg-card-name">${mockCustom.customName}</span>
            <div class="mtg-card-mana">${manaCostHTML}</div>
          </div>
          <div class="mtg-card-art art-${tempCard.element}" ${artStyleHTML}>
            ${fallbackArtEmoji}
          </div>
          <div class="mtg-card-type-line">
            <span>${tempCard.type}</span>
            <span class="mtg-card-symbol">👹</span>
          </div>
          <div class="mtg-card-text-box">
            <p>${mockCustom.customText.replace(/\n/g, '<br>')}</p>
            ${tempCard.flavor ? `<p class="mtg-card-flavor">${tempCard.flavor}</p>` : ''}
          </div>
          ${isCreature ? `<div class="mtg-card-pt">${previewPT}</div>` : ''}
        </div>
      </div>
    `;
    const wrapper = previewContainer.querySelector('.mtg-card-wrapper');
    if (wrapper) initCard3DTilt(wrapper);
  }
}

// Converte automaticamente URLs do Scryfall para o formato art_crop (só a ilustração)
function convertToScryfallArtCrop(url) {
  if (!url) return url;
  const trimmedUrl = url.trim();
  
  // Detecta se é uma URL do Scryfall
  if (trimmedUrl.includes('cards.scryfall.io') || trimmedUrl.includes('api.scryfall.com/cards')) {
    // Substitui qualquer versão de imagem por art_crop
    return trimmedUrl
      .replace('/large/', '/art_crop/')
      .replace('/normal/', '/art_crop/')
      .replace('/small/', '/art_crop/')
      .replace('/png/', '/art_crop/')
      .replace('/border_crop/', '/art_crop/')
      // Troca extensão .png por .jpg se necessário (art_crop é sempre .jpg)
      .replace(/art_crop(.*?)\.png$/, 'art_crop$1.jpg');
  }
  
  return trimmedUrl;
}

// Converte URL do Scryfall para a carta completa (frame inteiro) no tamanho large.
function convertToScryfallLarge(url) {
  if (!url) return url;
  const trimmedUrl = url.trim();

  if (trimmedUrl.includes('cards.scryfall.io') || trimmedUrl.includes('api.scryfall.com/cards')) {
    return trimmedUrl
      .replace('/art_crop/', '/large/')
      .replace('/normal/', '/large/')
      .replace('/small/', '/large/')
      .replace('/png/', '/large/')
      .replace('/border_crop/', '/large/')
      .replace(/large(.*?)\.png$/, 'large$1.jpg');
  }

  return trimmedUrl;
}

// Save customization and refresh
function saveCardCustomization(e) {
  if (e) e.preventDefault();

  const cardId = document.getElementById('modal-card-id').value;
  const rawUrl = document.getElementById('customizer-image-url').value;
  
  // Auto-convert Scryfall URLs to art_crop
  const artUrl = convertToScryfallArtCrop(rawUrl);
  
  // Update the input field to reflect the converted URL
  if (artUrl !== rawUrl) {
    document.getElementById('customizer-image-url').value = artUrl;
    showToast(currentLang === "en" ? "Scryfall URL auto-converted to pure illustration! 🎨" : "URL do Scryfall convertida automaticamente para ilustração pura! 🎨");
  }
  
  let baseCard = findCardById(cardId);
  const isBoss = baseCard && ((baseCard.type || '').toLowerCase().includes('chefe') || (baseCard.type || '').toLowerCase().includes('boss'));

  const data = {
    artUrl: artUrl,
    customName: document.getElementById('customizer-name').value,
    customText: document.getElementById('customizer-text').value,
    customPT: isBoss ? '' : document.getElementById('customizer-pt').value
  };

  CustomizationStore.save(cardId, data);
  closeCardCustomizer();
  
  // Show toast notice
  if (artUrl === rawUrl) showToast(currentLang === "en" ? "Card customized successfully!" : "Carta personalizada com sucesso!");

  // Refresh battlefield, drawn cards, active bosses, and gallery
  updateUI();
  renderCardGallery(currentFilter);
}

// Reset customization to original
function resetCardCustomization() {
  const cardId = document.getElementById('modal-card-id').value;
  CustomizationStore.reset(cardId);
  closeCardCustomizer();
  showToast(currentLang === "en" ? "Card restored to default." : "Carta restaurada para o padrão.");
  updateUI();
  renderCardGallery(currentFilter);
}

// Show floating notification toast
function showToast(msg) {
  const toast = document.createElement('div');
  toast.className = 'toast-notice';
  toast.innerHTML = `<span>✨</span> ${msg}`;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s ease';
    setTimeout(() => toast.remove(), 500);
  }, 3000);
}

async function exportCustomizations() {
  const data = CustomizationStore.getAll();
  const payload = {
    exportedAt: new Date().toISOString(),
    version: 1,
    key: CustomizationStore.key,
    customizations: data
  };
  const jsonText = JSON.stringify(payload, null, 2);
  const date = new Date().toISOString().slice(0, 10);
  const fileName = `marvel-teamup-customizations-${date}.json`;

  // Caminho principal: seletor nativo de arquivo (mais confiável no Chrome/Edge).
  if (window.showSaveFilePicker) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: fileName,
        types: [
          {
            description: 'JSON',
            accept: { 'application/json': ['.json'] }
          }
        ]
      });
      const writable = await handle.createWritable();
      await writable.write(jsonText);
      await writable.close();
      showToast('Backup exportado com sucesso.');
      return;
    } catch (err) {
      // Usuário cancelou ou navegador bloqueou: cai para fallback abaixo.
      if (err && err.name === 'AbortError') return;
      console.warn('showSaveFilePicker falhou, usando fallback de download.', err);
    }
  }

  // Fallback: download via Blob URL.
  const blob = new Blob([jsonText], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('Backup exportado. Verifique a pasta Downloads.');
}

function triggerImportCustomizations() {
  const fileInput = document.getElementById('customization-import-file');
  if (fileInput) fileInput.click();
}

function importCustomizations(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(loadEvent) {
    try {
      const parsed = JSON.parse(loadEvent.target.result);
      const incoming = parsed.customizations && typeof parsed.customizations === 'object'
        ? parsed.customizations
        : (typeof parsed === 'object' ? parsed : null);

      if (!incoming) throw new Error('JSON inválido');

      localStorage.setItem(CustomizationStore.key, JSON.stringify(incoming));
      updateUI();
      renderCardGallery(currentFilter);
      showToast('Backup importado com sucesso.');
    } catch (err) {
      console.error(err);
      showToast('Falha ao importar JSON. Verifique o arquivo.');
    } finally {
      event.target.value = '';
    }
  };
  reader.readAsText(file);
}

// ── GALERIA DE CARTAS RENDERING ──

let currentFilter = 'all';

function getCardsForGalleryFilter(filter = 'all') {
  let cards = [];
  if (filter === 'all' || filter === 'bosses') {
    cards = cards.concat(CARD_DATABASE.bosses);
  }
  if (filter === 'all' || filter === 'minions') {
    cards = cards.concat(CARD_DATABASE.minions);
  }
  if (filter === 'all' || filter === 'tactics') {
    cards = cards.concat(CARD_DATABASE.events);
  }
  return cards;
}

const MobileApp = {
  view: 'home',
  gameTab: 'battlefield',
  galleryFilter: 'all',
  gallerySearch: '',
  expandedCardId: null
};

function escapeHTML(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getCardName(card) {
  const custom = card ? CustomizationStore.get(card.id) || {} : {};
  if (custom.customName) return custom.customName;
  return currentLang === 'en' && card && card.nameEn ? card.nameEn : card.name;
}

function getCardType(card) {
  return currentLang === 'en' && card && card.typeEn ? card.typeEn : card.type;
}

function getCardRules(card) {
  const custom = card ? CustomizationStore.get(card.id) || {} : {};
  if (custom.customText) return custom.customText;
  return currentLang === 'en' && card && card.rulesEn ? card.rulesEn : card.rules;
}

function isBossCard(card) {
  const type = `${card && card.type ? card.type : ''} ${card && card.typeEn ? card.typeEn : ''}`.toLowerCase();
  return type.includes('chefe') || type.includes('boss');
}

function getCardArtStyle(card) {
  const custom = card ? CustomizationStore.get(card.id) || {} : {};
  const artUrl = convertToScryfallArtCrop(custom.artUrl || '');
  return artUrl ? `style="background-image:url('${escapeHTML(artUrl)}')"` : '';
}

function getBattlefieldCardView(card) {
  if (!card) return card;

  const activeBosses = Array.isArray(GameEngine.activeBosses) ? GameEngine.activeBosses : [];
  const hasBoss = (bossId) => activeBosses.some(boss => boss && boss.id === bossId);
  const viewCard = { ...card };

  if (hasBoss('combustion_man') && card.id === 'fire_soldier') {
    viewCard.grantedFlying = true;
  }
  if (hasBoss('long_feng')) {
    viewCard.grantedDeathtouch = true;
  }
  if (hasBoss('jet_brainwashed')) {
    viewCard.grantedFirstStrike = true;
  }
  if (hasBoss('ty_lee')) {
    viewCard.bossBonusPower = activeBosses.length;
    viewCard.bossBonusToughness = 0;
  }

  return viewCard;
}

function getFinalPT(card, isBattlefield = false) {
  if (!card || !card.pt || isBossCard(card)) return '';

  if (!isBattlefield || !String(card.pt).includes('/')) {
    return card.pt;
  }

  const [baseP, baseT] = String(card.pt).split('/').map(n => parseInt(n, 10));
  if (Number.isNaN(baseP) || Number.isNaN(baseT)) return card.pt;

  const markerPower = card.markerPower || 0;
  const markerToughness = card.markerToughness || 0;
  const bossBonusPower = card.bossBonusPower || 0;
  const bossBonusToughness = card.bossBonusToughness || 0;

  return `${baseP + markerPower + bossBonusPower}/${baseT + markerToughness + bossBonusToughness}`;
}

function getMobileText(key) {
  const copy = {
    en: {
      kicker: 'Marvel Team-Up fan app',
      titleTop: 'MARVEL',
      titleBottom: 'TEAM-UP',
      subtitle: 'Marvel Team-Up Coop Companion',
      selectPlayers: 'Select Players',
      players: 'Players',
      heroes: 'Heroes',
      bosses: 'Bosses',
      gallery: 'Card Gallery',
      language: 'Language',
      stage: 'Stage',
      turn: 'Turn',
      deck: 'Deck',
      graveyard: 'Graveyard',
      defeated: 'Defeated',
      activeBosses: 'Active Bosses',
      revealedEvents: 'Revealed This Turn',
      noRevealedEvents: 'No event cards revealed yet.',
      battlefield: 'Battlefield',
      log: 'Log',
      battlefieldClear: 'Battlefield is clear',
      pressNext: 'Press Next Turn to draw event cards',
      nextTurn: 'Next Turn',
      noLog: 'No log entries yet.',
      search: 'Search cards...',
      all: 'All',
      minions: 'Minions',
      tactics: 'Tactics',
      edit: 'Edit',
      viewCard: 'View Card',
      noCards: 'No cards found.'
    },
    pt: {
      kicker: 'Marvel Team-Up fan app',
      titleTop: 'MARVEL',
      titleBottom: 'TEAM-UP',
      subtitle: 'Marvel Team-Up Coop Companion',
      selectPlayers: 'Selecionar Jogadores',
      players: 'Jogadores',
      heroes: 'Herois',
      bosses: 'Chefes',
      gallery: 'Galeria de Cartas',
      language: 'Idioma',
      stage: 'Estagio',
      turn: 'Turno',
      deck: 'Deck',
      graveyard: 'Cemiterio',
      defeated: 'Derrotados',
      activeBosses: 'Chefes Ativos',
      revealedEvents: 'Reveladas Neste Turno',
      noRevealedEvents: 'Nenhuma carta de evento revelada ainda.',
      battlefield: 'Campo',
      log: 'Log',
      battlefieldClear: 'Campo de batalha vazio',
      pressNext: 'Pressione Proximo Turno para revelar eventos',
      nextTurn: 'Proximo Turno',
      noLog: 'Nenhum registro ainda.',
      search: 'Buscar cartas...',
      all: 'Todos',
      minions: 'Lacaios',
      tactics: 'Taticas',
      edit: 'Editar',
      viewCard: 'Ver Carta',
      noCards: 'Nenhuma carta encontrada.'
    }
  };
  const lang = currentLang === 'en' ? 'en' : 'pt';
  return copy[lang][key] || key;
}

function mobileNavigate(view) {
  MobileApp.view = view;
  renderMobileApp();
}

function mobileStartGame(players) {
  GameEngine.setupGame(players);
  const consoleLog = document.getElementById('game-console-log');
  if (consoleLog) consoleLog.innerHTML = '';
  GameEngine.logMessage(
    `Partida iniciada para ${players} jogadores.`,
    `Match started for ${players} players.`
  );
  MobileApp.gameTab = 'battlefield';
  MobileApp.view = 'game';
  updateUI();
}

function mobileSetLanguage(lang) {
  switchLanguage(lang);
  renderMobileApp();
}

function mobileSetGameTab(tab) {
  MobileApp.gameTab = tab;
  renderMobileApp();
}

function mobileSetGalleryFilter(filter) {
  MobileApp.galleryFilter = filter;
  MobileApp.expandedCardId = null;
  renderMobileApp();
}

function mobileSetGallerySearch(value) {
  MobileApp.gallerySearch = value || '';
  renderMobileApp();
  const input = document.querySelector('.gallery-search');
  if (input) {
    input.focus();
    const end = input.value.length;
    input.setSelectionRange(end, end);
  }
}

function mobileToggleCard(cardId) {
  MobileApp.expandedCardId = MobileApp.expandedCardId === cardId ? null : cardId;
  renderMobileApp();
}

function mobileResetGame() {
  handleResetGame();
  MobileApp.gameTab = 'battlefield';
  MobileApp.view = 'game';
  renderMobileApp();
}

function mobileRenderHome() {
  const playerOptions = [2, 3, 4].map((players) => {
    const heroes = players === 4 ? 40 : players === 3 ? 30 : 20;
    const bosses = players === 4 ? 30 : players === 3 ? 30 : 20;
    return `
      <button class="player-card" type="button" onclick="mobileStartGame(${players})">
        <span class="player-number">${players}</span>
        <span class="player-label">${getMobileText('players')}</span>
        <span class="player-stats">${heroes} ${getMobileText('heroes')}<br>${bosses} ${getMobileText('bosses')}</span>
      </button>
    `;
  }).join('');

  return `
    <section class="mobile-screen active">
      <div class="mobile-scroll home-hero">
        <div class="mobile-inner">
          <div class="home-kicker">${getMobileText('kicker')}</div>
          <h1 class="home-title">${getMobileText('titleTop')}<span>${getMobileText('titleBottom')}</span></h1>
          <div class="home-rule"></div>
          <p class="home-subtitle">${getMobileText('subtitle')}</p>
          <div class="section-label">${getMobileText('selectPlayers')}</div>
          <div class="player-grid">${playerOptions}</div>
          <div class="home-actions">
            <button class="wide-action" type="button" onclick="mobileNavigate('gallery')">${getMobileText('gallery')}</button>
            <div class="section-label" style="margin: 4px 0 0;">${getMobileText('language')}</div>
            <div class="language-row">
              <button class="seg-btn ${currentLang === 'pt' ? 'active' : ''}" type="button" onclick="mobileSetLanguage('pt')">PT</button>
              <button class="seg-btn ${currentLang === 'en' ? 'active' : ''}" type="button" onclick="mobileSetLanguage('en')">EN</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCompactCard(card, isBattlefield = false) {
  const artStyle = getCardArtStyle(card);
  const finalPT = getFinalPT(card, isBattlefield);
  const pt = finalPT ? ` · ${escapeHTML(finalPT)}` : '';
  const sickness = isBattlefield && card.summoningSickness
    ? `
      <div class="compact-sickness" aria-label="${currentLang === 'en' ? 'Summoning sickness' : 'Enjoo de invocacao'}">
        <span>Zzz</span>
      </div>
      <div class="compact-card-meta">${currentLang === 'en' ? 'Summoning sickness' : 'Enjoo de invocacao'}</div>
    `
    : '';
  const bossBonus = isBattlefield && (card.bossBonusPower || card.bossBonusToughness)
    ? `<div class="compact-bonus">+${card.bossBonusPower || 0}/+${card.bossBonusToughness || 0}</div>`
    : '';

  let grantedKeywords = [];
  if (card.grantedFlying) grantedKeywords.push(currentLang === 'en' ? 'Flying 🪽' : 'Voar 🪽');
  if (card.grantedDeathtouch) grantedKeywords.push(currentLang === 'en' ? 'Deathtouch ☠️' : 'Toque mortífero ☠️');
  if (card.grantedFirstStrike) grantedKeywords.push(currentLang === 'en' ? 'First strike ⚡' : 'Iniciativa ⚡');
  const grantedHTML = grantedKeywords.length > 0
    ? `<div class="compact-card-meta" style="color: #38bdf8; font-weight: bold;">+ ${grantedKeywords.join(', ')}</div>`
    : '';
  const defeatAction = isBattlefield && card.instanceId
    ? `<button class="compact-defeat" type="button" onclick="event.stopPropagation(); handleDefeatMinion('${card.instanceId}')">${currentLang === 'en' ? 'Defeat' : 'Derrotar'}</button>`
    : '';

  return `
    <div class="compact-card" onclick="openCardArtModal('${card.id}', false)" role="button" tabindex="0">
      <div class="compact-card-art" ${artStyle}>${artStyle ? '' : escapeHTML(card.artDefault || '*')}</div>
      <div class="compact-card-body">
        <div class="compact-card-name">${escapeHTML(getCardName(card))}</div>
        <div class="compact-card-meta">${escapeHTML(getCardType(card))}${pt}</div>
        ${grantedHTML}
        ${bossBonus}
        ${sickness}
        ${defeatAction}
      </div>
    </div>
  `;
}

function mobileRenderGame() {
  const activeBosses = GameEngine.activeBosses.length
    ? GameEngine.activeBosses.map((card) => renderCompactCard(card, false)).join('')
    : `<div class="empty-state">${currentLang === 'en' ? 'No active bosses.' : 'Nenhum chefe ativo.'}</div>`;

  const revealedCards = GameEngine.drawnCards.length
    ? GameEngine.drawnCards.map((card) => renderCompactCard(card, false)).join('')
    : `<div class="empty-state">${getMobileText('noRevealedEvents')}</div>`;

  const battlefield = GameEngine.battlefield.length
    ? `<div class="compact-card-row">${GameEngine.battlefield.map((card) => renderCompactCard(getBattlefieldCardView(card), true)).join('')}</div>`
    : `<div class="empty-state"><div><strong>${getMobileText('battlefieldClear')}</strong><br>${getMobileText('pressNext')}</div></div>`;

  const logs = Array.isArray(GameEngine.logEntries) && GameEngine.logEntries.length
    ? GameEngine.logEntries.slice().reverse().map((entry) => `<div><strong>[T${entry.turn}]</strong> ${escapeHTML(entry.text)}</div>`).join('')
    : `<div class="empty-state">${getMobileText('noLog')}</div>`;

  const tabPanel = MobileApp.gameTab === 'log'
    ? `<div class="tab-panel"><div class="log-list">${logs}</div></div>`
    : `<div class="tab-panel">${battlefield}</div>`;

  return `
    <section class="mobile-screen active">
      <div class="app-topbar">
        <button class="icon-btn" type="button" onclick="mobileNavigate('home')" aria-label="Back">‹</button>
        <div class="topbar-title">${getMobileText('stage')} ${GameEngine.activeStage} / 3<span class="topbar-subtitle">${getMobileText('turn')} ${GameEngine.turnCount}</span></div>
        <button class="icon-btn" type="button" onclick="mobileResetGame()" aria-label="Reset">×</button>
      </div>
      <div class="mobile-scroll">
        <div class="game-summary">
          <div class="life-panel heroes">
            <div class="life-label">${getMobileText('heroes')}</div>
            <div class="life-value-mobile">${GameEngine.heroesLife}</div>
            <div class="life-actions">
              <button onclick="adjustHeroesLife(-5)">-5</button>
              <button onclick="adjustHeroesLife(-1)">-1</button>
              <button onclick="adjustHeroesLife(1)">+1</button>
              <button onclick="adjustHeroesLife(5)">+5</button>
            </div>
          </div>
          <div class="versus-stack">VS<br>${GameEngine.eventDeck.length} cards</div>
          <div class="life-panel bosses">
            <div class="life-label">${getMobileText('bosses')}</div>
            <div class="life-value-mobile">${GameEngine.bossesLife}</div>
            <div class="life-actions">
              <button onclick="adjustBossesLife(-5)">-5</button>
              <button onclick="adjustBossesLife(-1)">-1</button>
              <button onclick="adjustBossesLife(1)">+1</button>
              <button onclick="adjustBossesLife(5)">+5</button>
            </div>
          </div>
        </div>
        <div class="stat-strip">
          <div class="mini-stat"><strong>${GameEngine.eventDeck.length}</strong><span>${getMobileText('deck')}</span></div>
          <div class="mini-stat"><strong>${GameEngine.eventGraveyard.length}</strong><span>${getMobileText('graveyard')}</span></div>
          <div class="mini-stat"><strong>${(GameEngine.defeatedBosses || []).length}</strong><span>${getMobileText('defeated')}</span></div>
        </div>
        <div class="panel-block">
          <div class="panel-heading">${getMobileText('activeBosses')}</div>
          <div class="compact-card-row">${activeBosses}</div>
        </div>
        <div class="panel-block">
          <div class="panel-heading">${getMobileText('revealedEvents')} (${GameEngine.drawnCards.length})</div>
          <div class="compact-card-row">${revealedCards}</div>
        </div>
        <div class="tab-bar">
          <button class="${MobileApp.gameTab === 'battlefield' ? 'active' : ''}" type="button" onclick="mobileSetGameTab('battlefield')">${getMobileText('battlefield')} (${GameEngine.battlefield.length})</button>
          <button class="${MobileApp.gameTab === 'log' ? 'active' : ''}" type="button" onclick="mobileSetGameTab('log')">${getMobileText('log')}</button>
        </div>
        ${tabPanel}
      </div>
      <div class="bottom-action">
        <button id="mobile-next-turn" class="next-turn-btn" type="button" onclick="handleNextTurn()" ${GameEngine.isGameOver ? 'disabled' : ''}>▶ ${getMobileText('nextTurn')}</button>
      </div>
    </section>
  `;
}

function getGalleryCards() {
  let cards = [];
  const filter = MobileApp.galleryFilter;
  if (filter === 'all' || filter === 'bosses') cards = cards.concat(CARD_DATABASE.bosses);
  if (filter === 'all' || filter === 'minions') cards = cards.concat(CARD_DATABASE.minions);
  if (filter === 'all' || filter === 'tactics') cards = cards.concat(CARD_DATABASE.events);

  const term = MobileApp.gallerySearch.trim().toLowerCase();
  if (!term) return cards;

  return cards.filter((card) => {
    const haystack = [
      getCardName(card),
      getCardType(card),
      getCardRules(card),
      card.pt || ''
    ].join(' ').toLowerCase();
    return haystack.includes(term);
  });
}

function getGalleryIcon(card) {
  if (CARD_DATABASE.bosses.some((boss) => boss.id === card.id)) return '☠';
  if (CARD_DATABASE.minions.some((minion) => minion.id === card.id)) return '♟';
  return '✦';
}

function mobileRenderGalleryCard(card) {
  const expanded = MobileApp.expandedCardId === card.id;
  const pt = card.pt || '';
  const rules = escapeHTML(getCardRules(card)).replace(/\n/g, '<br>');
  const type = escapeHTML(getCardType(card));

  return `
    <article class="gallery-list-card ${expanded ? 'expanded' : ''}">
      <button class="gallery-list-head" type="button" onclick="mobileToggleCard('${card.id}')">
        <span class="gallery-type-icon">${getGalleryIcon(card)}</span>
        <span>
          <span class="gallery-card-name">${escapeHTML(getCardName(card))}</span>
          <span class="gallery-card-type">${type}</span>
        </span>
        <span class="gallery-pt">${escapeHTML(pt)}</span>
        <span>${expanded ? '⌃' : '⌄'}</span>
      </button>
      <div class="gallery-card-detail">
        <p>${rules}</p>
        <div class="detail-actions">
          <button type="button" onclick="openCardArtModal('${card.id}', true)">${getMobileText('viewCard')}</button>
        </div>
      </div>
    </article>
  `;
}

function mobileRenderGallery() {
  const filters = [
    ['all', getMobileText('all')],
    ['bosses', 'Bosses'],
    ['minions', getMobileText('minions')],
    ['tactics', getMobileText('tactics')]
  ].map(([key, label]) => `
    <button class="${MobileApp.galleryFilter === key ? 'active' : ''}" type="button" onclick="mobileSetGalleryFilter('${key}')">${label}</button>
  `).join('');

  const cards = getGalleryCards();
  const list = cards.length
    ? cards.map((card) => renderVirtualCard(card, false, false)).join('')
    : `<div class="empty-state">${getMobileText('noCards')}</div>`;

  return `
    <section class="mobile-screen active">
      <div class="app-topbar">
        <button class="icon-btn" type="button" onclick="mobileNavigate('home')" aria-label="Back">‹</button>
        <div class="topbar-title">${getMobileText('gallery')}</div>
        <span></span>
      </div>
      <div class="mobile-scroll">
        <div class="mobile-inner">
          <input class="gallery-search" type="search" placeholder="${getMobileText('search')}" value="${escapeHTML(MobileApp.gallerySearch)}" oninput="mobileSetGallerySearch(this.value)" />
          <div class="filter-row">${filters}</div>
          <div class="mobile-gallery-grid">${list}</div>
        </div>
      </div>
    </section>
  `;
}

function renderMobileApp() {
  const shell = document.getElementById('mobile-app-shell');
  if (!shell) return;

  if (MobileApp.view === 'game') {
    shell.innerHTML = mobileRenderGame();
  } else if (MobileApp.view === 'gallery') {
    shell.innerHTML = mobileRenderGallery();
  } else {
    shell.innerHTML = mobileRenderHome();
  }

  shell.querySelectorAll('.mtg-card-wrapper').forEach(wrapper => {
    initCard3DTilt(wrapper);
  });
}

function renderCardGallery(filter = 'all') {
  currentFilter = filter;
  const grid = document.getElementById('gallery-cards-grid');
  if (!grid) {
    return;
  }

  // Active filters buttons
  document.querySelectorAll('.gallery-filters button').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeFilterBtn = document.getElementById(`filter-${filter}`);
  if (activeFilterBtn) activeFilterBtn.classList.add('active');

  const cards = getCardsForGalleryFilter(filter);

  grid.innerHTML = cards.map(c => renderVirtualCard(c, false, true)).join('');

  // Attach 3D tilt behaviors
  grid.querySelectorAll('.mtg-card-wrapper').forEach(wrapper => {
    initCard3DTilt(wrapper);
  });
}

// ── DOM INITIALIZATION ──

document.addEventListener('DOMContentLoaded', () => {
  migrateLegacyCustomTexts();

  // 1. Initial setup of Game state machine (2 players by default)
  GameEngine.setupGame(2);
  if (typeof applyTranslations === 'function') applyTranslations();
  GameEngine.logMessage(`👾 Marvel Companion carregado. Clique em 'Próximo Turno' ou compre cartas para começar!`, `👾 Marvel Companion loaded. Click 'Next Turn' or draw cards to start!`);
  updateUI();

  // 2. Setup Card Gallery
  renderCardGallery('all');

  // 3. Form input live change listeners to update preview instantly
  document.getElementById('customizer-name').addEventListener('input', updateModalPreview);
  document.getElementById('customizer-text').addEventListener('input', updateModalPreview);
  document.getElementById('customizer-pt').addEventListener('input', updateModalPreview);
  document.getElementById('customizer-image-url').addEventListener('input', updateModalPreview);
  document.getElementById('customizer-image-file').addEventListener('change', handleImageUpload);
  
  // Close modal when clicking outside of container
  const modal = document.getElementById('customizer-modal');
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeCardCustomizer();
    }
  });

  // Update lang button active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
});

// ================================================================
// HOTFIX: Explosão de Combustão (2x no próximo evento)
// ================================================================
(() => {
  if (typeof GameEngine === "undefined") return;

  // Estado extra do efeito "fica ao lado" e "duplica próximo evento"
  GameEngine.pendingDoubleNextEvent = false;
  GameEngine.lastDoubledEventId = null;

  const _setupGame = GameEngine.setupGame.bind(GameEngine);
  GameEngine.setupGame = function(players) {
    const out = _setupGame(players);
    this.pendingDoubleNextEvent = false;
    this.lastDoubledEventId = null;
    return out;
  };

  // Tenta descobrir o resolvedor de evento/tática já existente no motor.
  function getEventResolver(engine) {
    const candidates = [
      "resolveEventCard",
      "resolveEvent",
      "resolveTactic",
      "resolveTacticCard",
      "applyEventEffect",
      "resolveCardEffect",
      "resolveEventEffect"
    ];
    for (const fn of candidates) {
      if (typeof engine[fn] === "function") return engine[fn].bind(engine);
    }
    return null;
  }

  const eventResolver = getEventResolver(GameEngine);
  const _drawEventCard = GameEngine.drawEventCard && GameEngine.drawEventCard.bind(GameEngine);
  if (!_drawEventCard) return;

  // Aplica efeitos de eventos que já estão automatizados no motor.
  // Retorna true quando aplicou algum efeito automatizado.
  function applyAutomatedEventEffects(engine, card, contextLabel = "") {
    if (!engine || !card) return false;

    // Hour of Defeat:
    // Se houver lacaios no descarte/cemitério, retorna aleatoriamente até 2 ao campo de batalha.
    if (card.id === "ozai_decree") {
      const graveyard = Array.isArray(engine.eventGraveyard) ? engine.eventGraveyard : [];
      const minionPool = graveyard.filter(c => c && c.pt); // cartas de lacaio (têm P/T)

      if (minionPool.length > 0) {
        const shuffled = [...minionPool];
        if (typeof engine.shuffleArray === "function") engine.shuffleArray(shuffled);
        const selected = shuffled.slice(0, Math.min(2, shuffled.length));
        const selectedIds = new Set(selected.map(c => `${c.id}|${c.instanceId || ''}`));

        // Remove os lacaios selecionados do descarte
        engine.eventGraveyard = graveyard.filter(c => !selectedIds.has(`${c.id}|${c.instanceId || ''}`));

        // Retorna ao campo de batalha sob controle dos chefes
        selected.forEach(minion => {
          const revived = {
            ...minion,
            instanceId: (typeof crypto !== "undefined" && crypto.randomUUID) ? crypto.randomUUID() : `${minion.id}-${Date.now()}-${Math.random()}`,
            summoningSickness: true
          };
          engine.battlefield.push(revived);
        });

        if (typeof engine.logMessage === "function") {
          const names = selected.map(c => (currentLang === 'en' && c.nameEn) ? c.nameEn : c.name).join(", ");
          engine.logMessage(`♻️ Hour of Defeat${contextLabel}: ${selected.length} lacaio(s) retornaram do descarte ao campo (${names}).`, `♻️ Hour of Defeat${contextLabel}: ${selected.length} minion(s) returned from the discard pile to the battlefield (${names}).`);
        }
      } else if (typeof engine.logMessage === "function") {
        engine.logMessage(`♻️ Hour of Defeat${contextLabel}: nenhum lacaio no descarte para retornar.`, `♻️ Hour of Defeat${contextLabel}: no minion in discard pile to return.`);
      }
      return true;
    }

    // Villainous Hideout:
    // Heróis perdem 3 de vida e chefes ganham 3 de vida.
    if (card.id === "azula_infiltration") {
      engine.heroesLife = Math.max(0, (engine.heroesLife || 0) - 3);
      engine.bossesLife = (engine.bossesLife || 0) + 3;
      if (typeof engine.logMessage === "function") {
        engine.logMessage(`🕵️ Villainous Hideout${contextLabel}: herois perdem 3 de vida e chefes ganham 3 de vida.`, `🕵️ Villainous Hideout${contextLabel}: heroes lose 3 life and bosses gain 3 life.`);
      }
      return true;
    }

    return false;
  }

  GameEngine.drawEventCard = function() {
    const card = _drawEventCard();
    if (!card) return card;

    // 1) Se comprou Explosão de Combustão: arma duplicação do próximo evento.
    if (card.id === "combustion_blast") {
      this.pendingDoubleNextEvent = true;
      this.logMessage("💥 Explosão de Combustão armada: o próximo evento será aplicado 2x.", "💥 Combustion Blast armed: the next event will be applied 2x.");
      return card;
    }
    // Aplica efeito automatizado normal do evento (quando existir).
    applyAutomatedEventEffects(this, card);

    // 2) Se há duplicação pendente, aplica o evento atual mais 1 vez.
    if (this.pendingDoubleNextEvent) {
      this.pendingDoubleNextEvent = false;
      this.lastDoubledEventId = card.id;
      card.doubleApplied = true; // visual "2x" no evento afetado
      const duplicated = applyAutomatedEventEffects(this, card, " (2x)");
      if (duplicated && typeof this.logMessage === "function") {
        this.logMessage(`🔴 2x ativo: "${card.name}" teve seu efeito automatizado aplicado novamente.`, `🔴 2x active: "${card.nameEn || card.name}" had its automated effect applied again.`);
      } else if (!duplicated && eventResolver) {
        try {
          eventResolver(card);
          this.logMessage(`🔴 2x ativo: "${card.name}" foi aplicado uma vez extra.`, `🔴 2x active: "${card.nameEn || card.name}" was applied one extra time.`);
        } catch (err) {
          console.error("Erro ao aplicar duplicação do evento:", err);
          this.logMessage("⚠️ Não foi possível aplicar a duplicação automática deste evento.", "⚠️ Could not apply automatic duplication for this event.");
        }
      }
    }

    return card;
  };

  // Highlight 2x em vermelho nas cartas relevantes
  const _renderVirtualCard = (typeof renderVirtualCard === "function") ? renderVirtualCard : null;
  if (typeof _renderVirtualCard === "function") {
    renderVirtualCard = function(card, isOnBattlefield = false, allowEditFromModal = false) {
      let html = _renderVirtualCard(card, isOnBattlefield, allowEditFromModal);
      if (!card) return html;

      const shouldShow2x = !!card.doubleApplied;
      if (!shouldShow2x) return html;

      const badge = `<div style="position:absolute;top:8px;left:8px;background:linear-gradient(135deg,#ff3b30 0%,#b00020 100%);color:#fff;font-weight:900;font-size:.78rem;letter-spacing:.6px;padding:5px 9px;border-radius:999px;border:2px solid rgba(255,255,255,.7);box-shadow:0 0 0 3px rgba(127,29,29,.85),0 0 18px rgba(255,59,48,.85),0 10px 22px rgba(120,0,20,.65);z-index:30;text-transform:uppercase;">2x</div>`;
      html = html.replace(
        /<div class="mtg-card([^"]*)">/,
        `<div class="mtg-card$1" style="box-shadow:0 0 0 4px rgba(255,59,48,.92),0 0 0 8px rgba(120,0,20,.58),0 0 20px rgba(255,59,48,.65),0 14px 34px rgba(70,0,15,.65);">${badge}`
      );
      return html;
    };
  }
})();

// ================================================================
// HOTFIX: Efeito passivo do Baron Strucker
// "Sempre que uma criatura que os chefes controlam morrer, os heróis perdem 1 de vida."
// ================================================================
(() => {
  if (typeof GameEngine === "undefined" || typeof GameEngine.defeatMinion !== "function") return;
  if (GameEngine.__ozaiDefeatHookApplied) return;
  GameEngine.__ozaiDefeatHookApplied = true;

  const _defeatMinion = GameEngine.defeatMinion.bind(GameEngine);
  GameEngine.defeatMinion = function(instanceId) {
    const beforeCount = Array.isArray(this.battlefield) ? this.battlefield.length : 0;
    const out = _defeatMinion(instanceId);
    const afterCount = Array.isArray(this.battlefield) ? this.battlefield.length : 0;
    const minionActuallyDefeated = afterCount < beforeCount;

    if (!minionActuallyDefeated) return out;

    const ozaiActive = Array.isArray(this.activeBosses) && this.activeBosses.some(b => b && b.id === "ozai");
    if (!ozaiActive) return out;

    this.heroesLife = Math.max(0, (this.heroesLife || 0) - 1);
    if (typeof this.logMessage === "function") {
      this.logMessage("👑 Baron Strucker ativo: um lacaio morreu, herois perdem 1 ponto de vida.", "👑 Baron Strucker active: a minion died, heroes lose 1 life point.");
    }

    return out;
  };
})();

// ================================================================
// HOTFIX: Ordem de resolução com Ressurgimento Imperial
// Se um evento/tática foi resolvido antes do Ressurgimento no mesmo turno,
// ele também deve voltar ao Event Deck (não ficar no descarte).
// ================================================================
(() => {
  if (typeof GameEngine === "undefined" || typeof GameEngine.nextTurn !== "function") return;
  if (GameEngine.__resurgenceOrderFixApplied) return;
  GameEngine.__resurgenceOrderFixApplied = true;

  const _nextTurn = GameEngine.nextTurn.bind(GameEngine);
  GameEngine.nextTurn = function() {
    _nextTurn();

    if (!Array.isArray(this.drawnCards) || this.drawnCards.length === 0) return;

    const resurgenceIndex = this.drawnCards.findIndex(c => c && c.id === "resurgence");
    if (resurgenceIndex < 0) return;

    // Táticas reveladas antes do Ressurgimento neste turno
    const priorTactics = this.drawnCards
      .slice(0, resurgenceIndex)
      .filter(c => c && !c.pt); // tática/evento (lacaios têm pt)

    if (priorTactics.length === 0) return;

    const idsToPull = new Set(priorTactics.map(c => c.id));
    const toReturn = [];
    this.eventGraveyard = (this.eventGraveyard || []).filter(card => {
      if (card && idsToPull.has(card.id)) {
        toReturn.push(card);
        return false;
      }
      return true;
    });

    if (toReturn.length > 0) {
      this.eventDeck = this.eventDeck || [];
      this.eventDeck.push(...toReturn);
      if (typeof this.shuffleArray === "function") this.shuffleArray(this.eventDeck);
      if (typeof this.logMessage === "function") {
        this.logMessage(`🔁 Ordem aplicada: ${toReturn.length} evento(s) anterior(es) ao Ressurgimento voltaram ao Event Deck.`, `🔁 Order applied: ${toReturn.length} event(s) prior to Resurgence returned to the Event Deck.`);
      }
    }
  };
})();

// ================================================================
// HOTFIX: Efeito de entrada do Killmonger
// "Quando esta carta entrar, os chefes ganham 5 pontos de vida para cada chefe em jogo."
// ================================================================
(() => {
  if (typeof GameEngine === "undefined") return;
  if (GameEngine.__hamaEntryHookApplied) return;
  GameEngine.__hamaEntryHookApplied = true;

  function applyKillmongerEntryEffect(engine) {
    if (!engine || !Array.isArray(engine.activeBosses) || engine.activeBosses.length === 0) return;

    engine.activeBosses.forEach((boss) => {
      if (!boss || boss.id !== "hama") return;
      if (boss.__hamaEntryApplied) return;

      const bossesInPlay = engine.activeBosses.length;
      const lifeGain = 5 * bossesInPlay;
      engine.bossesLife += lifeGain;
      boss.__hamaEntryApplied = true;

      if (typeof engine.logMessage === "function") {
        engine.logMessage(`🌕 Killmonger entrou: chefes ganham ${lifeGain} de vida (${bossesInPlay} chefe(s) em jogo).`, `🌕 Killmonger entered: bosses gain ${lifeGain} life (${bossesInPlay} boss(es) in play).`);
      }
    });
  }

  if (typeof GameEngine.setupGame === "function") {
    const _setupGame = GameEngine.setupGame.bind(GameEngine);
    GameEngine.setupGame = function(players = 2) {
      const out = _setupGame(players);
      applyKillmongerEntryEffect(this);
      return out;
    };
  }

  if (typeof GameEngine.nextStage === "function") {
    const _nextStage = GameEngine.nextStage.bind(GameEngine);
    GameEngine.nextStage = function() {
      const out = _nextStage();
      applyKillmongerEntryEffect(this);
      return out;
    };
  } else if (typeof GameEngine.advanceBossStage === "function") {
    const _advanceBossStage = GameEngine.advanceBossStage.bind(GameEngine);
    GameEngine.advanceBossStage = function() {
      const out = _advanceBossStage();
      applyKillmongerEntryEffect(this);
      return out;
    };
  }
})();
