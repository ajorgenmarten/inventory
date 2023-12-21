import { Input } from "../../components/input"

export const CreateEntryPage = () => {
    return (
        <main>
            <div className="hidden md:grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2 items-end p-5">
                <ItemsForm />
            </div>
            <input type="checkbox" id="modal-add" className="modal-toggle peer" />
            <div className="modal md:hidden" role="dialog">
                <div className="modal-box max-w-5xl">
                    <div className="flex flex-nowrap items-center">
                        <h3 className="text-lg font-bold truncate grow">Agregar producto</h3>
                        <label htmlFor="modal-add" className="btn w-4 min-h-9 h-9"><i className="bi bi-plus-lg rotate-45"></i></label>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2 items-end">
                        <ItemsForm />
                    </div>
                    <div className="modal-action">
                        <label htmlFor="modal-add" className="btn">Cerrar</label>
                    </div>
                </div>
            </div>
            <label className="btn-float" htmlFor="modal-add"><i className="bi bi-plus-lg text-base-100"></i></label>
        </main>
    )
}

const ItemsForm = () => {
    return (
        <>
            <Input label="Nombre del Producto" placeholder="Ej: Carne de cerdo" />
            <Input label="Cantidad" min="0" type="number" placeholder="Ej: 400" step="0.000001" />
            <Input label="Unidad de medida" placeholder="Ej: Kilogramo" />
            <Input label="Costo unitario" min="0" type="number" placeholder="Ej: 2000" step="0.000001" />
            <Input label="Precio de venta" min="0" type="number" placeholder="Ej: 2500" step="0.000001" />
            <Input label="Costo total" min="0" type="number" step="0.000001" disabled />
            <Input label="Ganancia prevista" min="0" type="number" step="0.000001" disabled />
            <button className="btn btn-success mt-2 text-base-100">Agregar</button>
        </>
    )
}