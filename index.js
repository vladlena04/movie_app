import { FilmsController } from "./src/controller/filmsController"
import { Router } from "./src/core/router/router"
import { FilmsService } from "./src/core/service/filmService"

const router = new Router()
const filmsService = new FilmsService()
const controller = new FilmsController(router, filmsService)
router.setController(controller)
controller.init(console.log('WORK'))