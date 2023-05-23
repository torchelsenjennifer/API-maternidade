import { Router } from "express"
import { bebeCreate, bebeIndex } from "./controllers/babyController.js"

const router = Router()

router.get('/bebe', bebeIndex)
	  .post('/bebe', bebeCreate)

export default router