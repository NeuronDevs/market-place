import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Swal from 'sweetalert2';

export const Order = () => {

    const [cartSession, setCartSession] = useState([]);
    const [total, setTotal] = useState(0);



    useEffect(() => {


        function getCart() {
            let cartSession = JSON.parse(localStorage.getItem('cart'));
            setCartSession(cartSession);
        }

        const calculateTotalCartIntern = () => {
            getCart();
            let totalIntern = 0;
            cartSession.forEach((x) => {
                totalIntern = totalIntern + x.total;
            });
            setTotal(totalIntern);
        }

        setTimeout(() => {

            getCart();
            calculateTotalCartIntern();

        }, 500)

    });

    function saveOrder(body) {
        const options = {
            method: 'POST',
            url: 'http://localhost:4000/api/order/new',
            withCredentials: true,
            data: body
        };

        Axios.request(options).then(function (response) {
            console.log(response);
            if (response.data.success) {
                window.location.replace('/');
                // 👇️ clear all input values in the form
                setDirection('');
                setPhone('');
                setCity('Medellín')
                setCreditCard('')
            }
        }).catch(function (error) {
            Swal.fire(
                'Error!',
                "Error no se pudo procesar el pago.",
                'error'
            )
        });
    };

    const [direction, setDirection] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('Medellín');
    const [creditCard, setCreditCard] = useState('');

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();

        const bodyOrder = {
            "orderInfo": {
                "direction": direction,
                "city": city,
                "phone": phone,
                "deparment": direction
            },
            "user": "",
            "items": cartSession,
            "itemsPrice": (total / 1.19),
            "taxPrice": 19,
            "shippingPrice": 0,
            "totalPrice": total,
            "paymentInfo": {
                "id": creditCard,
                "state": "SUCCESS"
            },
            "dateInfo": new Date().toISOString(),
            "shippingDate": new Date().toISOString()
        }

        saveOrder(bodyOrder);



    };

    return (
        <div className="container">
            <div className="row">
                <div className="col mt-5">
                    <h1>Ingrese información del pedido</h1>
                    <form onSubmit={handleSubmit}>

                        <div className="form-floating mb-3">
                            <input type="text" required className="form-control" id="direction" onChange={event => setDirection(event.target.value)} placeholder="Calle 52b # 388 apto 0129" value={direction} />
                            <label htmlFor="direction">Dirección</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="phone" required className="form-control" id="phone" onChange={event => setPhone(event.target.value)} placeholder="+573226227180" value={phone} />
                            <label htmlFor="phone">Teléfono - Celular</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" required className="form-control" id="city" onChange={event => setCity(event.target.value)} placeholder="Medellín" value={city} />
                            <label htmlFor="city">Ciudad</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="text" required className="form-control" id="creditCard" onChange={event => setCreditCard(event.target.value)} placeholder="+573226227180" value={creditCard} />
                            <label htmlFor="creditCard">Tarjeta de crédito</label>
                        </div>

                        <p><strong>Total pedido</strong><span>{total}</span></p>

                        <button className="btn btn-primary" type="submit">Confirmar compra</button>
                    </form>
                </div >
            </div >
        </div>
    )
}