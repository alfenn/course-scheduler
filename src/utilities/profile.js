import { useAuthState, useDbData } from "./firebase";

export const useProfile = () => {
  const [user] = useAuthState();
  console.log(user?.uid);
  console.log(useDbData(`/admins/${user?.uid || 'guest'}`));
  const [isAdmin, isLoading, error] =  useDbData(`/admins/${user?.uid || 'guest'}`);
  return [{ user, isAdmin }, isLoading, error];
};