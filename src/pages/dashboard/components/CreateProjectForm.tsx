import React from "react";
import { Box, TextField, Unstable_Grid2 as Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { Form } from "react-router-dom";
import { PeopleCombo } from "../../../shared/components";
import { CreateProjectFormTypes } from "../types/Project.types";

export const CreateProjectForm = () => {
  const { getFieldProps, touched, errors } = useFormikContext<CreateProjectFormTypes>();

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
            <PeopleCombo
              variant="outlined"
              color="primary"
              label="People"
              id="people"
              fullWidth
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
