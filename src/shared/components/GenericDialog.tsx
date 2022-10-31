import React from "react";
import {
  DialogProps,
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
  IconButton,
  ButtonProps as MuiButtonProps,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  children?: React.ReactNode;
  onClose: () => void;
}

const StyledDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

function GenericDialog({
  onClose,
  onSubmit,
  dialog,
  children,
  sx,
  ...props
}: TProps) {
  const { title, closeButton, submitButton } = dialog;
  const { label: submitButtonLabel, ...submitButtonProps } = submitButton;
  const { label: closeButtonLabel, ...closeButtonProps } = closeButton;

  return (
    <StyledDialog
      onClose={onClose}
      maxWidth="md"
      fullWidth
      {...props}
      sx={{ ...(sx as any) }}
    >
      <StyledDialogTitle onClose={onClose}>{title}</StyledDialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions sx={{ justifyContent: "flex-start", columnGap: 1 }}>
        {!!submitButton && (
          <Button
            variant="contained"
            sx={{
              px: 4,
            }}
            {...submitButtonProps}
            onClick={onSubmit}
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
    </StyledDialog>
  );
}

type TProps = Omit<DialogProps, "onClose" | "onSubmit"> & {
  dialog: {
    title: string;
    submitButton: ButtonProps;
    closeButton: ButtonProps;
  };
  onClose: () => void;
  onSubmit?: () => void;
};

type ButtonProps = MuiButtonProps & {
  label: string;
};

export default GenericDialog;
