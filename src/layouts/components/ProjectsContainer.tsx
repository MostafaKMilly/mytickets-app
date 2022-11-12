import { styled, experimental_sx as sx } from "@mui/system";
import { Container } from "../../shared/components";

export const ProjectsContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "open",
})<ProjectsContainerProps>(({ theme, open, state }) =>
  sx({
    opacity: state === "loading" ? 0.5 : 1,
    mt: 1,
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      ml: "-260px",
      ...(open && {
        ml: "0px",
        width: `calc(100% - 260px)`,
      }),
    },
  })
);

type ProjectsContainerProps = {
  state: "idle" | "loading" | "submitting";
  open: boolean;
};
