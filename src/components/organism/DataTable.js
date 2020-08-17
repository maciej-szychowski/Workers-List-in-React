import React, { Component } from "react";
import WorkersList from "components/molecules/WorkersList";

class DataTable extends Component {
  render() {
    const { cardType, workers, dark } = this.props;
    return (
      <>
        <WorkersList workers={workers} cardType={cardType} dark={dark} />
      </>
    );
  }
}

export default DataTable;
