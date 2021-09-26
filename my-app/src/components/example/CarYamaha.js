import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

CarYamaha.propTypes = {
    data: PropTypes.shape({
        Name: PropTypes.string,
        Price: PropTypes.number,
    }).isRequired,
    setData: PropTypes.func,
};

function CarYamaha(props) {
    const { data, setData } = props;

    const [unit, setUnit] = useState(1);
    const [carYamaha, setCarYamaha] = useState({});

    useEffect(() => {
        setCarYamaha(data);
    }, [data]);

    const handleOnclickButton = () => {
        if (setData) {
            let newPrice = carYamaha?.Price + unit;
            let newData = { ...data, Price: newPrice };
            setCarYamaha(newData);

            setData && setData(newData);
        }
    };

    return (
        <div>
            <h4>Car Yamaha</h4>
            <p>
                Name: {carYamaha?.Name} ; Price: {carYamaha?.Price}
            </p>
            <div>
                <button onClick={handleOnclickButton}>Tăng giá thêm Unit đơn vị</button>
                <input
                    type='number'
                    value={unit}
                    onChange={(event) => {
                        let value = parseInt(event.target.value);
                        if (value || value === 0) {
                            setUnit(value);
                        }
                    }}
                ></input>
            </div>
        </div>
    );
}

export default CarYamaha;
