const boolMap = {
  true: 1,
  false: 0
}
export const applyFilter = (data, search, page, pageSize,  nameSort, favSort) => {
  data = applySort(data, nameSort, favSort)
  if (search && search.trim()) {
      data = data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()))
  }
  data = data.slice(page * pageSize, (page * pageSize) + pageSize)
  return data
}

export const applySort = (data, nameSort, favSort) => {
  if (favSort){
      return data.sort((a,b) => boolMap[b.isFav] - boolMap[a.isFav])
  }else{
      return data.sort((a,b) => boolMap[a.isFav] - boolMap[b.isFav])
  }
}
