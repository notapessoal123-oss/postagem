const express = require('express')
const path = require('node:path')
const router = require('../src/router/router.js')

const app = express()
const PORT = 3001

// Configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../src/views'))

// Configuração de arquivos estáticos
app.use(express.static(path.join(__dirname, '../src/assets')))

// Configuração para ler dados da requisição
app.use(express.urlencoded({ extended: true }))

// Rotas da aplicação
app.use(router)

app.listen(PORT, () => console.log(`Servidor iniciado!\nRodando em http://localhost:${PORT} \nPrecione Ctrl+C para encerrar o servidor web.`))