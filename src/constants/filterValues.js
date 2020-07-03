export const ragius = () => {
  const ragiusList = []
  for (let km = 10; km <= 100; km = km + 10) {
    ragiusList.push({ ID: km, Name: `${km} Kms` })
  }
  return ragiusList
}

export const year = () => {
  const yearList = []
  for (let year = 2000; year <= 2020; year++) {
    yearList.push({ ID: year, Name: year })
  }
  return yearList
}

export const price = [
  { ID: 1, Name: 'Até 10.000,00' },
  { ID: 2, Name: 'Até 20.000,00' },
  { ID: 3, Name: 'Até 30.000,00' },
  { ID: 4, Name: 'Até 40.000,00' },
  { ID: 5, Name: 'Até 50.000,00' },
  { ID: 6, Name: 'Até 60.000,00' },
  { ID: 7, Name: 'Até 70.000,00' },
  { ID: 8, Name: 'Até 80.000,00' },
  { ID: 9, Name: 'Até 90.000,00' }
]
