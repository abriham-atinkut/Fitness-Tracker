const useDashboardStats = () => {
  const progressRecords = JSON.parse(localStorage.getItem("progressRecords"));
  return progressRecords;
};

export default useDashboardStats;
