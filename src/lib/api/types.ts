export interface UserDecksResponse {
    pinned: any[]
    pageNumber: number
    pageSize: number
    totalResults: number
    totalPages: number
    data: Deck[]
}

export interface Deck {
    matchTypes: any[]
    matchedCards: any[]
    id: string
    name: string
    hasPrimer: boolean
    format: string
    areCommentsEnabled: boolean
    visibility: string
    publicUrl: string
    publicId: string
    likeCount: number
    viewCount: number
    commentCount: number
    sfwCommentCount: number
    isLegal: boolean
    authorsCanEdit: boolean
    isShared: boolean
    mainCardId: string
    mainCardIdIsCardFace: boolean
    mainCardIdIsBackFace: boolean
    createdByUser: CreatedByUser
    authors: Author[]
    createdAtUtc: string
    lastUpdatedAtUtc: string
    mainboardCount: number
    sideboardCount: number
    maybeboardCount: number
    hubNames: any[]
    colors: string[]
    colorPercentages: ColorPercentages
    colorIdentity: string[]
    colorIdentityPercentages: ColorIdentityPercentages
    bracket: number
    autoBracket: number
    ignoreBrackets: boolean
}

export interface CreatedByUser {
    userName: string
    displayName: string
    badges: any[]
}

export interface Author {
    userName: string
    displayName: string
    badges: any[]
}

export interface ColorPercentages {
    white: number
    blue: number
    black: number
    red: number
    green: number
}

export interface ColorIdentityPercentages {
    white: number
    blue: number
    black: number
    red: number
    green: number
}

