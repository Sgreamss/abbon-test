import  { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import sideBar from '../../assets/sideBarIcon.svg';
import logo from '../../assets/abbon-logo.svg';
import ProfilePicture from '../../components/profile/profilePicture';

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setIsContactOpen(false);
  };
  const handleContactClick = () => {
    setIsContactOpen(!isContactOpen); // Toggle the submenu
  };
  const { t,i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en');
  };

  function openMapsWithCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude}%2C${longitude}`;
          window.open(googleMapsUrl, '_blank');
        },
        (error) => {
          console.error('Error getting location', error);
        },
        {
          enableHighAccuracy: true,  // Request more accurate location
          timeout: 10000,            // Timeout after 10 seconds
          maximumAge: 0              // Do not use cached location
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  } 

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center'>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-16 h-16"/>
          </Link>
        </div>
        <div className='flex space-x-6 items-center'>
          <div className='hidden md:flex'>
            <ProfilePicture size="w-16 h-16"/>
          </div>
          <div className='hidden md:flex'>
            {t('name')} {t('surname')}
          </div>
          <button
              onClick={changeLanguage}
              className="hidden md:flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
              {i18n.language === 'en' ? 'EN' : 'TH'}
          </button>
          <div className="right-0">
          <button className="text-white" onClick={toggleSidebar}>
              <img src={sideBar} alt="sideBarIcon" className='w-6 h-6 text-white' />
          </button>
        </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-gray-800 text-white w-64 h-full transition-transform duration-300 ease-in-out z-40`}
        >
        <div className="p-6 text-xl font-bold">Sidebar Menu</div>
        <ul className="space-y-4 p-4">
          <li>
            <Link to="/" onClick={toggleSidebar}>
              {t('home')} 
            </Link>
          </li>
          <li>
            <button onClick={handleContactClick}>
              {t('contact')}
            </button>
            {isContactOpen && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link to="/ContactList"> 
                    {t('contact_List')} 
                  </Link>
                </li>
                <li>
                  <Link to="/ContactForm">
                    {t('contact_Create')}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <button onClick={openMapsWithCurrentLocation}>
              {t('current_location')}
            </button>
          </li>
        </ul>
        <div>
          <button
              onClick={changeLanguage}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded ml-4">
              {i18n.language === 'en' ? 'EN' : 'TH'}
            </button>
        </div>
      </div>

      {/* close sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    
    </nav>
  )
}

export default Navbar