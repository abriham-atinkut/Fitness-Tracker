import ProgressCards from "../components/ProgressCards";
import RecentWorkouts from "../components/RecentWorkouts";
import VolumeChart from "../components/VolumeChart";
import WorkoutChart from "../components/WorkoutChart";

const DashboardPage = () => {
  return (
    <>
      <div className="min-h-[40vh]">
        <ProgressCards />
        <VolumeChart />
        <WorkoutChart />
        <RecentWorkouts />
      </div>
    </>
  );
};

export default DashboardPage;
