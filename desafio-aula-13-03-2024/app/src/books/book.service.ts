import bookModel from './book.schema'

export class BookService {

    async create(book: any) {
        const createdBook = bookModel.create(book)

        return createdBook
    }
    async findById(id: string) {
        const book = await bookModel.findById(id)
        return book
    }

    async update(id: string, book: any) {
        const updatedBook = await bookModel.findByIdAndUpdate(id, book, { new: true })
        return updatedBook
    }

    async delete(id: string) {
        await bookModel.findByIdAndDelete(id)
    }
}
