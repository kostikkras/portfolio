import { ResponsiveAppBar } from '../widgets/AppBar';
import { Sections } from '../pages/Sections';
import { Paper } from '@mui/material';
import { Footer } from '../widgets/Footer/Footer';

function App() {
    return (
        <>
            <Paper>
                <ResponsiveAppBar />
                <Sections />
            </Paper>
        </>
    );
}

export default App;
