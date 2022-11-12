import { useParams } from "react-router-dom";
import { SxProps, Theme } from "@mui/material";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SettingsIcon from "@mui/icons-material/Settings";

export const useProjectsNavLinks = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const baseUrl = `/projects/${projectId}`;

  const drawerNavItems: DrawerNavigationItem[] = [
    {
      label: "Active Sprint",
      link: baseUrl,
      icon: <TaskOutlinedIcon />,
    },
    {
      label: "Backlog",
      link: baseUrl + "/backlog",
      icon: <ListAltRoundedIcon />,
    },
    {
      label: "People",
      link: baseUrl + "/people",
      icon: <PeopleRoundedIcon />,
    },
    {
      label: "Settigns",
      link: baseUrl + "/settings",
      icon: <SettingsIcon />,
      styles: {
        mb: 2,
        mt: {
          xs: "inherit",
          sm: "auto",
        },
      },
    },
  ];
  return drawerNavItems;
};

type DrawerNavigationItem = {
  label: string;
  link: string;
  icon?: React.ReactNode;
  styles?: SxProps<Theme>;
};
