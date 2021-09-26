import React, { useState } from 'react';
import PropTypes from 'prop-types';

CarHonda.propTypes = {
    data: PropTypes.shape({
        Name: PropTypes.string,
        Price: PropTypes.number,
    }).isRequired,
    setData: PropTypes.func,
};

function CarHonda(props) {
    const { data, setData } = props;
    const { Name: nameCar, Price: priceCar } = data;

    const [unit, setUnit] = useState(1);

    const handleOnclickButton = () => {
        if (setData) {
            let newPrice = priceCar + unit;
            let newData = { ...data, Price: newPrice };
            setData(newData);
        }
    };

    return (
        <div>
            <h4>Car Honda</h4>
            <p>
                Name: {nameCar} ; Price: {priceCar}
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

export default CarHonda;
