import Rx from 'rxjs-es'

const isLogin = {
  islogin: false,
  signin(cb) {
    this.islogin = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.islogin = false
    setTimeout(cb, 100)
  }
}
export default isLogin