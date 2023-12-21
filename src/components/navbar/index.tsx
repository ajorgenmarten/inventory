export const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Inventario</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Entradas</a></li>
                    <li>
                        <details>
                            <summary>
                                Opciones
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none w-48 right-0">
                                <li><a>Agregar unidad de medida</a></li>
                                <li><a>Agregar categoria</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}