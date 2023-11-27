export interface PackageItem {
  icon: string;
  title: string;
  url: string;
  color?: string;
  pricing?: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export enum Hats {
  black = "Black",
  gray = "Gray",
  white = "White"
}


export interface Speaker {
  talkName: string
  name: string
  detail: string
  imageSrc: string
  time: {
    start: Date,
    end: Date
  },
  keynote?: boolean
}
