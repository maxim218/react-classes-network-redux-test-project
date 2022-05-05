import ClassesComponentsControl from "./components/ClassesComponents/ClassesComponentsControl";
import NetWorkComponentsControl from "./components/NetworkComponents/NetWorkComponentsControl";

export default function App() {
    const styleBoxObj = {background: '#f58fff', padding: '12px', borderRadius: '8px', marginBottom: '14px'};
    return (
        <div>
            <h1>Third application</h1>

            <div style={styleBoxObj}>
                <NetWorkComponentsControl/>
            </div>

            <div style={styleBoxObj}>
                <ClassesComponentsControl/>
            </div>
        </div>
    );
}