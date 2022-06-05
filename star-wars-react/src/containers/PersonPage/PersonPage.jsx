import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Person from '../../components/PersonPage/Person';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hocs/withErrorApi';
import { getPeopleImage } from '../../services/getPeopleData';
import { getApiData } from '../../utils/network';



const PersonPage = (props) => {
    // debugger
    const [personData, setPersonData] = useState(null);
    const [personImage, setPersonImage ] = useState();
    const storeData = useSelector(state => state.favorite)    

    const {id}  = useParams();

 

    useEffect(()=>{
        
        (async () => {
            
            const res = await getApiData(`${API_PERSON}/${id}`);
            setPersonImage(getPeopleImage(id))

            if (res) {
                setPersonData(res)
                props.setErrorApi(false)    
            } else {
                props.setErrorApi(true)    
            }
        })();
       
    },[])
    
    return (
        <Person 
            id={id}
            personData={personData}
            personImage={personImage}
        />
    )
}

export default withErrorApi(PersonPage);