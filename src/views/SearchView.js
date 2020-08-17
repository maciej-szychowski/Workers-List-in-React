import React from "react";
import UserTemplate from "template/UserTemplate";
import DataTable from "components/organism/DataTable";
import FillterContainer from "components/organism/FillterContainer";
import AppContext from "context";

const SearchView = () => (
  <AppContext.Consumer>
    {(context) => (
      <UserTemplate cardType="search">
        <FillterContainer
          workers={context.listWorkers}
          filterName={context.filterName}
          filterValues={context.filterValues}
          cardType="search"
        />
        <DataTable
          cardType="search"
          workers={context.workers}
          dark={context.isDark}
        />
      </UserTemplate>
    )}
  </AppContext.Consumer>
);

export default SearchView;
