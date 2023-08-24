export interface User {
  userUid: string;
  name: string;
}

export interface UserProgress {
  userId: string;
  currentLocation: string;
  readScenario: string[];
  items: string[];
}
