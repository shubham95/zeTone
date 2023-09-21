import { kea, actions, reducers, defaults } from "kea";

const logic = kea([
  defaults({
    name: "",
    email: "",
    phone: "",
    message: "",
    nameError: { desc: "Name is required", error: false },
    emailError: { desc: "Email is required", error: false },
    phoneError: { desc: "phone is required", error: false },
  }),
  actions({
    updateName: (value) => ({ value }),
    updateEmail: (value) => ({ value }),
    updatePhone: (value) => ({ value }),
    updateMessage: (value) => ({ value }),
    updateNameError: (error) => ({ error }),
    updateEmailError: (error) => ({ error }),
    updatePhoneError: (error) => ({ error }),
  }),
  reducers({
    name: {
      updateName: (__, { value }) => value,
    },
    email: {
      updateEmail: (__, { value }) => value,
    },
    phone: {
      updatePhone: (__, { value }) => value,
    },
    message: {
      updateMessage: (__, { value }) => value,
    },
    nameError: {
      updateNameError: (__, { error }) => error,
    },
    emailError: {
      updateEmailError: (__, { error }) => error,
    },
    phoneError: {
      updatePhoneError: (__, { error }) => error,
    },
  }),
]);

export default logic;
