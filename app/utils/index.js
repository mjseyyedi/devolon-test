import persian from 'persianjs'

export const toEnglish = val =>
  persian(val)
    .toEnglishNumber()
    .toString()

export const toPersian = val =>
  persian(val)
    .englishNumber()
    .toString()

export const urlParams = (
  params,
  key,
) => {
  const parameters = new URLSearchParams(
    params,
  )
  return parameters.get(
    key,
  )
}
