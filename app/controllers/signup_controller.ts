import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async view({ view }: HttpContext) {
    return view.render('auth/signup')
  }

  async store({}: HttpContext) {}
}
