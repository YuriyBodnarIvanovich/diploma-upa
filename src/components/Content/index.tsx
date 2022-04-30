import React, { useState } from 'react';
import { Footer } from '../Footer';
import { RangeComponent } from '../Range';
import { ContentWrapper, InfoWrapper, MainEvents, PostPeopleBox, PostsBox, PostsWrapper, Title } from './styled';


export const Content = () => {
    const [ yearRange, setYearRange ] = useState<number>(1917)
    const postsData = [{}, {}, {}, {}, {}];
    const postsPeopleData = [{}, {}, {}, {}, {}];
    return(
        <ContentWrapper>
            <Title>{yearRange}</Title>
            <RangeComponent changeRange={setYearRange} yearRange={yearRange}/>
            <InfoWrapper>
                <MainEvents>
                    Main Events
                </MainEvents>
                <PostsWrapper>
                    {postsData.map((item) => <PostsBox />)}
                </PostsWrapper>
                <PostsWrapper>
                    {postsPeopleData.map((item) => <PostPeopleBox />)}
                </PostsWrapper>
            </InfoWrapper>
            <Footer/>
           

        </ContentWrapper>
    )
}