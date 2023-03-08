import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MonoTypeEffect({ type1 }) {
    const [infoType1, setInfoType1] = useState([]);
    const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
    const [halfDamageFrom, setHalfDamageFrom] = useState([]);
    const [noDamageFrom, setNoDamageFrom] = useState([]);

    useEffect(() => {
        const fetchTypeInfo = async () => {
            try {
                const response1 = await axios.get(`https://pokeapi.co/api/v2/type/${type1}`);
                const data1 = response1.data.damage_relations;
                setInfoType1(data1);

            } catch (error) {
                console.log(error);
            }
        };

        fetchTypeInfo();
    }, [type1]);

    useEffect(() => {
        const damageHandle = () => {

            const newDoubleDamageFromType1 = infoType1.double_damage_from.map(relation => relation.name);
            const newHalfDamageFromType1 = infoType1.half_damage_from.map(relation => relation.name);
            const newNoDamageFromType1 = infoType1.no_damage_from.map(relation => relation.name);


            setDoubleDamageFrom(newDoubleDamageFromType1);

            setHalfDamageFrom(newHalfDamageFromType1);
            setNoDamageFrom(newNoDamageFromType1);

        }; if (infoType1.double_damage_from) {
            damageHandle();
        }
    }, [infoType1]);



    function typeShow(typeArray) {
        return typeArray.map((weak) => {
            let typeName = `/types/${weak}.png`;
            return <img src={typeName} alt={weak} width="100px" />;
        });
    }

    return (
        <>
            
            {(noDamageFrom.length !== 0) && <div>0X: <p>{typeShow(noDamageFrom)}</p></div>}
            <div>2X: <p>{typeShow(doubleDamageFrom)}</p></div>
            <div>1/2: <p>{typeShow(halfDamageFrom)}</p></div>
        </>
    );
}
