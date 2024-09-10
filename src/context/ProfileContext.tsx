// src/context/ProfileContext.tsx
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { getProfileImageFromLocalStorage } from '../utils/storageUtils';

interface ProfileContextType {
    profilePic: string | null;
    setProfilePicture: (picture: string | null) => void;
  }

const ProfileContext = createContext<ProfileContextType  | undefined>(undefined);



export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profilePic, setProfilePicture] = useState<string | null>(null);

  useEffect(() => {
    const savedPicture = getProfileImageFromLocalStorage();
    if (savedPicture) {
      setProfilePicture(savedPicture);
    }
  }, []);

  return (
    <ProfileContext.Provider value={{ profilePic, setProfilePicture }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
      throw new Error('useProfile must be used within a ProfileProvider');
    }
    return context;
  };