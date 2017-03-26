import ajax from '../Fetch'

const isLogin = {
  islogin: false,
  async signin(user, pwd, cb) {
    let res = await ajax('http://localhost:3001/login', {
      method: 'POST',
      body: {
        user: user,
        pwd: pwd
      }
    })
    console.log(res)
    this.islogin = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.islogin = false
    setTimeout(cb, 100)
  }
}
export default isLogin