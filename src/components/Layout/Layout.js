import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import CoffeeBuilder from '../CoffeeBuilder/CoffeeBuilder';
import CoffeeItems from '../CoffeeItems/CoffeeItems';

const Layout = () => {
    return (<Auxiliary>
        <CoffeeItems/>
        <CoffeeBuilder/>
        <div>Menu Bar</div>
    </Auxiliary>
    );
}

export default Layout;