import { City } from "interfaces/city";
import { API_URL } from "utils/getEnvData.ts";

import React from "react";

const CityCard: React.FC<City> = (props) => {
    const { name, image, longitude, latitude } = props;

    console.log(longitude, latitude);

    return (
        <div className=" w-full max-w-xs mx-auto">
            <div className="rounded overflow-hidden ">
                <div className="mb-2">
                    <img
                        className="w-full h-36 object-cover rounded-lg"
                        src={`${API_URL}/images/800_${image}`}
                        alt={name}
                    />
                </div>
                <div className="py-0.5">
                    <div className="text-black font-main font-bold">{name}</div>
                </div>
                <div className="py-0.5">
                    <div className="text-gray text-sm font-main">за {11} км</div>
                </div>
            </div>
        </div>
    );
};

export default CityCard;
