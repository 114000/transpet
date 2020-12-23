import watchClipboard from './watchClipboard'

document.addEventListener('DOMContentLoaded', () => {

  watchClipboard({ trim: true })

  chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.cmd === "toggle") {
      const tabId = sender.tab.id

      if (!window.openingTab) window.openingTab = { ids: [] }
      const idIndex = window.openingTab.ids.indexOf(tabId)
      const active = msg.value
      if (active && idIndex < 0) {
        openingTab.ids.push(tabId)
      }

      if (!active && idIndex >= 0) {
        openingTab.ids.splice(idIndex)
      }
    }
  })
})




export default undefined
