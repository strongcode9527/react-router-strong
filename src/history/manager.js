const manager = () => {
  const listeners = []
  
  function addListener(fn) {
    if(listeners.find(item => item === fn), typeof fn !== 'function') {
      return
    }
    listeners.push(fn)
    const length = listeners.length
    return () => {
      listeners.splice(length - 1, 1)
    }
  }

  function notifyListeners(location, action) {
    try{
      listeners.forEach(listener => listener(location, action))
    }
    catch(e) {
      console.warn(e)
    }
  }

  function getListener() {
    return listeners
  }

  return {
    addListener,
    getListener,
    notifyListeners,
  }
}

export default manager
