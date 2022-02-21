import * as React from "react";
import './style.css';
import CustomCheckBox from "../customControls/Checkbox/CustomCheckBox";

export default class Header extends React.Component {
    render() {
        return (
            <div className = 'header'>
                <div className='logo-line' >
                    <img src='img/logo.svg' className='logo'  alt = 'Logo is not loaded' />
                    <div className='authLink header-font' >Авторизация</div>
                </div>
                <div className = 'navigation' >
                    <ul className='navbar-list header-font'>
                        <li className='navbar-item navbar-item-selected' >Памятник</li>
                        <li className='navbar-item' >Цветник</li>
                        <li className='navbar-item' >Фундамент</li>
                        <li className='navbar-item' >Ограда</li>
                        <li className='navbar-item' >Покрытие</li>
                        <li className='navbar-item' >Столы, лавки</li>
                        <li className='navbar-item' >Декорации</li>
                    </ul>

                    <CustomCheckBox
                        id='module-system'
                        name='module-system'
                        value='true'
                        callback={(checked) => {
                            console.log(checked ? 'модульная' : 'не модульная' )
                        }}
                    >Модульная система</CustomCheckBox>
                </div>
            </div>
        )
    }
}
