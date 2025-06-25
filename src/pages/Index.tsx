import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-white py-20 px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <h1 style={{
          fontOpticalSizing: 'auto'
        }} className="text-6xl font-serif-vintage text-stone-900 mb-4 tracking-tight font-extrabold">Atilla Alsan</h1>
          <p className="text-xl text-stone-700 mb-16 font-serif-vintage font-light" style={{
          fontOpticalSizing: 'auto'
        }}>
            Senior Software Developer
          </p>
          <div className="space-y-3 text-stone-600">
            <div className="flex items-center gap-4">
              <Mail size={16} />
              <span className="font-mono text-sm">john@dev.io</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={16} />
              <span className="font-mono text-sm">+1 555 0123</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={16} />
              <span className="font-mono text-sm">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-20">
          <h2 style={{
          fontOpticalSizing: 'auto'
        }} className="font-serif-vintage text-stone-900 mb-8 text-3xl font-medium">
            About
          </h2>
          <p className="text-stone-700 leading-relaxed font-geist-mono text-sm font-normal" style={{
          fontOpticalSizing: 'auto'
        }}>Passionate software developer with 3+ years of experience building digital applications. Specialized in the Microsoft Ecosystem which inclues M365 (SharePoint, PowerPlatform) and modern web technologies.</p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h2 style={{
          fontOpticalSizing: 'auto'
        }} className="font-serif-vintage text-stone-900 mb-12 text-3xl font-medium">
            Experience
          </h2>
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-vintage font-medium text-stone-800 text-lg" style={{
                fontOpticalSizing: 'auto'
              }}>Senior Software Developer</h3>
                <span className="text-sm font-mono text-stone-500">2024 — Present</span>
              </div>
              <p className="text-stone-600 text-sm font-mono mb-6 italic">Tech Solutions Inc.</p>
              <p className="text-stone-700 font-geist-mono font-normal leading-relaxed text-sm" style={{
              fontOpticalSizing: 'auto'
            }}>
                IT consultant specializing in Power Platform for IT consulting company. 
                Developed custom business solutions using Power Apps, Power Automate, and Power BI.
                Integrated third-party APIs and built custom connectors to enhance platform capabilities and streamline business processes.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-vintage font-medium text-stone-800 text-lg" style={{
                fontOpticalSizing: 'auto'
              }}>Software Developer</h3>
                <span className="text-sm font-mono text-stone-500">2023 — 2024</span>
              </div>
              <p className="text-stone-600 text-sm font-mono mb-6 italic">Digital Innovations</p>
              <p className="text-stone-700 font-geist-mono font-normal leading-relaxed text-sm" style={{
              fontOpticalSizing: 'auto'
            }}>
                Developed and maintained web applications for B2B processes including Odoo and Microsoft Dynamics AX. 
                Led projects digitalizing internal company processes and implemented responsive designs while optimizing application performance.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Links in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Skills */}
          <div>
            <h2 style={{
            fontOpticalSizing: 'auto'
          }} className="text-2xl font-serif-vintage text-stone-900 mb-8 font-medium">
              Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-serif-vintage text-stone-800 mb-3 font-medium" style={{
                fontOpticalSizing: 'auto'
              }}>Frontend</h4>
                <div className="text-stone-600 font-mono text-sm leading-relaxed">
                  React / TypeScript / Tailwind CSS / Next.js
                </div>
              </div>
              
              <div>
                <h4 className="font-serif-vintage text-stone-800 mb-3 font-medium" style={{
                fontOpticalSizing: 'auto'
              }}>Backend</h4>
                <div className="text-stone-600 font-mono text-sm leading-relaxed">
                  Node.js / Python / PostgreSQL / MongoDB
                </div>
              </div>
            </div>
          </div>

          {/* Links & Education */}
          <div className="space-y-12">
            <div>
              <h2 style={{
              fontOpticalSizing: 'auto'
            }} className="text-2xl font-serif-vintage text-stone-900 mb-8 font-medium">
                Links
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
              <h2 style={{
              fontOpticalSizing: 'auto'
            }} className="text-2xl font-serif-vintage text-stone-900 mb-6 font-medium">
                Education
              </h2>
              <div>
                <h3 className="font-serif-vintage font-medium text-stone-800" style={{
                fontOpticalSizing: 'auto'
              }}>BS Computer Science</h3>
                <p className="text-stone-600 text-sm font-mono italic">UC Berkeley, 2015 — 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;