import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { darkModeState } from "@/states/atoms/Top";
import { useRecoilState } from "recoil";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness6Icon from '@mui/icons-material/Brightness6';

export default function Header() {
  const theme = useTheme().palette;
  const [darkMode, setDarkMode] = useRecoilState(darkModeState);

  /**
   * ダークモード切り替え
   */
  const changeDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(`dark mode is ${String(darkMode)}`);
  };
  const mainColor = !darkMode ? theme.primary.main : theme.primary.dark;
  return (
    <Box
      borderBottom={`1px solid ${mainColor}`}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ background: mainColor }}
    >
      <Typography color={mainColor}>ヘッダー</Typography>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={darkMode} onClick={() => changeDarkMode()} />}
          label={(darkMode) ? <DarkModeIcon sx={{ color: '#faf282' }} /> : <Brightness6Icon sx={{ color: 'warning.main' }} />}
        />
      </FormGroup>
    </Box>
  );
}
