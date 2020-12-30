import React from 'react';
import { Arrow } from './styles';

import ArrowIcon from '../../assets/images/Icons/arrowBack.svg'

function ArrowBtn() {
    return(
        <Arrow onClick={ () => window.history.back() }>
            <img src={ArrowIcon} alt=""/>
        </Arrow>
    )
}

export default ArrowBtn;