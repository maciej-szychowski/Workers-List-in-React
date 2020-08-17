import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AppContext from "context";
import MainView from "views/MainView";
import AddView from "views/AddView";
import SearchView from "views/SearchView";
import DetailsPage from "views/DetailsPage";
import MainTemplate from "template/MainTemplate";
import { dataList } from "assets/data/Data";
import { routes } from "route/Route";

class Root extends Component {
  state = {
    workers: dataList,
    listWorkers: dataList,
    isValidate: true,
    isDark: false,
    editedWorker: "",
    message: "Wszystkie pola poza opisem muszą być wypełnione",
    filterValues: {
      text: "",
      section: "",
      earnings: 0,
    },
  };

  addNewWorker = (e, worker) => {
    worker.isWomen = this.checkGender(worker.name);
    const isValidate = this.validateForm(worker);
    if (isValidate) {
      if (this.state.editedWorker) {
        let workers = this.state.workers;
        const index = workers.indexOf(this.state.editedWorker);
        workers.splice(index, 1, worker);
        this.setState({
          workers,
          listWorkers: workers,
          editedWorker: "",
          isValidate: true,
        });
      } else {
        const id = this.getID();
        worker.id = id;
        this.setState((prevState) => {
          return {
            workers: [...prevState.workers, worker],
            listWorkers: [...prevState.workers, worker],
            isValidate: true,
          };
        });
      }
    } else {
      this.setState({
        isValidate: false,
      });
      e.preventDefault();
    }
  };

  getID = () => {
    const sortedId = this.state.listWorkers
      .map((worker) => parseInt(worker.id))
      .sort((a, b) => b - a);
    const id = sortedId[0] + 1;
    return id;
  };

  checkGender = (name) => {
    if (name[name.length - 1] === "a") {
      return true;
    } else return false;
  };

  validateForm = (worker) => {
    if (worker.name && worker.surname && worker.earnings && worker.section) {
      if (worker.earnings <= 0) {
        this.setState({
          message: "Zarobki muszą być większe od zera",
        });
        return false;
      }
      if (worker.name.length <= 2 || worker.surname.length <= 2) {
        this.setState({
          message:
            "Imię musi mieć długość co najmniej 3 znaków a nzwisko 4 znaków",
        });
        return false;
      }
      return true;
    } else {
      return false;
    }
  };

  filterName = (values) => {
    const { text, section, earnings } = values;
    const filterList = this.state.listWorkers
      .filter((worker) =>
        worker.name.toLowerCase().includes(text.toLowerCase())
      )
      .filter((worker) => parseFloat(worker.earnings) >= earnings)
      .filter((worker) =>
        section && section !== "Wszystkie" ? worker.section === section : worker
      );

    this.setState({
      workers: filterList,
      filterValues: {
        text,
        section,
        earnings,
      },
    });
  };

  sortList = (sortParameter) => {
    let sortedWorkers = this.state.listWorkers;
    if (sortParameter === "earningsAscending") {
      sortedWorkers = sortedWorkers.sort(
        (a, b) => parseFloat(a.earnings) - parseFloat(b.earnings)
      );
    } else if (sortParameter === "earningsDescending") {
      sortedWorkers = sortedWorkers.sort(
        (a, b) => parseFloat(b.earnings) - parseFloat(a.earnings)
      );
    } else if (sortParameter === "alphabeticallyName") {
      sortedWorkers = sortedWorkers.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      sortedWorkers = sortedWorkers.sort((a, b) => {
        if (a.surname < b.surname) {
          return -1;
        } else if (a.surname > b.surname) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    this.setState({
      listWorkers: sortedWorkers,
    });
  };

  deleteWorker = (id) => {
    let listWorkers = this.state.listWorkers;
    listWorkers = listWorkers.filter((worker) => worker.id !== id);
    this.setState({
      workers: listWorkers,
      listWorkers,
    });
  };

  editWorker = (worker) => {
    this.setState({
      editedWorker: worker,
    });
  };

  changeColor = () => {
    this.setState((prevState) => ({
      isDark: !prevState.isDark,
    }));
  };

  render() {
    const contextElement = {
      ...this.state,
      addNewWorker: this.addNewWorker,
      filterName: this.filterName,
      sortList: this.sortList,
      deleteWorker: this.deleteWorker,
      editWorker: this.editWorker,
      changeColor: this.changeColor,
    };

    return (
      <AppContext.Provider value={contextElement}>
        <MainTemplate>
          <BrowserRouter>
            <Switch>
              <Route
                exact
                path={routes.home}
                render={() => <Redirect to={routes.main} />}
              />
              <Route exact path={routes.main} component={MainView} />
              <Route path={routes.details} component={DetailsPage} />
              <Route path={routes.add} component={AddView} />
              <Route path={routes.search} component={SearchView} />
            </Switch>
          </BrowserRouter>
        </MainTemplate>
      </AppContext.Provider>
    );
  }
}

export default Root;
