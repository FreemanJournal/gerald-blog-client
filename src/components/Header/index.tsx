import React, { FunctionComponent,ReactNode } from 'react'
import { useNavigate } from 'react-router-dom';
export interface IHeaderProps {
    children?: ReactNode;
    height?: string;
    image?: string;
    title: string;
    headline: string;
}
const Header:FunctionComponent<IHeaderProps> = props => {
    const { children, height, image, headline, title } = props;
    const navigate = useNavigate();
    return (
        <>
            <div className="bg-emerald-400 headerShadow h-48 flex items-center">
                <div className="container text-center">
                    <h1 className='text-white font-bold text-3xl md:text-6xl drop-shadow-md select-none' onClick={() => navigate('/')}>{title}</h1>
                    <p className='text-white md:text-2xl my-5 tracking-wider select-none'>{headline}</p>
                </div>
            </div>

        </>
    )
}

export default Header;
