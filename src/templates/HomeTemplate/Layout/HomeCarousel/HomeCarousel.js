import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getCarouselAction } from '../../../../redux/actions/CarouselActions';
import './HomeCarousel.css';
import BookingTab from '../../../../components/BookingTab/BookingTab';

const contentStyle = {
    height: '750px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
};

export default function HomeCarousel(props) {

    const { arrImg } = useSelector(state => state.CarouselReducer)

    const dispatch = useDispatch();

    //Sẽ tự kích hoạt khi component load ra 
    useEffect(() => {

        //1 action = {type:'',data}
        //2 (phải cài middleware): callBackFunction (dispatch)

        // const action = getCarouselAction(1);

        dispatch(getCarouselAction());



    }, [])


    const renderImg = () => {
        return arrImg.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}>
                    <img src={item.hinhAnh} className="opacity-0" alt={item.hinhAnh} />
                </div>
            </div>
        })
    }

    return (
        <div>
            <Carousel effect='fade' style={{ width: '100%', padding: 0, margin: 0 }} >
                {renderImg()}
            </Carousel>
            <BookingTab />
        </div>
    )
}
