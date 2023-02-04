export const getTimeTomorrow = () => {
  const currentDate = new Date()
  currentDate.setHours(currentDate.getHours() + 24)
  return currentDate.getTime()
}
