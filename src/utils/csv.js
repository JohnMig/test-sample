export const exportCSV = (data) => {
  return data.map((el) => {
    return {
      Id: el.id,
      Email: el.email,
      'First Name': el.first_name,
      'Last Name': el.last_name
    }
  })
}
