import { Box, Stack, TextField, Unstable_Grid2 as Grid } from "@mui/material";
import React from "react";
import { Form } from "react-router-dom";
import { useCreateProjectForm } from "../hooks/useCreateProjectForm";

export const CreateProjectForm = () => {
  const { getFieldProps, touched, errors, isValid, dirty } =
    useCreateProjectForm();

  return (
    <Box m={2}>
      <Form method="post">
        <Grid container rowSpacing={3} flexDirection="column">
          <Grid xs={12} sm={5}>
            <TextField
              variant="outlined"
              color="primary"
              label="Project name"
              id="projectName"
              fullWidth
              error={touched.projectName && Boolean(errors.projectName)}
              helperText={touched.projectName && errors.projectName}
              {...getFieldProps("projectName")}
            />
          </Grid>
          <Grid xs={12} sm={5}>
            <TextField
              variant="outlined"
              color="primary"
              label="People"
              id="people"
              fullWidth
              error={touched.people && Boolean(errors.people)}
              helperText={touched.people && errors.people}
              {...getFieldProps("people")}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              variant="outlined"
              color="primary"
              label="Description"
              id="description"
              multiline
              rows={4}
              fullWidth
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
              {...getFieldProps("description")}
            />
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};
