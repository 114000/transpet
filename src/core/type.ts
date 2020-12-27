export type StorageStore = {
  system: SystemStore,
  features: IFeature[]
}


export type SystemStore = {
  activityTabs: number[]
  activityPath: string[]
}

export enum FeatureCategory {
  default = 0
}

export enum FeatureType {
  clipboard = 100
}

export interface IFeature {
  type: FeatureType
  category: FeatureCategory
  enable: boolean
  volume: string
  items: IFeature
}

export interface IFeatureItem<T = string> {
  t: T
  d: number
}