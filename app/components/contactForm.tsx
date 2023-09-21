"use client";
import React, { useEffect, useState } from "react";
import { Alert, Box, Grid, Snackbar, TextField } from "@mui/material";
import { useActions, useValues } from "kea";
import validator from "validator";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import LoadingButton from "@mui/lab/LoadingButton";

import logic from "../logics/contactFormLogic";

const ContactForm: React.FC = () => {
  const [mockInterViewRef, setMockInterViewRef] = useState<any>({});

  const [loading, setLoading] = useState(false);

  const [alertObj, setAlertObj] = useState({
    status: false,
    type: "success",
    msg: "",
  });

  const { name, email, phone, message, nameError, emailError, phoneError } =
    useValues(logic);

  const {
    updateName,
    updateEmail,
    updatePhone,
    updateMessage,
    updateNameError,
    updateEmailError,
    updatePhoneError,
  } = useActions(logic);

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
    let isError = false;
    if (name === "") {
      updateNameError({ ...nameError, error: true });
    }
    if (!validator.isEmail(email)) {
      if (email === "") {
        updateEmailError({ ...emailError, error: true });
      } else {
        updateEmailError({
          ...emailError,
          error: true,
          desc: "Enter valid email",
        });
      }
      isError = true;
    }
    if (!validator.isMobilePhone(phone)) {
      if (phone === "") {
        updatePhoneError({ ...phoneError, error: true });
      } else {
        updatePhoneError({
          ...phoneError,
          error: true,
          desc: "Enter valid phone",
        });
      }
      isError = true;
    }

    if (!isError) {
      try {
        await addDoc(mockInterViewRef, {
          name,
          email,
          phone,
          message,
          type: "contactUsForm",
        });

        setAlertObj({
          status: true,
          type: "success",
          msg: "Data Submitted Successfully!",
        });

        updateName("");
        updateEmail("");
        updatePhone("");
        updateMessage("");
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
              error={nameError.error}
              value={name}
              id="outlined-error-helper-text"
              label="Name"
              helperText={nameError.error ? nameError.desc : ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                updateNameError({ ...nameError, error: false });
                updateName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              required
              error={emailError.error}
              value={email}
              id="outlined-error-helper-text"
              label="Email"
              helperText={emailError.error ? emailError.desc : ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                updateEmailError({ ...emailError, error: false });
                updateEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              required
              error={phoneError.error}
              value={phone}
              id="outlined-error-helper-text"
              label="Phone"
              helperText={phoneError.error ? phoneError.desc : ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                updatePhoneError({ ...phoneError, error: false });
                updatePhone(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Message"
              value={message}
              multiline
              rows={9}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                updateMessage(event.target.value);
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
