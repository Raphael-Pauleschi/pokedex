import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';

export default function TypeEffect({ type1, type2, teraType }) {
    const [infoType1, setInfoType1] = useState([]);
    const [infoType2, setInfoType2] = useState([]);
    const [quadrupleDamageFrom, setQuadrupleDamageFrom] = useState([]);
    const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
    const [halfDamageFrom, setHalfDamageFrom] = useState([]);
    const [quarterDamageFrom, setQuarterDamageFrom] = useState([]);
    const [noDamageFrom, setNoDamageFrom] = useState([]);

    useEffect(() => {
        const fetchTypeInfo = async () => {
            try {
                const response1 = await axios.get(`https://pokeapi.co/api/v2/type/${type1}`);
                const data1 = response1.data.damage_relations;
                setInfoType1(data1);

                if (type2) {
                    const response2 = await axios.get(`https://pokeapi.co/api/v2/type/${type2}`);
                    const data2 = response2.data.damage_relations;
                    setInfoType2(data2);

                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchTypeInfo();
    }, [type1, type2]);

    useEffect(() => {
        const damageHandle = () => {
            console.log(infoType1);
            console.log(infoType2);
            const newDoubleDamageFromType1 = infoType1.double_damage_from.map(relation => relation.name);
            const newHalfDamageFromType1 = infoType1.half_damage_from.map(relation => relation.name);
            const newNoDamageFromType1 = infoType1.no_damage_from.map(relation => relation.name);

            if (!infoType2) {
                setDoubleDamageFrom(newDoubleDamageFromType1);
                setHalfDamageFrom(newHalfDamageFromType1);
                setNoDamageFrom(newNoDamageFromType1);
            } else {
                const newDoubleDamageFromType2 = infoType2.double_damage_from.map(relation => relation.name);
                const newHalfDamageFromType2 = infoType2.half_damage_from.map(relation => relation.name);
                const newNoDamageFromType2 = infoType2.no_damage_from.map(relation => relation.name);

                const newQuadrupleDamageFrom = newDoubleDamageFromType1.filter(
                    relation1 => newDoubleDamageFromType2.some(relation2 => relation1 === relation2)
                );
                setQuadrupleDamageFrom(newQuadrupleDamageFrom);
                console.log(quadrupleDamageFrom);

                setDoubleDamageFrom(
                    newDoubleDamageFromType1.filter(
                        relation1 => !newDoubleDamageFromType2.some(relation2 => relation1 === relation2) &&
                            !newHalfDamageFromType2.includes(relation1) &&
                            !quadrupleDamageFrom.includes(relation1)
                    ).concat(
                        newDoubleDamageFromType2.filter(
                            relation2 => !newDoubleDamageFromType1.some(relation1 => relation1 === relation2) &&
                                !newHalfDamageFromType1.includes(relation2) &&
                                !quadrupleDamageFrom.includes(relation2)
                        )
                    )
                );
                const newQuarterDamageFrom = newHalfDamageFromType1.filter(
                    relation1 => newHalfDamageFromType2.some(relation2 => relation1 === relation2)
                );
                setQuarterDamageFrom(newQuarterDamageFrom);
                console.log(quarterDamageFrom);

                setHalfDamageFrom(
                    newHalfDamageFromType1.filter(
                        relation1 => !newHalfDamageFromType2.some(relation2 => relation1 === relation2) &&
                            !newDoubleDamageFromType2.includes(relation1) &&
                            !quarterDamageFrom.includes(relation1)
                    ).concat(
                        newHalfDamageFromType2.filter(
                            relation2 => !newHalfDamageFromType1.some(relation1 => relation1 === relation2) &&
                                !newDoubleDamageFromType1.includes(relation2) &&
                                !quarterDamageFrom.includes(relation2)
                        )
                    )
                );

                setNoDamageFrom(
                    newNoDamageFromType1.filter(
                        relation1 => !newNoDamageFromType2.some(relation2 => relation1 === relation2)
                    ).concat(
                        newNoDamageFromType2.filter(
                            relation2 => !newNoDamageFromType1.some(relation1 => relation1 === relation2)
                        )
                    )
                );
            }
        };

        if (infoType1.double_damage_from && (!infoType2 || infoType2.double_damage_from)) {
            damageHandle();
        }
    }, [infoType1, infoType2]);

    return (
        <Card
            sx={{ maxWidth: 1000 }}
            style={{ marginLeft: '60px', marginTop: '30px' }}
        >
            <CardContent sx={{ backgroundColor: 'pink' }}>
                <div>2X from: {JSON.stringify(doubleDamageFrom)}</div>
                <div>1/2X from: {JSON.stringify(halfDamageFrom)}</div>
                {quadrupleDamageFrom && <div>4X from: {JSON.stringify(quadrupleDamageFrom)}</div>}
                {quarterDamageFrom && <div>1/4X from: {JSON.stringify(quarterDamageFrom)}</div>}
                {noDamageFrom && <div>0X from: {JSON.stringify(noDamageFrom)}</div>}

            </CardContent>
        </Card>
    );
}
