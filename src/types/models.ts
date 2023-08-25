export interface User {
  userUid: string;
  name: string;
}

export type UserProgress = {
  userId: string;
  currentLocation: string;
  readScenario: string[];
  items: string[];
};
