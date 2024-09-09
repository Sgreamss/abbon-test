import { useTranslation } from 'react-i18next';
import lineIcon from '../../assets/lineIcon.svg';
import phoneIcon from '../../assets/phoneIcon.svg';
import mailIcon from '../../assets/mailIcon.svg';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-white p-4 lg:py-4 lg:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex flex-col items-start space-y-2  md:w-1/2 lg:w-1/3">
          <p className="text-sm break-words">
            {t("location")}
          </p>
        </div>
        <div className="flex flex-col w-1/2  justify-between lg:flex-row lg:items-center">
          <div className="flex items-center mb-1.5 lg:mb-0">
            <img src={phoneIcon} alt="phoneIcon" className="w-8 h-5" />
            <a className="text-sm text-white hover:text-gray-600" href="tel:02-055-6635">02-055-6635</a>
          </div>
          <div className="flex items-center ">
            <img src={mailIcon} alt="mailIcon" className="w-8 h-6" />
            <a className="text-sm text-white hover:text-gray-600" href="mailto:info@abbon.co.th">info@abbon.co.th</a>
          </div>
          <div className="flex items-center ">
            <img src={lineIcon} alt="lineIcon" className="w-8 h-8" />
            <a className="text-sm text-white hover:text-gray-600" href="https://line.me/R/ti/p/@377aboho" target="_blank" rel="noopener noreferrer">{t("line_contact")}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
