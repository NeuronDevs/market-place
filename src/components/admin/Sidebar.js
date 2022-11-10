import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to="/admin/dashboard"><i className="fa fa-tachometer"></i> Administración</Link>
                    </li>

                    <li>
                        <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Productos</a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to="/administrar_productos"><i className="fa fa-clipboard"></i> Todos</Link>
                            </li>

                            <li>
                                <Link to="/nuevo_producto"><i className="fa fa-plus"></i> Crear</Link>
                            </li>
                        </ul>
                    </li>
                    {/*Botones de Pedidos*/}
                    <li>
                        <Link to="/ventas"><i className="fa fa-shopping-basket"></i> Pedidos</Link>
                    </li>
                    {/*Botones de Usuarios*/}
                    <li>
                        <Link to="/admin/users"><i className="fa fa-users"></i> Usuarios</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Sidebar