import React, { useState } from 'react';
import { saveProfileImageToLocalStorage,getProfileImageFromLocalStorage } from '../../utils/storageUtils';
import defaultProfileIcon from '../../assets/profileIcon.svg'

interface sizeProp {
    size? : string;
}

const profilePicture:React.FC<sizeProp>=({ size = 'w-32 h-32' })=> {

    const [profilePic, setProfilePic] = useState<string | null>(getProfileImageFromLocalStorage);

    const changeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]){
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader.result as string;
                setProfilePic(imageUrl);
                saveProfileImageToLocalStorage(imageUrl);
              };
              reader.readAsDataURL(file);
        }
    };

  return (
    <div className={`relative flex items-center justify-center ${size}`}>
        <img
            src={ profilePic || defaultProfileIcon }
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
        />
        <input
            type="file"
            onChange={changeProfile}
            className="absolute inset-0 opacity-0 cursor-pointer"
        />
        
    </div>

  )
}

export default profilePicture