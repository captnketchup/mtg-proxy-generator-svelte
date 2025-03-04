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

export interface TokensToCards {
  YNwb1: string[]
}

export interface CardsToTokens {
  EJ51g: string[]
}

export interface TokenMappings {
  YNwb1: string[]
}

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
  legalities: Legalities
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
  prices: Prices
  card_faces: CardFace[]
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

export interface Sideboard {
  count: number
  cards: Cards
}

export interface Maybeboard {
  count: number
  cards: Cards
}

export interface Commanders {
  count: number
  cards: Cards
}

export interface Companions {
  count: number
  cards: Cards
}

export interface SignatureSpells {
  count: number
  cards: Cards
}

export interface Attractions {
  count: number
  cards: Cards
}

export interface Stickers {
  count: number
  cards: Cards
}

export interface Contraptions {
  count: number
  cards: Cards
}

export interface Planes {
  count: number
  cards: Cards
}

export interface Schemes {
  count: number
  cards: Cards
}

export interface Tokens {
  count: number
  cards: Cards
}

export interface Cards {
  [uniqueCardId: string]: CardDetails
}

export interface CardDetails {
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
  legalities: { [key: string]: string}
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
  prices: Prices
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

export interface AuthorTags { }

export interface OriginalDeck {
  id: string
  name: string
  visibility: string
  publicId: string
  mainCardId: string
  mainCardIdIsCardFace: boolean
  mainCardIdIsBackFace: boolean
  createdByUser: CreatedByUser
  authors: Author[]
  createdAtUtc: string
  lastUpdatedAtUtc: string
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

