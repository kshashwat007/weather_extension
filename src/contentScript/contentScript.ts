console.log("contentScript running")

chrome.runtime.sendMessage("From content script", (res) => {
  console.log(res)
})