import React from 'react'
import "./main.css"

import Header from '../../partials/Header/Header'
import MainBody from '../../partials/MainBody/Body'

const Main: React.FC = () => {
    return (
        <div className='backdrop'>
            <Header />
            <MainBody />
        </div>
    )
}
export default Main