import './Logo.css';

const Logo = () => {
    return (
        <a href='/' className='logo'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='45.651'
                height='43.416'
                viewBox='0 0 45.651 43.416'>
                <g transform='translate(-1.175)'>
                    <g fill='none' strokeMiterlimit='10'>
                        <path
                            d='M24,0,40.3,11.845l6.522,4.738L38.107,43.416H9.893L1.175,16.584Z'
                            stroke='none'
                        />
                        <path
                            d='M 23.99999809265137 6.180351257324219 L 7.052497863769531 18.49341773986816 L 13.5258674621582 38.41640472412109 L 34.47411346435547 38.41640472412109 L 40.94748306274414 18.49341773986816 L 23.99999809265137 6.180351257324219 M 24 3.814697265625e-06 L 46.82534408569336 16.58358573913574 L 38.10683441162109 43.41640472412109 L 9.893146514892578 43.41640472412109 L 1.174636840820312 16.58358573913574 L 24 3.814697265625e-06 Z'
                            stroke='none'
                            fill='#ef6d58'
                        />
                    </g>
                    <path
                        d='M9.5,0l9.035,6.564L15.084,17.186H3.916L.465,6.564Z'
                        transform='translate(14 14)'
                        fill='#ef6d58'
                    />
                </g>
            </svg>
            <span className='logo__title'>Agency</span>
        </a>
    );
};

export default Logo;
