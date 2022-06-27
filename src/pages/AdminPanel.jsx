import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import Button from '@material-ui/core/Button';
import '../App.css';

function AdminPanel() {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }

    useEffect(() => {
    }, []);

    return (
        <div className="app">
            <h1>Welkom Martin, wat wil je doen?</h1>
            <Button color="primary" className="icon-button" startIcon={<AddIcon/>}
                    onClick={event => routeChange('/adminAdd')}>
                Update website
            </Button>
            <button type="button" onClick={event => routeChange('/admin/messages')}>Messages</button>

        </div>
    );
}

export default AdminPanel;
