import { useParams } from "react-router-dom";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";

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
  ];
  return drawerNavItems;
};

type DrawerNavigationItem = {
  label: string;
  link: string;
  icon?: React.ReactNode;
};
