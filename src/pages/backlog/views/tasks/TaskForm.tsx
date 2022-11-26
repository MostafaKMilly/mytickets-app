import React, { useState } from "react";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

export const initialValues = {
  taskName: "",
  assignee: "",
  startDate: "",
  endDate: "",
  taskType: "",
  taskPriority: "",
  labels: "",
  notes: "",
};

const onSubmit = (values: any) => {
  console.log("form values", values);
};

export const TaskForm = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const taskForm = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className="dialog-container">
      <Button variant="outlined" onClick={handleClickOpen}>
        Create a new task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new task</DialogTitle>
        <DialogContent>
          <form onSubmit={taskForm.handleSubmit}>
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              id="taskName"
              name="taskName"
              onChange={taskForm.handleChange}
              value={taskForm.values.taskName}
            />
            <label htmlFor="assignee">Assignee</label>
            <input
              type="text"
              id="assignee"
              name="assignee"
              onChange={taskForm.handleChange}
              value={taskForm.values.assignee}
            />
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              id="startDate"
              name="startDate"
              onChange={taskForm.handleChange}
              value={taskForm.values.startDate}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              id="endDate"
              name="endDate"
              onChange={taskForm.handleChange}
              value={taskForm.values.endDate}
            />
            <label htmlFor="taskType">Task Type</label>
            <input
              type="text"
              id="taskType"
              name="taskType"
              onChange={taskForm.handleChange}
              value={taskForm.values.taskType}
            />
            <label htmlFor="taskPriority">Task Priority</label>
            <input
              type="text"
              id="taskPriority"
              name="taskPriority"
              onChange={taskForm.handleChange}
              value={taskForm.values.taskPriority}
            />
            <label htmlFor="labels">Labels</label>
            <input
              type="text"
              id="labels"
              name="labels"
              onChange={taskForm.handleChange}
              value={taskForm.values.labels}
            />
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              id="notes"
              name="notes"
              onChange={taskForm.handleChange}
              value={taskForm.values.notes}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Create</Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
