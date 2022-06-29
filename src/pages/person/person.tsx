import React, { Fragment, useState, useEffect } from "react";
import { NavLink, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardFieldset,
    CardOptionsNote,
    CardButton,
} from "../../components/card/card";

function PersonPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const character = useSelector((state: any) => state.character.value);
    let searchIndex
    if (character.length > 0) {
        searchIndex = character.findIndex((a: any) => a.id == id);
    }

    return (<>
        {character.length > 0 ?
            <CardWrapper>
                <CardHeader>
                    <CardHeading>{character[searchIndex].name}</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <CardOptionsNote>height: {character[searchIndex].height}</CardOptionsNote>
                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>mass: {character[searchIndex].mass}</CardOptionsNote>
                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>gender: {character[searchIndex].gender}</CardOptionsNote>

                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>homeworld: {character[searchIndex].homeworld.name}</CardOptionsNote>

                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>hair color: {character[searchIndex].hair_color}</CardOptionsNote>

                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>skin color: {character[searchIndex].skin_color}</CardOptionsNote>

                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>eye color: {character[searchIndex].eye_color}</CardOptionsNote>

                    </CardFieldset>
                    <CardFieldset>
                        <CardOptionsNote>birth year: {character[searchIndex].birth_year}</CardOptionsNote>

                    </CardFieldset>

                    <CardFieldset>
                        <CardButton type="button" onClick={() => { navigate("/") }}>Back To Home</CardButton>
                    </CardFieldset>
                </CardBody>
            </CardWrapper> :
            <CardWrapper>
                <CardHeader>
                    <CardHeading>Failed to load the character</CardHeading>
                </CardHeader>
                <CardBody>
                    <CardFieldset>
                        <CardOptionsNote>sorry for the inconvenience</CardOptionsNote>
                    </CardFieldset>
                </CardBody>
                <CardBody>
                    <CardFieldset />
                    <CardFieldset>
                        <CardButton type="button" onClick={() => { navigate("/") }}>Back To Home</CardButton>
                    </CardFieldset>
                </CardBody>
            </CardWrapper>}

    </>)
}

export default PersonPage;

