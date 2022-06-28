import React, { Fragment, useState, useEffect } from "react";
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, gql, useQuery, useLazyQuery } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'
import { add, clear } from '../../features/saveCharacter/character'
import ReactLoading from "react-loading";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import {
  TableBlock,
  Background,
  Tableheader,
  Tablerow,
  Tablecolumn,
  Tablecolumnhead,
  TableBody,
  TableName,
  TableBodyBottom
} from "../../components/table/table"

import {
  Loading
} from "../../components/error/error"

const getPeople: any = gql`
query Query($page: Int) {
  listPeople(page: $page) {
    name
    height
    id
    mass
    gender
    homeworld {
      name
    }
  }
}
`;

const searchPeople: any = gql`
query Query($name: String!) {
  SearchPeople(name: $name) {
    name
    height
    mass
    gender
    homeworld {
      name
    }
  }
}

`;


const savePeople: any = gql`
query Query($name: String!) {
  SearchPeople(name: $name) {
    name
    height
    mass
    gender
    homeworld {
      name
    }
    hair_color
    skin_color
    eye_color
    birth_year
  }
}

`;


function PeoplePage() {
  const count = useSelector((state: any) => state.counter.value);
  const character = useSelector((state: any) => state.character.value);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()

  function pageNext() {
    dispatch(increment());
  }
  function pagePrev() {
    if (count >= 1) {
      dispatch(decrement());
    }
  }

  function useSave(name:string) {
    const [savePeopleQuery, { loading, error, data }] = useLazyQuery<any>(savePeople);

    if (loading) dispatch(add({ loading: "loading" }));
    if (error) dispatch(add(JSON.stringify({ error: "error" })));
    if (data) {
      dispatch(add(data.SearchPeople[0]));
    }

    savePeopleQuery({
      variables: { name: name },
    })
  }

  function GetPeople() {
    const { loading, error, data } = useQuery<any>(getPeople, {
      variables: { page: count },
    });

    if (loading) return (<Loading><ReactLoading type={"bars"} color="#fff" /><div>Loading</div></Loading>);
    if (error) return (<div>{JSON.stringify(error)}</div>);

    //setData(data.data.listPeople);

    return (
      data.listPeople.map((array: any, i: number) => (
        <Tablerow key={i}>
          <Tablecolumn >

            {array.name}

          </Tablecolumn>
          <Tablecolumn >


            {array.height}
          </Tablecolumn>
          <Tablecolumn >

            {array.mass}
          </Tablecolumn>
          <Tablecolumn >

            {array.gender}
          </Tablecolumn>
          <Tablecolumn >

            {array.homeworld.name}
          </Tablecolumn>
          <button onClick={() =>  useSave(array.name) }>save</button>
        </Tablerow>

      ))
    );
  }


  
  function SearchPeople() {
    const { loading, error, data } = useQuery<any>(searchPeople, {
      variables: { name: searchValue },
    });

    if (loading) return (<Loading><ReactLoading type={"bars"} color="#fff" /><div>Loading</div></Loading>);
    if (error) return (<div>{JSON.stringify(error)}</div>);

    //setData(data.data.listPeople);

    return (
      data.SearchPeople.map((array: any, i: number) => (
        <Tablerow key={i}>
          <Tablecolumn >

            {array.name}

          </Tablecolumn>
          <Tablecolumn >


            {array.height}
          </Tablecolumn>
          <Tablecolumn >

            {array.mass}
          </Tablecolumn>
          <Tablecolumn >

            {array.gender}
          </Tablecolumn>
          <Tablecolumn >

            {array.homeworld.name}
          </Tablecolumn>
        </Tablerow>

      ))
    );
  }

  return (<>
    <Background>
z
        <TableBody>
          <TableName>name</TableName>
          <TableBodyBottom>
            <Tableheader>
              <Tablerow>
                <Tablecolumnhead >
                  name
                </Tablecolumnhead>
                <Tablecolumnhead >
                  height
                </Tablecolumnhead>
                <Tablecolumnhead >
                  mass
                </Tablecolumnhead>
                <Tablecolumnhead >
                  gender
                </Tablecolumnhead>
                <Tablecolumnhead >
                  homeworld
                </Tablecolumnhead>
              </Tablerow>
            </Tableheader>

            <TableBlock >
              <tbody>
                <GetPeople />
              </tbody>
            </TableBlock>
          </TableBodyBottom>
        </TableBody>
        <button onClick={() => pagePrev()}>prev</button>
        <p>{count}</p>
        <button onClick={() => pageNext()}>next</button>

        <TableBody>
          <TableName><input onChange={(event) => setSearchValue(event.target.value)}></input></TableName>
          <TableBodyBottom>
            <Tableheader>
              <Tablerow>
                <Tablecolumnhead >
                  name
                </Tablecolumnhead>
                <Tablecolumnhead >
                  height
                </Tablecolumnhead>
                <Tablecolumnhead >
                  mass
                </Tablecolumnhead>
                <Tablecolumnhead >
                  gender
                </Tablecolumnhead>
                <Tablecolumnhead >
                  homeworld
                </Tablecolumnhead>
              </Tablerow>
            </Tableheader>

            <TableBlock >
              <tbody>
                <SearchPeople />
              </tbody>
            </TableBlock>
          </TableBodyBottom>
        </TableBody>
    </Background>
  </>)
}

export default PeoplePage;

