const isArrayEmpty = (arr) => {
  if (arr != undefined && arr != null && arr.length > 0) {
    return false
  }
  return true
}

const dumplogs = (message) => {
  console.log(message)

  //sends it to a tool of tracking
}
export { isArrayEmpty, dumplogs }
