import React from "react";
import AppContext from "context";
import UserTemplate from "template/UserTemplate";
import Form from "components/molecules/Form";

const AddView = () => (
  <AppContext.Consumer>
    {(context) => (
      <UserTemplate cardType="add">
        <Form
          cardType="add"
          addNewWorker={context.addNewWorker}
          isValidate={context.isValidate}
          message={context.message}
          editWorker={context.editWorker}
          editedWorker={context.editedWorker}
          dark={context.isDark}
        />
      </UserTemplate>
    )}
  </AppContext.Consumer>
);

export default AddView;
