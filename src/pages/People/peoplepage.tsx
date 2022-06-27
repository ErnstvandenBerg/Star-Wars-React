import React, { Fragment, useState, useEffect } from "react";
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink, gql, useQuery } from "@apollo/client";
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
  TableBodyBottom
} from "../../components/table/table"

import {
  Loading
} from "../../components/error/error"

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

interface peopleInventory {
  name: string,
  height: number,
  id: number,
  mass: number,
  gender: string,
  homeworld: any
}


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

function PeoplePage() {

  const [data, setData]: any = useState([]);
  const [page, setPage]: any = useState(1);

  function pageNext() {
    setPage(page + 1)
    console.log(page);
  }
  function pagePrev() {
    if (page >= 1) {
      setPage(page - 1)
      console.log(page);
    }
  }

  function GetPeople() {
    const { loading, error, data } = useQuery<any>(getPeople, {
      variables: { page: page },
    });

    if (loading) return (<Loading><ReactLoading type={"bars"} color="#fff" /><div>Loading</div></Loading>);
    if (error) return (<div>{JSON.stringify(error)}</div>);

    //setData(data.data.listPeople);
    console.log(data)
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
        </Tablerow>

      ))
    );
  }

  

  return (<>
    <Background>
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
              <GetPeople/>
            </tbody>
          </TableBlock>
        </TableBodyBottom>
      </TableBody>
      <button onClick={() => pagePrev()}>prev</button>
      <button onClick={() => pageNext()}>next</button>
    </Background>
  </>)
}

export default PeoplePage;

