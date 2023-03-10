export const storage = {
    getToken: () => {
      return localStorage.token
    },
    setToken: (token: string) => {
      localStorage.token = token
    }
    // setUserId: (id: string) => {
    //   localStorage.userId = id
    // }
  }
