import { Request, Response } from 'express'
import { BookService } from './book.service'

class BookController {
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async findById(req: Request, res: Response) {
        const book = await new BookService().findById(req.params.id)
        return res.json(book)
    }

    async update(req: Request, res: Response) {
        const book = await new BookService().update(req.params.id, req.body)
        return res.json(book)
    }

    async delete(req: Request, res: Response) {
        await new BookService().delete(req.params.id)
        return res.status(204).send()
    }
}

export default new BookController()