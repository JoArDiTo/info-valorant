import type { AgentResponse } from '@interfaces/agent.response.ts';

const VALORANT_API_URL='https://valorant-api.com'

export async function getAgents() {
  const response = await fetch(`${VALORANT_API_URL}/v1/agents?language=es-MX&isPlayableCharacter=true`)
  const { data } = await response.json()
  return data as AgentResponse[]
}

