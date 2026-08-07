export interface DrOliviaCredential {
  name: string;
  issuer: string;
  location?: string;
}

export const certifications: string[] = [
  "Train The Trainer CoolSculpting - Allergan",
  "Cadaver Joint Research - Merz Aesthetics",
  "CoolSculpting Education Bangkok - Allergan",
  "Facial Aesthetic Master Class Beverly Hills 2019 - Galderma",
  "Non-Surgical Symposium Sydney 2019 - Australasian Society of Aesthetic Plastic Surgeons",
  "Ultherapy University (Phase I & II) - Merz Aesthetics",
  "Train The Trainer (Obesity Management) - PT. Soho Industri Pharmasi",
  "MERZ Expert Summit Copenhagen, Denmark - Merz Aesthetics",
  "IMCAS Asia Bangkok 2018 & 2017 - IMCAS",
  "MD Codes (Unlocking The Code to Lower Face Harmonization) - Allergan",
  "AMWC ASIA Taiwan 2018 - EuroMediCom",
  "Facial Anatomy Master Class Bangkok - Mahidol University",
  "CoolSculpting University Bangkok - ZELTIQ",
  "Member of American Academy of Aesthetic Medicine - International",
  "International Master Course on Aging Science (IMCAS) World Congress - (Paris, France, 2023)",
  "Beauty Through Science (BTS) Congress - Stockholm, Sweden, June 2022",
  "Advanced Filler Techniques - UMA Academy, Netherlands, 2022",
];

export const drOliviaCredentials: DrOliviaCredential[] = [
  { name: "Train The Trainer CoolSculpting", issuer: "Allergan" },
  { name: "Cadaver Joint Research", issuer: "Merz Aesthetics" },
  { name: "CoolSculpting Education Bangkok", issuer: "Allergan" },
  { name: "Facial Aesthetic Master Class Beverly Hills 2019", issuer: "Galderma" },
  { name: "Non-Surgical Symposium Sydney 2019", issuer: "Australasian Society of Aesthetic Plastic Surgeons" },
  { name: "Ultherapy University (Phase I & II)", issuer: "Merz Aesthetics" },
  { name: "Train The Trainer (Obesity Management)", issuer: "PT. Soho Industri Pharmasi" },
  { name: "MERZ Expert Summit Copenhagen, Denmark", issuer: "Merz Aesthetics" },
  { name: "IMCAS Asia Bangkok 2018 & 2017", issuer: "IMCAS" },
  { name: "MD Codes (Unlocking The Code to Lower Face Harmonization)", issuer: "Allergan" },
  { name: "AMWC ASIA Taiwan 2018", issuer: "EuroMediCom" },
  { name: "Facial Anatomy Master Class Bangkok", issuer: "Mahidol University" },
  { name: "CoolSculpting University Bangkok", issuer: "ZELTIQ" },
  { name: "Member of American Academy of Aesthetic Medicine", issuer: "American Academy of Aesthetic Medicine" },
  { name: "International Master Course on Aging Science (IMCAS) World Congress", issuer: "IMCAS", location: "Paris, France, 2023" },
  { name: "Beauty Through Science (BTS) Congress", issuer: "Beauty Through Science", location: "Stockholm, Sweden, June 2022" },
  { name: "Advanced Filler Techniques", issuer: "UMA Academy", location: "Netherlands, 2022" },
];