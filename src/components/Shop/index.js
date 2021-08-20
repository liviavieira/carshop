import React, { Component } from 'react'
import * as S from './styles'

import Mustang429Boss from '../../assets/mustang-429-boss.jpg'
import LanciaAurelia from '../../assets/lancia-aurelia.jpg'
import CorvetteStingray from '../../assets/corvette-stingray.jpg'
import ImpalaSS from '../../assets/impala-ss.jpg'
import Skyliner from '../../assets/skyliner.jpg'
import Nissan300ZX from '../../assets/300zx.jpg'
import DeVille from '../../assets/deville.jpg'
import Bronco from '../../assets/bronco.jpg'
import Mustang from '../../assets/mustang.jpg'
import CJ7 from '../../assets/cj7.jpg'

export default class Shop extends Component {
    state = {
        cost: 0,
        myCart: [],
        carList: [
            {
                image: Mustang429Boss,
                year: 1969,
                model: 'Mustang 429 Boss',
                manufacturer: 'Ford',
                price: 300000
            },
            {
                image: LanciaAurelia,
                year: 1952,
                model: 'Lancia Aurelia',
                manufacturer: 'Lancia',
                price: 273000
            },
            {
                image: CorvetteStingray,
                year: 1969,
                model: 'Corvette Stingray',
                manufacturer: 'Chevrolet',
                price: 69900
            },
            {
                image: ImpalaSS,
                year: 1962,
                model: 'Impala SS',
                manufacturer: 'Chevrolet',
                price: 43900
            },
            {
                image: Skyliner,
                year: 1958,
                model: 'Skyliner',
                manufacturer: 'Ford',
                price: 46500
            },
            {
                image: Nissan300ZX,
                year: 1990,
                model: '300ZX',
                manufacturer: 'Nissan',
                price: 19900
            },
            {
                image: DeVille,
                year: 1959,
                model: 'DeVille',
                manufacturer: 'Cadillac',
                price: 59488
            },
            {
                image: Bronco,
                year: 1984,
                model: 'Bronco',
                manufacturer: 'Ford',
                price: 21000
            },
            {
                image: Mustang,
                year: 1966,
                model: 'Mustang',
                manufacturer: 'Ford',
                price: 134995
            },
            {
                image: CJ7,
                year: 1984,
                model: 'CJ7',
                manufacturer: 'Jeep',
                price: 29500
            }
        ]
    }

    handleAdd(e, i) {
        const { carList, myCart } = this.state
        
        const selectedCar = carList.filter((car, index) => index === i)
        const order = myCart.concat(selectedCar)
        const price = order
            .map(car => car.price)
            .reduce((prev, next) => prev + next)

        this.setState({
            myCart: order,
            cost: price
        })
    }

    handleRemove(e, i) {
        const { myCart, cost } = this.state
        
        const removeCar = myCart.filter((car, index) => index !== i)
        const price = myCart
            .map(car => car.price)
            .filter((car, index) => index !== i)
            .reduce((prev, next) => prev + next, 0);

        this.setState({
            myCart: removeCar,
            cost: price
        })
    }

    formatMoney = (value) => {
        return value.toLocaleString(
            'pt-br',
            { style: 'currency', currency: 'BRL' }
        )
    }

    render() {
        const { carList, myCart, cost } = this.state

        return (
            <S.Container>
                <S.Wrapper>
                    <S.Title>Car Shop!</S.Title>
                    <S.Shop>

                        <S.CarList>
                            {carList.map((car, index) => {
                                const disabled = myCart.find(compra => compra.model === car.model)

                                return  (
                                    <S.CarBox
                                        key={index} 
                                        disabled={disabled}
                                    >
                                        <S.Car>
                                            <S.CarModel>{car.model}</S.CarModel>
                                            <S.Add
                                                disabled={disabled}
                                                onClick={(e) => this.handleAdd(e, index)}
                                            >
                                                +
                                            </S.Add>
                                        </S.Car>
                                        <S.CarImg src={car.image}/>
                                        <S.CarDetails>
                                            <p>Ano: {car.year}</p>
                                            <p>Fabricante: {car.manufacturer}</p>
                                            <p>{this.formatMoney(car.price)}</p>
                                        </S.CarDetails>
                                    </S.CarBox>
                                )
                            }
                           )}
                        </S.CarList>

                        <S.OrderBox>
                            <S.ShoppingCart>
                                {myCart.map((car, index) => (
                                    <S.Order key={index}>
                                        <S.OrderCar>
                                            <p>{car.model}</p>
                                            <S.Remove onClick={(e) => this.handleRemove(e, index)}>-</S.Remove>
                                        </S.OrderCar>
                                        <S.OrderDetails>
                                            <p>Fabricante: {car.manufacturer}</p>
                                            <p>{this.formatMoney(car.price)}</p>
                                        </S.OrderDetails>
                                    </S.Order>
                                ))}
                            </S.ShoppingCart>
                            <S.OrderCost>
                                <p>Total</p>
                                <p>{this.formatMoney(cost)}</p>
                            </S.OrderCost>
                        </S.OrderBox>

                    </S.Shop>
                </S.Wrapper>
            </S.Container>
        )
    }
}