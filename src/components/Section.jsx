import React, { useState, useEffect } from 'react';
import * as axios from 'axios';

import { ItemsList } from './ItemsList';
import { LoadingPage } from './LoadingPage';

export const Section = (props) => {
    const [sectionItems, setSectionItems] = useState(undefined);

    const fetchCategories = async () => {
        try {
            const { data } = await axios.get('/api/items');
            const _id = props.sectionId;
            const itemKeys = props.categoryOptions[_id].options.reduce((keysArr, item) => {
                if (item && item._ref) {
                    keysArr.push(item._ref);
                    return keysArr;
                }
            }, []);
            
            const items = data.reduce((itemsHashMap, item) => {
                if (itemKeys.includes(item._id)) {
                    itemsHashMap[item._id] = item;
                }
                return itemsHashMap;
            }, {});

            setSectionItems(items);
        } catch (e) {
            console.log('ERROR FETCHING CATEGORIES: ', e.message);
        }
    };

    useEffect(() => {
        fetchCategories();
        return () => {
            setSectionItems(undefined);
        };
    }, []);

    if (sectionItems === undefined) {
        return <LoadingPage />
    }

    return (
        <>
            <ItemsList sectionItems={sectionItems} />
        </>
    );
};