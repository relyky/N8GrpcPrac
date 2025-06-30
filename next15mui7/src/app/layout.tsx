import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
//import ResponsiveDrawer from '@/components/ResponsiveDrawer';
import ClippedDrawer from '@/components/ClippedDrawer';
import "./globals.css";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* content */}
            <ClippedDrawer>
              {props.children}
            </ClippedDrawer>
            {/* <ResponsiveDrawer>
              {props.children}
            </ResponsiveDrawer> */}
            
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
