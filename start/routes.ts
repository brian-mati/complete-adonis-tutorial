/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const SignupController = () => import('#controllers/signup_controller')

router.on('/').render('pages/home')

router.group(() => {
  router.get('signup', [SignupController, 'view'])
  router.post('signup', [SignupController, 'store'])
})
