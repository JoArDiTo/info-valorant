import type { AgentResponse } from '@interfaces/agent.response.ts';
import type { CompetitiveTiersResponse } from '@interfaces/competitive-tiers.response';
import type { GameModeResponse } from '@interfaces/game-mode.response.ts';

const VALORANT_API_URL='https://valorant-api.com'

export async function getAgents() {
  const response = await fetch(`${VALORANT_API_URL}/v1/agents?language=es-MX&isPlayableCharacter=true`)
  const { data } = await response.json()
  return data as AgentResponse[]
}

export async function getGameModes() {
  const response = await fetch(`${VALORANT_API_URL}/v1/gamemodes?language=es-MX`)
  const { data } = await response.json()
  return data as GameModeResponse[]
}

export async function getLastCompetitiveTiers() {
  const response = await fetch(`${VALORANT_API_URL}/v1/competitivetiers?language=es-MX`)
  const { data } = await response.json()
  const lastSeason = data.length - 1
  return data[lastSeason] as CompetitiveTiersResponse
}
