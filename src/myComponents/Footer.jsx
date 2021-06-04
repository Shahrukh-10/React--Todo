import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: 'relative',
        top: '100vh',
        width: '100%',
        border: '2px solid red',
    }
    return (
        <div className="bg-dark text-light py-3">
            <footerStyle />
            <p className="text-center">
                Copyright &copy; MyTodoList.com
        </p>

        </div>
    )
}
