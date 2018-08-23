export function getNodeIndex (parentDom, childDom) {
  let result = 0
  const childrenList = parentDom.childNodes
  childrenList.forEach((item, index) => {
    if (item === childDom) {
      result = index
    }
  })
  return result
}
