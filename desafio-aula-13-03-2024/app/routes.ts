import { Router, Request, Response } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()

routes.get('/health-check', (req: Request, res: Response) => res.sendStatus(200))

routes.post('/books', async (req: Request, res: Response) => {
    try {
        const book = await bookController.create(req, res)
        res.status(201).json(book)
    } catch (error: any) { // Especificando o tipo como 'any'
        res.status(400).json({ message: error.message })
    }
})

routes.get('/books/:id', async (req: Request, res: Response) => {
    try {
        const book = await bookController.findById(req, res)
        if (!book) {
            res.status(404).json({ message: "Book not found" })
            return
        }
        res.status(200).json(book)
    } catch (error: any) { // Especificando o tipo como 'any'
        res.status(500).json({ message: error.message })
    }
})

routes.put('/books/:id', async (req: Request, res: Response) => {
    try {
        const book = await bookController.update(req, res)
        if (!book) {
            res.status(404).json({ message: "Book not found" })
            return
        }
        res.status(200).json(book)
    } catch (error: any) { // Especificando o tipo como 'any'
        res.status(400).json({ message: error.message })
    }
})

routes.delete('/books/:id', async (req: Request, res: Response) => {
    try {
        await bookController.delete(req, res)
        res.status(204).send()
    } catch (error: any) { // Especificando o tipo como 'any'
        res.status(400).json({ message: error.message })
    }
})

export { routes }
