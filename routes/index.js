import { Router } from 'express'
import * as apiCtrl from '../controllers/api.js'

const router = Router()

// GET localhost:3002
router.post('/api', apiCtrl.bookSearch)

export { router }
