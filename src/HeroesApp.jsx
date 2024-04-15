import { AppRouter } from "./router/AppRouter"
import { AppTheme } from "./theme/AppTheme"

export const HeroesApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    )
}
