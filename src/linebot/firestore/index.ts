import { firestore } from '../utils/firebase';
import { doc, getDoc, collection, setDoc, DocumentSnapshot, DocumentData } from 'firebase/firestore';
import type { UserProgress } from '~/src/types/models';
import { scenarioKeys } from '../notices/notice-list';

const db = firestore;

//ユーザーデータの一括取得(存在しなかった場合追加)
export const fetchUserData = async (uid: string): Promise<DocumentData | undefined> => {
  const progressCollection = collection(db, 'UserProgress');
  const userDoc = doc(progressCollection, uid);

  try {
    const getUserData = await getDoc(userDoc);
    if (!getUserData.exists()) {
      const initialData: UserProgress = {
        userId: uid,
        currentLocation: '小倉駅に到着',
        readScenario: ['小倉駅に到着'],
        items: [],
      };
      await setDoc(userDoc, initialData);

      const getNewUserData = await getDoc(userDoc);
      return getNewUserData.data();
    }

    return getUserData.data();
  } catch (error) {
    console.error(error);
  }
};

//現在地(currentLocation)を更新
export const updateLocation = async (uid: string, location: string) => {
  const currentUserData = (await fetchUserData(uid)) as UserProgress;
  const updatedData: UserProgress = { ...currentUserData, currentLocation: location };
  await setDoc(doc(db, 'UserProgress', uid), updatedData);
};

//読んだシーン(readScenario)を配列に追加
export const addReadScenario = async (uid: string, scenario: string) => {
  const currentUserData = (await fetchUserData(uid)) as UserProgress;
  if (!currentUserData.readScenario.includes(scenario)) {
    currentUserData?.readScenario.push(scenario);
    await setDoc(doc(db, 'UserProgress', uid), currentUserData);
  }
};

//アイテム(item)を配列に追加
export const addItem = async (uid: string, name: string, item: string) => {
  const currentUserData = (await fetchUserData(uid)) as UserProgress;
  currentUserData?.items.push(item);
  await setDoc(doc(db, 'UserProgress', uid), currentUserData);
};

//ゲームをリセット(currentLocationを小倉に item,readScenarioを空配列に)
export const resetData = async (uid: string) => {
  const currentUserData = (await fetchUserData(uid)) as UserProgress;
  const initialData: UserProgress = {
    userId: currentUserData.userId,
    currentLocation: '小倉駅に到着',
    readScenario: ['小倉駅に到着'],
    items: [],
  };
  await setDoc(doc(db, 'UserProgress', uid), initialData);
};