export interface DeckResponse {
    id: string
    name: string
    description: string
    format: string
    visibility: string
    publicUrl: string
    publicId: string
    likeCount: number
    viewCount: number
    commentCount: number
    sfwCommentCount: number
    areCommentsEnabled: boolean
    isShared: boolean
    authorsCanEdit: boolean
    createdByUser: CreatedByUser
    authors: Author[]
    requestedAuthors: any[]
    main: Main
    boards: Boards
    version: number
    tokens: Token[]
    tokensToCards: TokensToCards
    cardsToTokens: CardsToTokens
    tokenMappings: TokenMappings
    hubs: any[]
    createdAtUtc: string
    lastUpdatedAtUtc: string
    exportId: string
    authorTags: AuthorTags
    originalDeck: OriginalDeck
    isTooBeaucoup: boolean
    affiliates: Affiliates
    mainCardIdIsBackFace: boolean
    allowPrimerClone: boolean
    enableMultiplePrintings: boolean
    includeBasicLandsInPrice: boolean
    includeCommandersInPrice: boolean
    includeSignatureSpellsInPrice: boolean
    colors: string[]
    colorPercentages: ColorPercentages
    colorIdentity: string[]
    colorIdentityPercentages: ColorIdentityPercentages
    media: any[]
    ownerUserId: string
    autoBracket: number
    bracket: number
    ignoreBrackets: boolean
  }
  
  export interface CreatedByUser {
    userName: string
    displayName: string
    badges: any[]
  }
  
  export interface Author {
    userName: string
    displayName: string
    badges: any[]
  }
  
  export interface Main {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Boards {
    mainboard: Mainboard
    sideboard: Sideboard
    maybeboard: Maybeboard
    commanders: Commanders
    companions: Companions
    signatureSpells: SignatureSpells
    attractions: Attractions
    stickers: Stickers
    contraptions: Contraptions
    planes: Planes
    schemes: Schemes
    tokens: Tokens
  }
  
  export interface Mainboard {
    count: number
    cards: Cards
  }
  
  export interface Cards {
    L33Rl: L33Rl
    EJ51g: Ej51g
    kpxN0: KpxN0
    EJ5A8: Ej5A8
    LDPDX: Ldpdx
    kpa34: Kpa34
    EPnWm: EpnWm
    E1XGe: E1Xge
    L3jwJ: L3jwJ
    Lw1l9: Lw1l9
    kaNXb: KaNxb
    kAj50: KAj50
    Ebwv9: Ebwv9
    Y26Dj: Y26Dj
    kXwgA: KXwgA
    kpo21: Kpo21
    k9dB0: K9dB0
    Egver: Egver
    E1K9A: E1K9A
    EgXNP: EgXnp
    LGKmn: Lgkmn
    EgXnX: EgXnX
    ErBJn: ErBjn
    Y26vB: Y26vB
    L4x4r: L4x4r
    kqOe2: KqOe2
    YeB7K: YeB7K
    kXXPx: KXxpx
    Yj045: Yj045
    kylP0: KylP0
    kqv82: Kqv82
    EZyKV: EzyKv
    LR3dq: Lr3dq
    E5yK2: E5yK2
    YlezG: YlezG
    Yxx8J: Yxx8J
    EZWVV: Ezwvv
    kqA5D: KqA5D
    kaN7O: KaN7O
  }
  
  export interface L33Rl {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities2
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices2
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities2 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices2 {
    usd: number
    eur: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface Ej51g {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card2
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card2 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities3
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices3
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    cardmarket_id: number
    tcgplayer_id: number
    reprint: boolean
    set_type: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities3 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices3 {
    usd: number
    eur: number
    lastUpdatedAtUtc: string
    ct: number
  }
  
  export interface KpxN0 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card3
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card3 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities4
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices4
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities4 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices4 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Ej5A8 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card4
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card4 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities5
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices5
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities5 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices5 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Ldpdx {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card5
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card5 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities6
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices6
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities6 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices6 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Kpa34 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card6
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card6 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities7
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices7
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    cardmarket_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities7 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices7 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface EpnWm {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card7
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card7 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities8
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices8
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities8 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices8 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    ck_buy_qty: number
    ck_buy_foil_qty: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_qty: number
    scg_foil_qty: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface E1Xge {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card8
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card8 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities9
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices9
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities9 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices9 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface L3jwJ {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card9
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card9 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities10
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices10
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities10 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices10 {
    usd: number
    eur: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface Lw1l9 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card10
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card10 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities11
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices11
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities11 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices11 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KaNxb {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card11
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card11 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities12
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices12
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities12 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices12 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KAj50 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card12
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card12 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities13
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices13
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities13 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices13 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Ebwv9 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card13
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card13 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities14
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices14
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities14 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices14 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Y26Dj {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card14
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card14 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities15
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices15
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    cardkingdom_etched_id: number
    cardKingdomEtchedUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities15 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices15 {
    usd: number
    usd_foil: number
    usd_etched: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    ck_etched: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KXwgA {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card15
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card15 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities16
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices16
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities16 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices16 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Kpo21 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card16
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card16 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities17
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices17
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities17 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices17 {
    usd: number
    eur: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface K9dB0 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card17
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card17 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities18
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices18
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities18 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices18 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface Egver {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card18
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card18 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities19
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices19
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities19 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices19 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface E1K9A {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card19
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card19 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities20
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices20
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities20 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices20 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface EgXnp {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card20
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card20 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities21
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices21
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities21 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices21 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Lgkmn {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card21
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card21 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities22
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices22
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities22 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices22 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface EgXnX {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card22
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card22 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities23
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices23
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities23 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices23 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface ErBjn {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card23
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card23 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities24
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices24
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities24 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices24 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Y26vB {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card24
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card24 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities25
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices25
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    flavor_name: string
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities25 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices25 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface L4x4r {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card25
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card25 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities26
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices26
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities26 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices26 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface KqOe2 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card26
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card26 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities27
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices27
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities27 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices27 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface YeB7K {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card27
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card27 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities28
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices28
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities28 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices28 {
    usd: number
    usd_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    ck_buy_qty: number
    ck_buy_foil_qty: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_qty: number
    scg_foil_qty: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KXxpx {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card28
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card28 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities29
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices29
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities29 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices29 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Yj045 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card29
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card29 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities30
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices30
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities30 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices30 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KylP0 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card30
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card30 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities31
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices31
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities31 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices31 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Kqv82 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card31
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card31 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities32
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices32
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities32 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices32 {
    usd: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_buy: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface EzyKv {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card32
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card32 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities33
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices33
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities33 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices33 {
    usd: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
  }
  
  export interface Lr3dq {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card33
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card33 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities34
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices34
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities34 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices34 {
    usd: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
  }
  
  export interface E5yK2 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card34
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card34 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities35
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices35
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities35 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices35 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface YlezG {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card35
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card35 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities36
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices36
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities36 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices36 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface Yxx8J {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card36
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card36 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities37
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices37
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities37 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices37 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface Ezwvv {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card37
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card37 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities38
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices38
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities38 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices38 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface KqA5D {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card38
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card38 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities39
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices39
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities39 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices39 {
    usd: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
  }
  
  export interface KaN7O {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card39
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card39 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities40
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices40
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities40 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices40 {
    usd: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
  }
  
  export interface Sideboard {
    count: number
    cards: Cards2
  }
  
  export interface Cards2 {}
  
  export interface Maybeboard {
    count: number
    cards: Cards3
  }
  
  export interface Cards3 {
    LKzVP: LkzVp
    Lm6Xr: Lm6Xr
    E140v: E140v
    LDXGN: Ldxgn
    LzV15: LzV15
    L318R: L318R
    kOAPw: KOapw
    kAVyO: KAvyO
    Lzz1K: Lzz1K
    L3yvl: L3yvl
    LGMX5: Lgmx5
    L4OA9: L4Oa9
    E1jJm: E1jJm
    Eg1Jr: Eg1Jr
    kAgVR: KAgVr
    ky2n1: Ky2n1
    YxmdV: YxmdV
    kyNb6: KyNb6
    kXo2M: KXo2M
    ErOyK: ErOyK
    kXogV: KXogV
    EbByX: EbByX
    YvZNp: YvZnp
    kaBBq: KaBbq
    LD3Nl: Ld3Nl
    E0K6j: E0K6j
    LD5yM: Ld5yM
    kX5do: KX5do
    YnWpB: YnWpB
    YdVMz: YdVmz
    LKoVo: LkoVo
    Egj3v: Egj3v
    LmnMp: LmnMp
    YnWWA: YnWwa
    EJrwM: EjrwM
    EZgbD: EzgbD
    YxjRm: YxjRm
    YM6Zj: Ym6Zj
    E1K0x: E1K0x
  }
  
  export interface LkzVp {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card40
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card40 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities41
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices41
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities41 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices41 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    ck_buy_qty: number
    ck_buy_foil_qty: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_qty: number
    scg_foil_qty: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Lm6Xr {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card41
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card41 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities42
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices42
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities42 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices42 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface E140v {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card42
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card42 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities43
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices43
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities43 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices43 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface Ldxgn {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card43
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card43 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities44
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices44
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities44 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices44 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface LzV15 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card44
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card44 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: any[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities45
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices45
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities45 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices45 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface L318R {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card45
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card45 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities46
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices46
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities46 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices46 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KOapw {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card46
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card46 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities47
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices47
    card_faces: CardFace[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities47 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices47 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface CardFace {
    id: string
    name: string
    mana_cost: string
    type_line: string
    oracle_text: string
    colors: any[]
    color_indicator: any[]
    image_seq: number
  }
  
  export interface KAvyO {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card47
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card47 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities48
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices48
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities48 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices48 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Lzz1K {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card48
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card48 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities49
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices49
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities49 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices49 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface L3yvl {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card49
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card49 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities50
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices50
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    cardmarket_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities50 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices50 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Lgmx5 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card50
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card50 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities51
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices51
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities51 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices51 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    ck_buy_qty: number
    ck_buy_foil_qty: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_qty: number
    scg_foil_qty: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface L4Oa9 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card51
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card51 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities52
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices52
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities52 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices52 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface E1jJm {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card52
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card52 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities53
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices53
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    cardmarket_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities53 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices53 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Eg1Jr {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card53
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card53 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities54
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices54
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities54 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices54 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KAgVr {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card54
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card54 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities55
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices55
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities55 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices55 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface Ky2n1 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card55
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card55 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities56
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices56
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities56 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices56 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface YxmdV {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card56
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card56 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities57
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices57
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities57 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices57 {
    usd: number
    eur: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface KyNb6 {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card57
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card57 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities58
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices58
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities58 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices58 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KXo2M {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card58
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card58 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities59
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices59
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities59 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices59 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface ErOyK {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card59
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card59 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities60
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices60
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities60 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices60 {
    usd: number
    usd_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KXogV {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card60
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card60 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities61
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices61
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities61 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices61 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    ck_buy_qty: number
    ck_buy_foil_qty: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_qty: number
    scg_foil_qty: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface EbByX {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card61
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card61 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities62
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices62
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities62 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices62 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface YvZnp {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card62
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card62 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities63
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices63
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities63 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices63 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KaBbq {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card63
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card63 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities64
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices64
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities64 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices64 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Ld3Nl {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card64
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card64 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities65
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices65
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities65 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices65 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface E0K6j {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card65
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card65 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities66
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices66
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities66 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices66 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface Ld5yM {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card66
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card66 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities67
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices67
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities67 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices67 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface KX5do {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card67
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card67 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities68
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices68
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities68 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices68 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface YnWpB {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card68
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card68 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities69
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices69
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities69 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices69 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface YdVmz {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card69
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card69 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities70
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices70
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities70 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices70 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface LkoVo {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card70
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card70 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities71
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices71
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities71 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices71 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Egj3v {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card71
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card71 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities72
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices72
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities72 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices72 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface LmnMp {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card72
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card72 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities73
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices73
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities73 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices73 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface YnWwa {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card73
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card73 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities74
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices74
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities74 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices74 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface EjrwM {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card74
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card74 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities75
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices75
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities75 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices75 {
    usd: number
    eur: number
    tix: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface EzgbD {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card75
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card75 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities76
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices76
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities76 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices76 {
    usd: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_buy: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface YxjRm {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card76
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card76 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities77
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices77
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities77 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices77 {
    usd_foil: number
    eur_foil: number
    tix: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy_foil: number
    csi_foil: number
    csi_buy_foil: number
    ct_foil: number
    scg_foil: number
    scg_foil_buy: number
  }
  
  export interface Ym6Zj {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card77
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card77 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities78
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices78
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities78 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices78 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface E1K0x {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card78
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card78 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities79
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    flavor_text: string
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices79
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities79 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices79 {
    usd: number
    usd_foil: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    ck_buy_qty: number
    ck_buy_foil_qty: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
    ct: number
    ct_foil: number
  }
  
  export interface Commanders {
    count: number
    cards: Cards4
  }
  
  export interface Cards4 {
    LwZaK: LwZaK
  }
  
  export interface LwZaK {
    quantity: number
    boardType: string
    finish: string
    isFoil: boolean
    isAlter: boolean
    isProxy: boolean
    card: Card79
    useCmcOverride: boolean
    useManaCostOverride: boolean
    useColorIdentityOverride: boolean
    excludedFromColor: boolean
  }
  
  export interface Card79 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities80
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices80
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    cardmarket_id: number
    mtgo_id: number
    arena_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities80 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices80 {
    usd: number
    usd_foil: number
    eur: number
    eur_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface Companions {
    count: number
    cards: Cards5
  }
  
  export interface Cards5 {}
  
  export interface SignatureSpells {
    count: number
    cards: Cards6
  }
  
  export interface Cards6 {}
  
  export interface Attractions {
    count: number
    cards: Cards7
  }
  
  export interface Cards7 {}
  
  export interface Stickers {
    count: number
    cards: Cards8
  }
  
  export interface Cards8 {}
  
  export interface Contraptions {
    count: number
    cards: Cards9
  }
  
  export interface Cards9 {}
  
  export interface Planes {
    count: number
    cards: Cards10
  }
  
  export interface Cards10 {}
  
  export interface Schemes {
    count: number
    cards: Cards11
  }
  
  export interface Cards11 {}
  
  export interface Tokens {
    count: number
    cards: Cards12
  }
  
  export interface Cards12 {}
  
  export interface Token {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type?: string
    type_line: string
    oracle_text?: string
    mana_cost?: string
    power?: string
    toughness?: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities81
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices81
    card_faces: CardFace2[]
    artist: string
    promo_types: string[]
    isArenaLegal: boolean
    released_at: string
    arena_id?: number
    reprint: boolean
    set_type: string
    acorn: boolean
    image_seq: number
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
    cardHoarderUrl?: string
    cardMarketUrl?: string
    tcgPlayerUrl?: string
    coolStuffIncUrl?: string
    coolStuffIncFoilUrl?: string
    frame_effects?: string[]
    cardKingdomUrl?: string
    cardKingdomFoilUrl?: string
    edhrec_rank?: number
    multiverse_ids?: number[]
    mtgo_id?: number
    tcgplayer_id?: number
    cardkingdom_id?: number
    cardkingdom_foil_id?: number
    cardTraderUrl?: string
    cardTraderFoilUrl?: string
    starcitygames_sku?: string
    starcitygames_url?: string
    starcitygames_foil_sku?: string
    starcitygames_foil_url?: string
  }
  
  export interface Legalities81 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices81 {
    lastUpdatedAtUtc: string
    csi?: number
    csi_foil?: number
    csi_buy?: number
    csi_buy_foil?: number
    csi_buy_qty?: number
    csi_buy_foil_qty?: number
    usd?: number
    usd_foil?: number
    tix?: number
    ck?: number
    ck_foil?: number
    ck_buy?: number
    ck_buy_foil?: number
    ck_buy_qty?: number
    ck_buy_foil_qty?: number
    ct?: number
    ct_foil?: number
    scg?: number
    scg_foil?: number
    scg_qty?: number
    scg_foil_qty?: number
    scg_buy?: number
    scg_foil_buy?: number
  }
  
  export interface CardFace2 {
    id: string
    name: string
    mana_cost: string
    type_line: string
    oracle_text: string
    colors: any[]
    color_indicator: any[]
    image_seq: number
  }
  
  export interface TokensToCards {
    YNwb1: string[]
    k9dB0: string[]
    YoDPZ: string[]
    LGKmn: string[]
    E5NpM: string[]
    LzZn4: string[]
    E0Kev: string[]
    EgXnX: string[]
    YeB7K: string[]
    ErM6Z: string[]
    YBy6P: string[]
    kpNMw: string[]
    YNwVz: string[]
    LwZaK: string[]
  }
  
  export interface CardsToTokens {
    EJ51g: string[]
    E1XGe: string[]
    k9dB0: string[]
    LGKmn: string[]
    EgXnX: string[]
    YeB7K: string[]
    Yxx8J: string[]
    EZWVV: string[]
    kqA5D: string[]
    LwZaK: string[]
  }
  
  export interface TokenMappings {
    YNwb1: Ynwb1
    k9dB0: K9dB02
    YoDPZ: YoDpz
    LGKmn: Lgkmn2
    E5NpM: E5NpM
    LzZn4: LzZn4
    E0Kev: E0Kev
    EgXnX: EgXnX2
    YeB7K: YeB7K2
    ErM6Z: ErM6Z
    YBy6P: Yby6P
    kpNMw: KpNmw
    YNwVz: YnwVz
    LwZaK: LwZaK2
  }
  
  export interface Ynwb1 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities82
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices82
    card_faces: any[]
    artist: string
    promo_types: any[]
    isArenaLegal: boolean
    released_at: string
    multiverse_ids: number[]
    arena_id: number
    reprint: boolean
    set_type: string
    acorn: boolean
    image_seq: number
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities82 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices82 {
    lastUpdatedAtUtc: string
  }
  
  export interface K9dB02 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities83
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices83
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    tcgplayer_id: number
    cardkingdom_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities83 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices83 {
    usd: number
    ck: number
    lastUpdatedAtUtc: string
    ck_buy: number
    csi: number
    csi_buy: number
    ct: number
    scg: number
    scg_buy: number
  }
  
  export interface YoDpz {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities84
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices84
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities84 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices84 {
    lastUpdatedAtUtc: string
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
    ct: number
  }
  
  export interface Lgkmn2 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities85
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices85
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    multiverse_ids: number[]
    mtgo_id: number
    tcgplayer_id: number
    cardkingdom_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_sku: string
    starcitygames_url: string
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities85 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices85 {
    usd: number
    usd_foil: number
    tix: number
    ck: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy: number
    ck_buy_foil: number
    ck_buy_qty: number
    ck_buy_foil_qty: number
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
    ct: number
    ct_foil: number
    scg: number
    scg_foil: number
    scg_qty: number
    scg_foil_qty: number
    scg_buy: number
    scg_foil_buy: number
  }
  
  export interface E5NpM {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities86
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices86
    card_faces: any[]
    artist: string
    promo_types: string[]
    isArenaLegal: boolean
    released_at: string
    arena_id: number
    reprint: boolean
    set_type: string
    acorn: boolean
    image_seq: number
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities86 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices86 {
    lastUpdatedAtUtc: string
  }
  
  export interface LzZn4 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities87
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices87
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    reprint: boolean
    set_type: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities87 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices87 {
    lastUpdatedAtUtc: string
    csi_foil: number
    csi_buy_foil: number
    csi_buy_foil_qty: number
  }
  
  export interface E0Kev {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type_line: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities88
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices88
    card_faces: CardFace3[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    acorn: boolean
    image_seq: number
    cardTraderUrl: string
    cardTraderFoilUrl: string
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities88 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices88 {
    lastUpdatedAtUtc: string
    csi: number
    csi_buy: number
    ct: number
    ct_foil: number
  }
  
  export interface CardFace3 {
    id: string
    name: string
    mana_cost: string
    type_line: string
    oracle_text: string
    colors: any[]
    color_indicator: any[]
    image_seq: number
  }
  
  export interface EgXnX2 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities89
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices89
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    tcgplayer_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities89 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices89 {
    usd_foil: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy_foil: number
    ck_buy_foil_qty: number
    csi_foil: number
    csi_buy_foil: number
    csi_buy_foil_qty: number
    ct_foil: number
    scg_foil: number
    scg_foil_qty: number
    scg_foil_buy: number
  }
  
  export interface YeB7K2 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities90
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices90
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    tcgplayer_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities90 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices90 {
    usd_foil: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy_foil: number
    csi_foil: number
    csi_buy_foil: number
    ct_foil: number
    scg_foil: number
    scg_foil_buy: number
  }
  
  export interface ErM6Z {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    colors: any[]
    color_indicator: any[]
    color_identity: any[]
    legalities: Legalities91
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices91
    card_faces: any[]
    artist: string
    promo_types: string[]
    isArenaLegal: boolean
    released_at: string
    arena_id: number
    reprint: boolean
    set_type: string
    acorn: boolean
    image_seq: number
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities91 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices91 {
    lastUpdatedAtUtc: string
  }
  
  export interface Yby6P {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities92
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices92
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities92 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices92 {
    lastUpdatedAtUtc: string
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
  }
  
  export interface KpNmw {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities93
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices93
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities93 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices93 {
    lastUpdatedAtUtc: string
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
  }
  
  export interface YnwVz {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities94
    frame: string
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices94
    card_faces: any[]
    artist: string
    promo_types: any[]
    cardHoarderUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    reprint: boolean
    set_type: string
    coolStuffIncUrl: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    content_warning: boolean
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities94 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices94 {
    lastUpdatedAtUtc: string
    csi: number
    csi_foil: number
    csi_buy: number
    csi_buy_foil: number
    csi_buy_qty: number
    csi_buy_foil_qty: number
  }
  
  export interface LwZaK2 {
    id: string
    uniqueCardId: string
    scryfall_id: string
    set: string
    set_name: string
    name: string
    cn: string
    layout: string
    cmc: number
    type: string
    type_line: string
    oracle_text: string
    mana_cost: string
    power: string
    toughness: string
    colors: string[]
    color_indicator: any[]
    color_identity: string[]
    legalities: Legalities95
    frame: string
    frame_effects: string[]
    reserved: boolean
    digital: boolean
    foil: boolean
    nonfoil: boolean
    etched: boolean
    glossy: boolean
    rarity: string
    border_color: string
    colorshifted: boolean
    lang: string
    latest: boolean
    has_multiple_editions: boolean
    has_arena_legal: boolean
    prices: Prices95
    card_faces: any[]
    artist: string
    promo_types: string[]
    cardHoarderUrl: string
    cardKingdomFoilUrl: string
    cardMarketUrl: string
    tcgPlayerUrl: string
    isArenaLegal: boolean
    released_at: string
    edhrec_rank: number
    tcgplayer_id: number
    cardkingdom_foil_id: number
    reprint: boolean
    set_type: string
    coolStuffIncFoilUrl: string
    acorn: boolean
    image_seq: number
    cardTraderFoilUrl: string
    content_warning: boolean
    starcitygames_foil_sku: string
    starcitygames_foil_url: string
    isPauperCommander: boolean
    isToken: boolean
    defaultFinish: string
  }
  
  export interface Legalities95 {
    standard: string
    future: string
    historic: string
    timeless: string
    gladiator: string
    pioneer: string
    explorer: string
    modern: string
    legacy: string
    pauper: string
    vintage: string
    penny: string
    commander: string
    oathbreaker: string
    standardbrawl: string
    brawl: string
    alchemy: string
    paupercommander: string
    duel: string
    oldschool: string
    premodern: string
    predh: string
  }
  
  export interface Prices95 {
    usd_foil: number
    ck_foil: number
    lastUpdatedAtUtc: string
    ck_buy_foil: number
    ck_buy_foil_qty: number
    csi_foil: number
    csi_buy_foil: number
    csi_buy_foil_qty: number
    ct_foil: number
    scg_foil: number
    scg_foil_qty: number
    scg_foil_buy: number
  }
  
  export interface AuthorTags {}
  
  export interface OriginalDeck {
    id: string
    name: string
    visibility: string
    publicId: string
    mainCardId: string
    mainCardIdIsCardFace: boolean
    mainCardIdIsBackFace: boolean
    createdByUser: CreatedByUser2
    authors: Author2[]
    createdAtUtc: string
    lastUpdatedAtUtc: string
  }
  
  export interface CreatedByUser2 {
    userName: string
    displayName: string
    badges: any[]
  }
  
  export interface Author2 {
    userName: string
    displayName: string
    badges: any[]
  }
  
  export interface Affiliates {
    ck: string
    tcg: string
    csi: string
    ch: string
    cm: string
    scg: string
    ct: string
  }
  
  export interface ColorPercentages {
    white: number
    blue: number
    black: number
    red: number
    green: number
  }
  
  export interface ColorIdentityPercentages {
    white: number
    blue: number
    black: number
    red: number
    green: number
  }
  
