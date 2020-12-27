import { noop } from '@coloration/kit'
import StorageManager from './StorageManager'

export default class SystemManager {
  public static activeTabsIndex = 'system.activityTabs'
  public static holdingTab (tabId: number) {
    StorageManager.getStoreValue<number[]>(SystemManager.activeTabsIndex)
    .then((ids) => {
      if (!ids) return
      if (ids.includes(tabId)) return
      ids.push(tabId)

      StorageManager.setStoreValue(SystemManager.activeTabsIndex, ids)
    })
    .catch(noop)
  }

  public static disposeTab (tabId: number) {
    StorageManager.getStoreValue<number[]>(SystemManager.activeTabsIndex)
    .then((ids) => {
      if (!ids) return
      if (!ids.includes(tabId)) return
      const newIds = ids.filter(id => id !== tabId)

      StorageManager.setStoreValue(SystemManager.activeTabsIndex, newIds)
    })
    .catch(noop)
  }
}