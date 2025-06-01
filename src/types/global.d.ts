declare interface Window {
  gapi: any;
}

// At the top of PlannerSchedule.tsx or in global.d.ts
interface Window {
  google?: any;
}
