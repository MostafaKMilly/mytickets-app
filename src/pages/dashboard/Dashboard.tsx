import { Box, Button, IconButton, Typography, Link } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { CreateProjectForm, ProjectsList, TasksList } from "./components";
import { useState } from "react";
import { useCreateProjectForm } from "./hooks/useCreateProjectForm";
import { FormDialog } from "../../shared/components";

const loader = () => {};

function Dashboard() {
  const [openCreateProjectDialog, setOpenCreateProjectDialog] = useState(false);
  const { initialValues, validationSchema } = useCreateProjectForm();

  const handleCreateProjectDialog = () => {
    setOpenCreateProjectDialog(!openCreateProjectDialog);
  };

  return (
    <Box>
      <Box display="flex" width="100%" justifyContent="space-between">
        <Typography variant="h6">My projects</Typography>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<Add />}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
          onClick={handleCreateProjectDialog}
        >
          Create new project
        </Button>
        <IconButton
          color="secondary"
          onClick={handleCreateProjectDialog}
          sx={{
            display: {
              xs: "inline-flex",
              sm: "none",
            },
          }}
        >
          <Add />
        </IconButton>
      </Box>
      <ProjectsList />
      <Box width="100%" display="flex" justifyContent="end" mt={3} mb={2}>
        <Link
          color="#0065FF"
          variant="body2"
          sx={{
            cursor: "pointer",
          }}
        >
          View all
        </Link>
      </Box>
      <Box>
        <Typography variant="h6">My tasks</Typography>
        <TasksList />
      </Box>
      <FormDialog
        open={openCreateProjectDialog}
        onClose={handleCreateProjectDialog}
        dialog={{
          title: "Add Project",
          submitButton: {
            label: "Create",
          },
          closeButton: {
            label: "Close",
          },
        }}
        intialValues={initialValues}
        validationSchema={validationSchema}
      >
        <CreateProjectForm />
      </FormDialog>
    </Box>
  );
}

Dashboard.loader = loader;

export default Dashboard;
