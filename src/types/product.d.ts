interface Product {
    name: string
    quantity: number
    unity: Unity
    cost: number
    salePrice: number
    category: Category
}

type Unity = {
    _id: string
    name: string
    description?: string
}

type Category = Unity