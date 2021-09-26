import React, { useEffect, useRef, useState } from 'react';
import CarHonda from './CarHonda';
import CarYamaha from './CarYamaha';

const CAR_DATA = {
    Honda: {
        Name: ' Honda',
        Price: 1000,
    },
    Yamaha: {
        Name: 'Yamaha',
        Price: 1500,
    },
};

function Car(props) {
    const carRef = useRef({});
    const [carHonda, setCarHonda] = useState({});

    /**
     * Nơi khởi tạo các dữ liệu. Chỉ chạy 1 lần duy nhất
     * Thường là từ lúc gọi API trả về dữ liệu.
     */
    useEffect(() => {
        carRef.current = CAR_DATA;
        setCarHonda(carRef?.current?.Honda);
    }, []);

    /**
     * Hàm cập nhật đối tượng ô tô honda
     * @param {object} honda Đối tượng thông tin ô tô Honda
     */
    const handleSetDataHonda = (honda) => {
        setCarHonda(honda);
        carRef.current = { ...carRef.current, Honda: honda };
    };

    /**
     * Hàm cập nhật ô tô yamaha
     * @param {object} yamaha Đối tượng ô tô yamaha
     */
    const handleSetDataYamaha = (yamaha) => {
        carRef.current = { ...carRef.current, Yamaha: yamaha };
        console.info('handleSetDataYamaha: ', carRef.current?.Yamaha);
    };

    console.info('Car Render: --------------------------------');
    console.info(carRef.current?.Honda);
    console.info(carRef.current?.Yamaha);

    const logDataNow = () => {
        console.info('Car NOW: --------------------------------');
        console.info(carRef.current?.Honda);
        console.info(carRef.current?.Yamaha);
    };

    return (
        <div>
            <div>Example 1</div>
            <CarHonda data={carHonda} setData={handleSetDataHonda} />
            <CarYamaha data={carRef.current?.Yamaha} setData={handleSetDataYamaha} />

            <br />
            <br />
            <br />
            <button onClick={logDataNow}> Click log data Now</button>
        </div>
    );
}

Car.propTypes = {};

export default Car;
