import { DefaultTheme } from "react-native-paper";

export const PRIMARY_COLOR = '#ffb80e';
export const SECONDARY_COLOR = '#dd1c1a';

export const THEME = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: PRIMARY_COLOR,
        accent: SECONDARY_COLOR,
    },
};
