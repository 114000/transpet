
export type ClipboardOption = {
  trim?: boolean
}
export default function watchClipboard (option?: ClipboardOption) : () => void {
  const opt: ClipboardOption = option || { trim: false }

  let lastText = ''
  const input = document.createElement('textarea')
  document.body.append(input)
  const arr: string[] = []

  const timer = setInterval(() => {

    input.focus()
    input.value = ''
    document.execCommand('Paste')
    const val = input.value

    if (val === '' || val === lastText) return
    lastText = val

    arr.push(opt.trim ? val.trim() : val)

    chrome.storage.local.set({'clipboardList': arr}, function() {
      console.log('保存成功', arr);
      console.log('看看谁开着！', window.openingTab)
      if (Array.isArray(window.openingTab?.ids)) {
        window.openingTab.ids.forEach((tabId) => {
          chrome.tabs.sendMessage(tabId, {cmd:'test', value:'你好，我是background！'}, function(response) {
            console.log('tab 的回复: response', response)
          });
        })
      }
    })
  }, 500)

  return function dispose () {
    clearInterval(timer)
    input.remove()
  }
}
