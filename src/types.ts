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

interface Time {
  start: Date | string,
  end: Date | string
}
export interface HMContributor {
  talkName: string
  name: string
  detail: string
  imageSrc: string
  time: Time,
  keynote?: boolean,
  socialNetworks?: SocialNetwork[]
}


export interface Speaker extends HMContributor {
}

export interface Workshopper extends HMContributor {

}

export interface Group {
  name: string,
  logo: string,
  url: string,
  socialNetworks: SocialNetwork[]
}

export interface Village {
  name: string,
  topics?: string[],
  groups?: Group[],
}

export interface SocialNetwork {
  type: RRSS,
  url: string
}

export enum RRSS {
  facebook = 'icon-[mdi--facebook]',
  instagram = 'icon-[mdi--instagram]',
  github = 'icon-[mdi--github]',
  web = 'icon-[mdi--web]',
  linkeding = 'icon-[mdi--web]'
}