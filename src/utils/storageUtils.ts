
export function saveProfileImageToLocalStorage(imageUrl : string){
    localStorage.setItem("profileImage",imageUrl);
}

export function getProfileImageFromLocalStorage(): string | null {
    return localStorage.getItem('profileImage');
  }