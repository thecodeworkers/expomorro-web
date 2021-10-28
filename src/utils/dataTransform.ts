const _getDeep = (data, deep) => {
  if (typeof deep === 'string') {
    data = data[deep];
  }

  if (Array.isArray(deep)) {
    for (let layer of deep) {
      data = data[layer]
    }
  }
  return data
}

const _compareArray = (data, comparison, key) => {
  for (let item of data) {
    if (item[key] === comparison) return true
  }
}

export const orderBy = (array, key, type = 'desc', deep = null) => {
  return array?.sort((a, b) => {
    a = _getDeep(a, deep);
    b = _getDeep(b, deep);

    if (a[key] > b[key] && type === 'asc') return 1
    if (a[key] < b[key] && type === 'asc') return -1
    if (a[key] < b[key] && type === 'desc') return 1
    if (a[key] > b[key] && type === 'desc') return -1
    return 0
  })
}

export const filter = (nodes: Array<any>, comparison, key, deep = null) => {

  const nodeFilter = (node) => {
    let validation = true
    let validFilter = false
    let deeps = _getDeep(node, deep)
    let select = deeps[key]
    validFilter = select === comparison
    if (typeof select === 'string') validFilter = select.toLowerCase().includes(comparison.toLowerCase())
    if (Array.isArray(deeps)) validFilter = _compareArray(deeps, comparison, key)
    return validation && validFilter
  }

  return (comparison) ? nodes.filter(nodeFilter) : nodes
}

export const simplifyArray = (array) => {
  let indexes = []
  return array.filter((item) => {
    const id = item?.translation?.id
    if (!indexes.includes(id)) {
      indexes.push(id)
      return true
    }
  })
}

