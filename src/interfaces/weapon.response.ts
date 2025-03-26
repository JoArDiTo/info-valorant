export interface WeaponResponse {
  uuid:             string;
  displayName:      string;
  category:         string;
  defaultSkinUuid:  string;  
  displayIcon:      string;
  killStreamIcon:   string;
  assetPath:        string;
  weaponStats:      any[];  // No será considerado
  shopData:         any[];  // No será considerado
  skins:            Skins[];
}

export interface Skins {
  uuid:             string;
  displayName:      string;
  themeUuid:        string;
  contentTierUuid:  string;
  displayIcon:      string;
  wallpaper:        string;
  assetPath:        string;
  chromas:          Chromas[];
  levels:           Levels[];
}

interface Chromas {
  uuid:           string;
  displayName:    string;
  displayIcon:    string;
  fullRender:     string;
  swatch:         string;
  streamedVideo:  string;
  assetPath:      string;
}

interface Levels {
  uuid:           string;
  displayName:    string;
  levelItem:      string;
  displayIcon:    string;
  streamedVideo:  string;
  assetPath:      string;
}