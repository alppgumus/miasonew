export type CookieCategories = {
  necessary: boolean; // Zorunlu çerezler (her zaman true)
  analytics: boolean; // Google Analytics, Hotjar vb.
  marketing: boolean; // Reklam çerezleri
  preferences: boolean; // Site tercihleri
};

export type CookieSettings = {
  consent: boolean;
  categories: CookieCategories;
  lastUpdated: string;
};

export const defaultCookieSettings: CookieSettings = {
  consent: false,
  categories: {
    necessary: true, // Her zaman true olacak
    analytics: false,
    marketing: false,
    preferences: false
  },
  lastUpdated: new Date().toISOString()
}; 