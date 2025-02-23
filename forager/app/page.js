import DashboardPage from './dashboard/page';  // Use relative path
import Sandbox from './sandbox/page';  // Use relative path
import 'semantic-ui-css/semantic.min.css';


export default function Home() {
  return <DashboardPage />;  // Render the DashboardPage as the default for the '/' route
  // return <Sandbox />;  // Render the Sandbox as the default for the '/' route
}
