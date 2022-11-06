import React from "react";
import {
  DialogProps,
  DialogActions,
  DialogContent,
  Dialog,
  ButtonProps as MuiButtonProps,
  Button,
  Box,
} from "@mui/material";
import { StyledDialogTitle } from "./StyledDialogTitle";
import { Formik } from "formik";

function FormDialog({
  onClose,
  handleSubmit,
  intialValues,
  validationSchema,
  dialog,
  children,
  sx,
  ...props
}: GenericDialogProps) {
  const { title, closeButton, submitButton } = dialog;
  const { label: submitButtonLabel, ...submitButtonProps } = submitButton;
  const { label: closeButtonLabel, ...closeButtonProps } = closeButton;

  return (
    <Dialog
      onClose={onClose}
      maxWidth="md"
      fullWidth
      {...props}
      sx={{ ...(sx as any) }}
    >
      <StyledDialogTitle onClose={onClose}>{title}</StyledDialogTitle>
      <Formik
        initialValues={intialValues}
        onSubmit={(data) => {
          handleSubmit?.(data);
        }}
        validationSchema={validationSchema}
      >
        {({ dirty, isValid, handleSubmit }) => (
          <Box>
            <DialogContent dividers>{children}</DialogContent>
            <DialogActions
              sx={{
                justifyContent: "flex-start",
                columnGap: 1,
              }}
            >
              {!!submitButton && (
                <Button
                  variant="contained"
                  sx={{
                    px: 4,
                  }}
                  onClick={() => {
                    handleSubmit();
                  }}
                  {...submitButtonProps}
                  disabled={!isValid || !dirty}
                >
                  {submitButtonLabel}
                </Button>
              )}
              {!!closeButton && (
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    px: 4,
                  }}
                  {...closeButtonProps}
                  onClick={onClose}
                >
                  {closeButtonLabel}
                </Button>
              )}
            </DialogActions>
          </Box>
        )}
      </Formik>
    </Dialog>
  );
}

export type GenericDialogProps = Omit<DialogProps, "onClose" | "onSubmit"> & {
  dialog: {
    title: string;
    submitButton: MuiButtonProps & {
      label: string;
    };
    closeButton: MuiButtonProps & {
      label: string;
    };
  };
  onClose: () => void;
  handleSubmit?: (data: Record<string, any>) => void;
  intialValues: Record<string, any>;
  validationSchema?: Record<string, any>;
};

export default FormDialog;
