import Manager from './manager'

const manager = Manager()

export default function browserHistory() {

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
