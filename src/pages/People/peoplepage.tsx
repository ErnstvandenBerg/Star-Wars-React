import React, { Fragment, useState, useEffect } from "react";
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, gql, useQuery, useLazyQuery } from "@apollo/client";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, counterClear } from '../../features/counter/counterSlice';
import { add, clear } from '../../features/saveCharacter/character';
import { addSearch, clearSearch } from '../../features/search/search';
import ReactLoading from "react-loading";

import {
  TableBlock,
  Background,
  Tableheader,
  Tablerow,
  Tablecolumn,
  Tablecolumnhead,
  TableBody,
  TableName,
  TableBodyBottom,
  TableLink,
  TableButton,
  TableFieldset,
  TableInput,
  TableCounter,
  Tabletbody
} from "../../components/table/table"

import {
  Loading
} from "../../components/error/error"

const getPeople: any = gql`
query Query($name: String, $page: Int) {
  listPeople(name: $name, page: $page) {
    id
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

  const search = useSelector((state: any) => state.search.value);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch()

  function pageNext() {
    dispatch(increment());
  }
  function pagePrev() {
    if (count > 1) {
      dispatch(decrement());
    }
  }


  function GetPeople() {
    const { loading, error, data } = useQuery<any>(getPeople, {
      variables: { page: count, name: searchValue },
    });

    if (loading) return (<Loading><ReactLoading type={"bars"} color="#fff" /><div>Loading</div></Loading>);
    if (error) return (<Loading><div>Failed to Load</div></Loading>);

    //setData(data.data.listPeople);
    dispatch(add(data.listPeople));
    return (
      data.listPeople.map((array: any, i: number) => (
        <Tablerow key={i}>
          <TableLink to={`/person/${array.id}`}>
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
          </TableLink>
        </Tablerow>

      ))
    );
  }

  return (<>
    <Background>

      <TableBody>
        <TableName><TableInput placeholder="Search" onChange={(event) => { dispatch(counterClear()); setSearchValue(event.target.value); }}></TableInput></TableName>
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
            <Tabletbody>
              <GetPeople />
            </Tabletbody>
          </TableBlock>
        </TableBodyBottom>
      </TableBody>
      <TableFieldset>
        <TableButton onClick={() => pagePrev()}>prev</TableButton>
        <TableCounter>{count}</TableCounter>
        <TableButton onClick={() => pageNext()}>next</TableButton>
      </TableFieldset>



    </Background>
  </>)
}

export default PeoplePage;

