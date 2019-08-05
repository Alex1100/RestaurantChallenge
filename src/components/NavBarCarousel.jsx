import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { formatImgUrl } from '../utils';

export const NavBarCarousel = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('Home');
    const handleSizeUpdate = () => {
        const slider = document.getElementsByClassName('alice-carousel')[0];
        slider.style.width = window.innerWidth > 350 ? '70%' : '40%';
        slider.style.width = window.innerWidth > 375 ? slider.style.width : '45%';
        slider.style.marginTop = '3%';
    }

    useEffect(() => {
        handleSizeUpdate();

        return () => {
            setSelectedCategory('Home');
        };
    }, []);

    const handleOnDragStart = e => e.preventDefault();

    const handleCategorySelection = (section) => {
        const category = (
            section 
            && section.name 
            && section.name.en
            ) || section
            ;

        setSelectedCategory(category);

        if (category === 'Home') {
            props.history.push('/');
        } else if (category !== 'Home' && props.history.location.pathname.includes('section')) {
            props.history.push(section._id);
        } else {
            props.history.push('section/' + section._id);
        }
    } 

    return (
        <>
            <div 
                onClick={() => handleCategorySelection('Home')} 
                style={{
                    width: '17%', 
                    minWidth: '120px', 
                    marginRight: '2%', 
                    height: 'auto', 
                    marginTop: '3%'
                }}
            >
                <img 
                    src={'https://visitcamarillo.com/wp-content/uploads/2016/08/burger-king-logo.jpg'} 
                    style={{width: '100%', height: '100px'}}
                    alt={'burger king logo'}
                />
                <p className={`text-red ${selectedCategory === 'Home' ? 'text-active' : ''} text-center`}>Home</p>
            </div>
            <AliceCarousel
                dotsDisabled={true}
                onResized={handleSizeUpdate}
                mouseDragEnabled
                infinite={true}
                swipeDisabled={false}
                keysControlDisabled={true}
                buttonsDisabled={true}
                responsive={{ 
                    0: { items: 3 },
                    320: {items: 3 },
                    370: { items: 3 },
                    1024: { items: 6 },
                }}
                style={{
                    height: '200px',
                    width: '90%',
                    margin: 'auto',
                    marginLeft: '5%',
                }} 
            >
                {Object.values(props.menuOptions)
                    .filter(menuOption => menuOption && menuOption.name && menuOption.name.en)
                    .map((menuOption) => {
                        const imgPath = formatImgUrl(menuOption.carouselImage.asset._ref);

                        return (
                            <>
                                <div 
                                    key={`${menuOption._id}_carousel`} 
                                    style={{marginRight: '10px'}} 
                                    onClick={() => handleCategorySelection(menuOption)}
                                >
                                    <img 
                                        onDragStart={handleOnDragStart} 
                                        style={{width: '80%', height: '100px', marginTop: '20%'}} 
                                        src={`${process.env.PUBLIC_URL}/images/${imgPath}`}
                                        alt={`${menuOption.name.en}`}
                                    />
                                    <p 
                                        className={
                                            `
                                                text-red 
                                                text-slider 
                                                ${selectedCategory === menuOption.name.en 
                                                    ? 'text-active' 
                                                    : ''
                                                }
                                            `
                                        }
                                    >
                                        {menuOption.name.en}
                                    </p>
                                </div>
                            </>
                        );
                    }
                )}
            </AliceCarousel>
        </>
    );
};