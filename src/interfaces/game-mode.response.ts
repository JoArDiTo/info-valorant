export interface GameModeResponse {
  uuid:                  string;
  displayName:           string;
  description:           null | string;
  duration:              null | string;
  economyType:           null | string;
  allowsMatchTimeouts:   boolean;
  isTeamVoiceAllowed:    boolean;
  isMinimapHidden:       boolean;
  orbCount:              number;
  roundsPerHalf:         number;
  teamRoles:             string[] | null;
  gameFeatureOverrides:  GameFeatureOverride[] | null;
  gameRuleBoolOverrides: GameRuleBoolOverride[] | null;
  displayIcon:           null | string;
  listViewIconTall:      null | string;
  assetPath:             string;
}

export interface GameFeatureOverride {
  featureName: string;
  state:       boolean;
}

export interface GameRuleBoolOverride {
  ruleName: string;
  state:    boolean;
}