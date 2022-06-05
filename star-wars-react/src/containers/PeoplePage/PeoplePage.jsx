import React, { useEffect, useState } from 'react'
import { withErrorApi } from '../../hocs/withErrorApi';
import {getApiData} from '../../utils/network';
import {API_PEOPLE} from '../../constants/api';
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData';
import PeopleList from '../../components/PeoplePage/PeopleList';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';

function PeoplePage(props) {
    const [people, setPeople] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [counterPage, setCounterPage] = useState(1);
    const [maxPages, setMaxPages] = useState(5);


    const query =useQueryParams();
    const queryPage =  query.get('page');




    // debugger
    const getResource = async (url) => {
        const result = await getApiData(url);
            console.log(result);

            if (result) {
                // debugger
                const peopleList = result.results.map((elem)=>{

                    const id = getPeopleId(elem.url)
                    const img = getPeopleImage(id)

                    
                    return{
                        id: id,
                        name: elem.name,
                        url: elem.url,
                        img: img
                    }
                })       
                
                setPeople(peopleList)
                setPrevPage(result.previous)
                setNextPage(result.next)
                setMaxPages(result.count)
                props.setErrorApi(false) // comes from hoc props
                
            } else {
                props.setErrorApi(true)
            }
    }

    useEffect(() => {
        getResource(API_PEOPLE+queryPage);
        setCounterPage(Number(queryPage))
    },[queryPage])
    

    let highMaxPages = Math.ceil(maxPages / 10);

    return (
        <>
            <PeopleNavigation 
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
                maxPages={highMaxPages}
            />
            {people && <PeopleList people={people} />}
        </>
    )
}

export default withErrorApi(PeoplePage);