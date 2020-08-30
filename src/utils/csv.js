export const exportCSV = (data) => {
  return data.map((el) => {
    return {
      Id: el.id,
      Name: el.name,
      Year: el.year,
      Color: el.color
    }
  })
}
