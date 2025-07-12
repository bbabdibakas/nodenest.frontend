import {RequireAuth} from "app/providers/AppRouter/ui/RequireAuth";
import {AppRoutesProps, routeConfig} from "app/providers/AppRouter/lib/routeConfig";
import {Route, Routes} from "react-router";
import {Suspense} from "react";
import AppPageLoader from "shared/ui/AppPageLoader/AppPageLoader";

const AppRouter = () => {
    const renderWithWrapper = (route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<AppPageLoader/>} key={route.path}>
                {route.element}
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.isRequiredAuth ? <RequireAuth>{element}</RequireAuth> : element}
            />
        )
    }

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    )
}

export default AppRouter;