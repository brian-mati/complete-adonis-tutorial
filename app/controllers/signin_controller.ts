import type { HttpContext } from '@adonisjs/core/http'

export default class SigninsController {
  async view({ view }: HttpContext) {
    return view.render('auth/signin')
  }

  async store({}: HttpContext) {}

  async update({}: HttpContext) {}

  async delete({}: HttpContext) {}
}
