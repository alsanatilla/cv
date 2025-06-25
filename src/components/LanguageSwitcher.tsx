
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 font-mono text-xs bg-white/80 backdrop-blur-sm border-stone-300 hover:bg-stone-50"
    >
      {i18n.language === 'en' ? 'DE' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;
