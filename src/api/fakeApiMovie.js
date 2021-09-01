//example api request: replace with your API request here in folder API

export const getMovie = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        { id: 1, title: 'Kingdom', thumbnail: '', status: '' },
        { id: 2, name: 'Nadia' },
        { id: 3, name: 'Handy' },
        { id: 4, name: 'Fakara' }
      ]
    })
  } catch (e) {
    return Promise.reject(e)
  }
}

module.exports = {
  getUser
}
