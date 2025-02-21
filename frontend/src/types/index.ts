export interface CollectionRow {
  $id: string
  email: string
  card_id: string
  amount_owned: number
}

export interface Expansion {
  name: string
  id: string
  cards: Card[]
  packs: Pack[]
}

export interface Pack {
  name: string
  color: string
}

export interface Card {
  card_id: string
  expansion: string
  name: string
  hp: string
  card_type: string
  evolution_type: string
  image: string
  attacks: {
    cost: string[]
    name: string
    damage: string
    effect: string
  }[]
  ability:
    | {
        name: string
        effect: string
      }
    | string
  weakness: string
  retreat: string
  rarity: string
  fullart: string
  ex: string
  set_details: string
  pack: string
  alternate_versions: {
    version: string
    rarity: string
  }[]
  artist: string
  probability: {
    '1-3 card': string | null | undefined
    '4 card': string | null | undefined
    '5 card': string | null | undefined
  }
  crafting_cost: number
}
