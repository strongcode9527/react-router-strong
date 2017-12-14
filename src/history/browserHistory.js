import Manager from './manager'

// manager只是为了储存和触发回调函数

const manager = Manager()

function browserHistory() {

  const History = window.history 

  function go(n) {
    History.go(n)
  }
  function push(url, state={}, title='') {
    const type = "PUSH"
    History.pushState(state, title, url)
    manager.notifyListeners(window.location, type)
  }
  function goBack() {
    go(-1)
  }
  function listen(fn) {
    manager.addListener(fn)
  }
  function replace(url, state={}, title='') {
    const type = 'REPLACE'
    History.replaceState(state, title, url)
    manager.notifyListeners(window.location, type)
  }
  function goForward() {
    go(1)
  }
  return {
    go,
    push,
    goBack,
    listen,
    replace,
    goForward,
  }
}

export default browserHistory()