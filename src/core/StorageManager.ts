import { objectGet } from '@coloration/kit'
import { StorageStore } from "./type"

const defaultStore: StorageStore = {
  system: {
    activityTabs: [],
    activityPath: [],
  },
  features: []
}
class Storage {
  storageKey: string
  store: StorageStore

  constructor (key: string) {
    this.storageKey = key
    this.store = defaultStore
  }

  private sync () {
    return new Promise<void>((resolve) => {
      chrome.storage.local.set({ [this.storageKey]: this.store }, function () {
        resolve()
      })
    })
  }

  private save () {
    this.store

    return this.sync()

  }

  read () {
    return new Promise<StorageStore>((resolve) => {
      chrome.storage.local.get(this.storageKey, function (store: StorageStore) {
        resolve(store)
      } as any)
    })
  }
}


export default class StorageManager {
  private static storageKey = '@@transpet'
  private static _storage: Storage
  public static get instance () {
    const storage =
      StorageManager._storage ||
      (StorageManager._storage = new Storage(StorageManager.storageKey))
    return storage
  }

  public static getStoreValue<T = any> (valuePath: string) {
    return StorageManager.instance.read()
    .then<T | null>((store: StorageStore) => {
      return objectGet(null, store, ...valuePath.split(','))
    })
  }

  public static setStoreValue (valuePath: string, value: any) {
    const paths = valuePath.split(',')
    return StorageManager.instance.read()
    .then((store: StorageStore) => {


      for (let obj: any = store, i = 0; i < paths.length; i++) {
        const key = paths[i]
        if (!obj.hasOwnProperty(key)) throw new ReferenceError(`has no key[${key}] in store: ${JSON.stringify(obj)}`)
        if (i === paths.length - 1) {
          obj[key] = value
          return value
        }
        obj = obj[key]
      }

    })



  }

}