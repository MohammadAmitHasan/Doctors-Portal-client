import React from 'react';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse lg:-mt-20">
                <img alt='Banner' src={chair} className="lg:max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;