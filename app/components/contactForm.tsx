"use client";
import React, { useEffect, useState } from "react";
import { Alert, Box, Grid, Snackbar, TextField } from "@mui/material";
import validator from "validator";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import LoadingButton from "@mui/lab/LoadingButton";

const ContactForm: React.FC = () => {
  const [mockInterViewRef, setMockInterViewRef] = useState<any>({});

  const [loading, setLoading] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState({
    nameErr: false,
    phoneErr: false,
    emailErr: false,
  });

  const [alertObj, setAlertObj] = useState({
    status: false,
    type: "success",
    msg: "",
  });

  // alert bar close handler
  const handleClose = () => {
    setAlertObj({ ...alertObj, status: false });
  };

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDBK_DQQIbuMCo6YGd_8l4Cr2Cn2uRUFLg",
      authDomain: "zetone-bd7dc.firebaseapp.com",
      databaseURL: "https://zetone-bd7dc-default-rtdb.firebaseio.com/",
      projectId: "zetone-bd7dc",
      storageBucket: "zetone-bd7dc.appspot.com",
      messagingSenderId: "13708187855",
      appId: "1:13708187855:web:e989b75e4637cdc3e5bfba",
      measurementId: "G-TTKNCYBMDB",
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    setMockInterViewRef(collection(db, "MockInterView"));
  }, []);

  const handleSubmit = async () => {
    const { name, phone, email, message } = formState;
    let isError = false;
    const _formErr = { nameErr: false, phoneErr: false, emailErr: false };
    if (name === "") {
      _formErr["nameErr"] = true;
    }
    if (!validator.isEmail(email)) {
      if (email === "") {
        _formErr["emailErr"] = true;
      }
      isError = true;
    }
    if (!validator.isMobilePhone(phone)) {
      if (phone === "") {
        _formErr["phoneErr"] = true;
      }
      isError = true;
    }

    if (isError) {
      setFormError(_formErr);
    }

    if (!isError) {
      try {
        await addDoc(mockInterViewRef, {
          ...formState,
          type: "contactUsForm",
        });

        setAlertObj({
          status: true,
          type: "success",
          msg: "Data Submitted Successfully!",
        });

        setFormState({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } catch {
        // error alert
        setAlertObj({
          status: true,
          type: "error",
          msg: "Some Error Occured!",
        });
      }
    }
    setLoading(false);
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={alertObj.status}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alertObj.type as "error" | "info" | "success" | "warning"}
          sx={{ width: "100%" }}
        >
          {alertObj.msg}
        </Alert>
      </Snackbar>
      <Box
        sx={{
          p: 2,
          borderTop: "3px solid #008080",
          borderBottom: "3px solid #008080",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              error={formError.nameErr}
              value={formState.name}
              id="outlined-error-helper-text"
              label="Name"
              helperText={formError.nameErr ? "Please enter your name." : ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormError({ ...formError, nameErr: false });
                setFormState({
                  ...formState,
                  name: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              error={formError.emailErr}
              value={formState.email}
              id="outlined-error-helper-text"
              label="Email"
              helperText={formError.emailErr ? "Enter valid email id." : ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormError({ ...formError, emailErr: false });
                setFormState({
                  ...formState,
                  email: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              error={formError.phoneErr}
              value={formState.phone}
              id="outlined-error-helper-text"
              label="Phone"
              helperText={formError.phoneErr ? "Enter valid phone number." : ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormError({ ...formError, phoneErr: false });
                setFormState({
                  ...formState,
                  phone: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Message"
              value={formState.message}
              multiline
              rows={9}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setFormState({
                  ...formState,
                  message: event.target.value,
                });
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} className="w-100">
            <div className="flex justify-center">
              <LoadingButton
                loading={loading}
                style={!loading ? { backgroundColor: "#008080" } : {}}
                className={loading ? "w-48" : ""}
                loadingPosition="start"
                variant="contained"
                onClick={() => {
                  setLoading(true);
                  handleSubmit();
                }}
              >
                <span>Send Message</span>
              </LoadingButton>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactForm;
