import React from 'react'

//Referência do Menu Item
import MenuItem from './menuItem'

//Arvore do Menu, importante para subtópicos
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'> 
            <MenuItem path='#billingCycles' label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
)