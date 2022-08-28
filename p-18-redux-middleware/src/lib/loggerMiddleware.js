const loggerMiddleware = store => next => action => {
  console.group(action && action.type)
  console.log(store.getState())
  console.log(action)
  next(action)
  console.log(store.getState())
  console.groupEnd()
}

export default loggerMiddleware;
