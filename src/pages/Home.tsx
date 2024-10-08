import FrontLayout from '../layouts/FrontLayout'
import ProfilePicture from '../components/profile/profilePicture.tsx'
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();

  return (
    <FrontLayout>
        <div className="flex flex-col ">
            <div className="flex flex-row justify-center space-x-5">
              <ProfilePicture/>
              <div className="flex text-4xl items-center ">
                {t('name')} {t('surname')}
              </div>
            </div>
            <h1 className="text-4xl font-bold text-center">Home Page</h1>
            <p className="text-center">Welcome to the home page</p>
        </div>
    </FrontLayout>
  )
}

export default Home