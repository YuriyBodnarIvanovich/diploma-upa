import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store';
import { Footer } from '../Footer';
import { RangeComponent } from '../Range';
import PostBox from './PostBox/index';
import { BottomTools, ContentWrapper, InfoWrapper, MainEvents, PostPeopleBox, PostsBox, PostsWrapper, Title } from './styled';


export const Content = () => {
    const [ yearRange, setYearRange ] = useState<number>(1917)
    const postsData = useSelector((state:AppState) => state.postCatalogReducer.catalogPostData);
    const peopleData = useSelector((state:AppState) => state.postCatalogReducer.catalogPeople);
    const secondPostData = useSelector((state:AppState) => state.postCatalogReducer.catalogPostData);


    return(
        <ContentWrapper>
            <InfoWrapper>
                <MainEvents>
                    {postsData.map((item) => (
                        <PostBox 
                            id={item.id}
                            img={item.image} 
                            title={item.title} 
                            from={item.dataYearFrom} 
                            to={item.dataYearTo}
                        />
                    ))}
                </MainEvents>
                <PostsWrapper>
                    {peopleData.map((item) => (
                         <PostBox 
                         id={item.id}
                         img={item.image} 
                         title={item.title} 
                         from={item.dataYearFrom} 
                         to={item.dataYearTo}
                     />
                    ))}
                </PostsWrapper>
            </InfoWrapper>
            <BottomTools>
                <Title>{yearRange}</Title>
                <RangeComponent changeRange={setYearRange} yearRange={yearRange}/>
            </BottomTools>
            <Footer/>
        </ContentWrapper>
    )
}