export interface CompetitiveTiersResponse {
  uuid: string
  assetObjectName: string
  tiers: Tier[]
  assetPath: string
}

export interface Tier {
  tier: number
  tierName: string
  division: string
  divisionName: string
  color: string
  backgroundColor: string
  smallIcon?: string
  largeIcon?: string
  rankTriangleDownIcon?: string
  rankTriangleUpIcon?: string
}
