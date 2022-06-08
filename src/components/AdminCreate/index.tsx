import React, { useState, useEffect } from "react";
import ButtonComponent from "../Button";
import InputComponent from "../Input";
import { AdminCreateWrapper, ModalWindow } from "./styled";
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMainDataPost } from '../../redux/slices/createPostSlice';
interface IData {
    title: string,
    image: string,
    dataYearFrom: string,
    dataYearTo: string,
}

const dataField = ['title', 'image', 'dataYearFrom', 'dataYearTo'];
const dataPlaysholder = [
    'Please input title...',
    'Please input url of image...',
    'Please input data from Event...',
    'Please input data where event was ended'
]

const AdminCreate = () => {

    const dispatch = useDispatch();

    const [ dataSubmit, setDataSubmit ] = useState<IData>({title:'УПА-Захід', image: 'https://www.istpravda.com.ua/images/doc/1/6/1671650-----------.9.jpg', dataYearFrom:'1917', dataYearTo:'1943'});
    const [ step, setStep ] = useState<number>(0);

    const handleData = (e, keyField) => {
        setDataSubmit(prev => ({...prev, [`${keyField}`]: e.target.value}));
    }

    const checkProperties = (obj) =>  {
        for (let key in obj) {
            if (obj[key] === "")
                return false;
            }
        return true;
    }

    useEffect(() => {
        if(checkProperties(dataSubmit)){
            console.log('hello', dataSubmit)
            dispatch(setMainDataPost(dataSubmit));
        }         
    }, [step]);

    return(
        <AdminCreateWrapper>
            <ModalWindow>
                <InputComponent 
                    name='data' 
                    value={dataSubmit[dataField[step]]} 
                    $placeholder={dataPlaysholder[step]}
                    onChange={(e) => handleData(e, dataField[step])}
                    $width='600px'
                    $height='40px'
                    $border="none"
                    $bottomborder="2px solid black"
                    fontSize={32}
                    $margin='100px 0 0 100px'
                />
                <ButtonComponent
                    $width="100%"
                    $background={'#F27A26'}
                    $color={'white'}
                    $margin={'0 20px 0 0'}
                    $borderRadiusBottomLeft={'15px'}
                    $borderRadiusBottomRight={'15px'}
                    onClick={()=> setStep(prev => prev + 1)}
                    >
                    Submit
                </ButtonComponent>
            </ModalWindow>
            {
                step > 3 && (
                    <Redirect to="/admin/create/post" />
                )
            }
        </AdminCreateWrapper>
    )
}

export default AdminCreate;