import { app } from './app'
const port = process.env.PORT || 3000
const url = process.env.BASE_URL || '0.0.0.0'
app.listen(port, url)
