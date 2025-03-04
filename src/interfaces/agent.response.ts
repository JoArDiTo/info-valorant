export interface AgentResponse {
  uuid:                      string;
  displayName:               string;
  description:               string;
  developerName:             string;
  releaseDate:               Date;
  characterTags:             string[] | null;
  displayIcon:               string;
  displayIconSmall:          string;
  bustPortrait:              null | string;
  fullPortrait:              null | string;
  fullPortraitV2:            null | string;
  killfeedPortrait:          string;
  background:                null | string;
  backgroundGradientColors:  string[];
  assetPath:                 string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter:       boolean;
  isAvailableForTest:        boolean;
  isBaseContent:             boolean;
  role:                      Role | null;
  recruitmentData:           RecruitmentData | null;
  abilities:                 Ability[];
  voiceLine:                 null;
}

export interface Role {
  uuid:        string;
  displayName: DisplayName;
  description: string;
  displayIcon: string;
  assetPath:   string;
}

export enum DisplayName {
  Controller = "Controlador",
  Duelist = "Duelista",
  Initiator = "Iniciador",
  Sentinel = "Centinela",
}

export interface RecruitmentData {
  counterId:              string;
  milestoneId:            string;
  milestoneThreshold:     number;
  useLevelVpCostOverride: boolean;
  levelVpCostOverride:    number;
  startDate:              Date;
  endDate:                Date;
}

export interface Ability {
  slot:        Slot;
  displayName: string;
  description: string;
  displayIcon: null | string;
}

export enum Slot {
  Ability1 = "Ability1",
  Ability2 = "Ability2",
  Grenade = "Grenade",
  Passive = "Passive",
  Ultimate = "Ultimate",
}
