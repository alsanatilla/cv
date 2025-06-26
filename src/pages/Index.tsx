
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher';

const Index = () => {
  const { t, i18n } = useTranslation();

  console.log('Index component rendering');
  console.log('i18n ready:', i18n.isInitialized);
  console.log('Current language:', i18n.language);
  console.log('Translation test:', t('name'));

  return (
    <div className="min-h-screen bg-white py-20 px-8">
      <LanguageSwitcher />
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <h1 className="text-6xl font-serif-vintage text-stone-900 mb-4 tracking-tight font-extrabold">
            {t('name')}
          </h1>
          <p className="text-xl text-stone-700 mb-16 font-serif-vintage font-light">
            {t('title')}
          </p>
          <div className="space-y-3 text-stone-600">
            <div className="flex items-center gap-4">
              <Mail size={16} />
              <span className="font-mono text-sm">{t('contact.email')}</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={16} />
              <span className="font-mono text-sm">{t('contact.phone')}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={16} />
              <span className="font-mono text-sm">{t('contact.location')}</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-20">
          <h2 className="font-serif-vintage text-stone-900 mb-8 text-3xl font-medium">
            {t('sections.about')}
          </h2>
          <p className="text-stone-700 leading-relaxed font-geist-mono text-sm font-normal">
            {t('about_text')}
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h2 className="font-serif-vintage text-stone-900 mb-12 text-3xl font-medium">
            {t('sections.experience')}
          </h2>
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-vintage font-medium text-stone-800 text-lg">
                  {t('experience.senior_developer.title')}
                </h3>
                <span className="text-sm font-mono text-stone-500">{t('experience.senior_developer.period')}</span>
              </div>
              <p className="text-stone-600 text-sm font-mono mb-6 italic">{t('experience.senior_developer.company')}</p>
              <p className="text-stone-700 font-geist-mono font-normal leading-relaxed text-sm">
                {t('experience.senior_developer.description')}
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-vintage font-medium text-stone-800 text-lg">
                  {t('experience.developer.title')}
                </h3>
                <span className="text-sm font-mono text-stone-500">{t('experience.developer.period')}</span>
              </div>
              <p className="text-stone-600 text-sm font-mono mb-6 italic">{t('experience.developer.company')}</p>
              <p className="text-stone-700 font-geist-mono font-normal leading-relaxed text-sm">
                {t('experience.developer.description')}
              </p>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-vintage font-medium text-stone-800 text-lg">
                  {t('experience.intern.title')}
                </h3>
                <span className="text-sm font-mono text-stone-500">{t('experience.intern.period')}</span>
              </div>
              <p className="text-stone-600 text-sm font-mono mb-6 italic">{t('experience.intern.company')}</p>
              <p className="text-stone-700 font-geist-mono font-normal leading-relaxed text-sm">
                {t('experience.intern.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Links in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Skills */}
          <div>
            <h2 className="text-2xl font-serif-vintage text-stone-900 mb-8 font-medium">
              {t('sections.skills')}
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-serif-vintage text-stone-800 mb-3 font-medium">
                  {t('skills.frontend')}
                </h4>
                <div className="text-stone-600 font-mono text-sm leading-relaxed">
                  React / JavaScript / HTML / CSS
                </div>
              </div>
              
              <div>
                <h4 className="font-serif-vintage text-stone-800 mb-3 font-medium">
                  {t('skills.backend')}
                </h4>
                <div className="text-stone-600 font-mono text-sm leading-relaxed">
                  .NET / C# / API Development / File Systems
                </div>
              </div>

              <div>
                <h4 className="font-serif-vintage text-stone-800 mb-3 font-medium">
                  {t('skills.microsoft')}
                </h4>
                <div className="text-stone-600 font-mono text-sm leading-relaxed">
                  Power Platform / SharePoint / M365 / Dynamics AX
                </div>
              </div>

              <div>
                <h4 className="font-serif-vintage text-stone-800 mb-3 font-medium">
                  {t('skills.business')}
                </h4>
                <div className="text-stone-600 font-mono text-sm leading-relaxed">
                  Odoo / ERP Systems / B2B Processes
                </div>
              </div>
            </div>
          </div>

          {/* Links & Education */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif-vintage text-stone-900 mb-8 font-medium">
                {t('sections.links')}
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Github size={16} className="text-stone-500" />
                  <span className="text-sm font-mono text-stone-600">github.com/johndoe</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin size={16} className="text-stone-500" />
                  <span className="text-sm font-mono text-stone-600">linkedin.com/in/johndoe</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif-vintage text-stone-900 mb-6 font-medium">
                {t('sections.education')}
              </h2>
              <div>
                <h3 className="font-serif-vintage font-medium text-stone-800">
                  {t('education.degree')}
                </h3>
                <p className="text-stone-600 text-sm font-mono italic">{t('education.school')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
