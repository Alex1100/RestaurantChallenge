import React, { useEffect, useState } from 'react';
import {
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import * as axios from 'axios';
import { NavBar } from './NavBar';
import { Section } from './Section';
import { CategoriesList } from './CategoriesList';
import { LoadingPage } from './LoadingPage';

const Routing = (props) => {
    const [menuOptions, setMenuOptions] = useState(undefined);

    const fetchCategories = async () => {
        try {
            const {data: { options }} = await axios.get('/api/menu');
            const sectionKeys = options.reduce((sectionHashMap, next) => {
                sectionHashMap[next._key] = {}; 
                return sectionHashMap;
            }, {});

            const sections = await axios.get('/api/sections');

            sections.data.forEach(section => {
                if (section && section._id && section.name && section.carouselImage) {
                    sectionKeys[section._id] = section;
                }
            });

            setMenuOptions(sectionKeys)
        } catch (e) {
            console.log('ERROR FETCHING CATEGORIES: ', e.message);
        }
    };

    useEffect(() => {
        if (menuOptions === undefined) {
            fetchCategories();
        }

        return () => {
            setMenuOptions({});
        };
    }, []);
    

    if (menuOptions === undefined) {
        return <LoadingPage />
    }

    
    return (
        <>
            <NavBar 
                menuOptions={menuOptions} 
                history={props.history} 
            />
            <Switch>
                <Route exact path={`/`}>
                    <>
                        <CategoriesList 
                            categoryOptions={menuOptions} 
                            history={props.history} 
                        />
                    </>
                </Route>
                <Route 
                    path={`/section/:id`}
                    component={({ match }) => {
                        return (
                            <Section 
                                sectionId={match.params.id}
                                categoryOptions={menuOptions} 
                                history={props.history}
                            />
                        );
                    }}
                />
            </Switch>
        </>
    )
};

export const Router = withRouter(Routing);