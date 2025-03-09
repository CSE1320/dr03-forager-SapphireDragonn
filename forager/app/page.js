import DashboardPage from './dashboard/page';  // Use relative path
import Sandbox from './sandbox/page';  // Use relative path
import { MushroomProvider } from './context/MushroomContext';  // Import your MushroomProvider


export default function Home() {

  return (
    <MushroomProvider>
      <DashboardPage /> 
    </MushroomProvider>
  ) 
  // return <Sandbox />;  // Render the Sandbox as the default for the '/' route
}
