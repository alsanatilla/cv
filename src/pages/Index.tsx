
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50 py-20 px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <h1 className="text-6xl font-serif-vintage text-warm-gray-900 mb-4 font-normal tracking-tight" style={{fontOpticalSizing: 'auto'}}>
            John Doe
          </h1>
          <p className="text-xl text-warm-gray-700 mb-16 font-serif-vintage font-light" style={{fontOpticalSizing: 'auto'}}>
            Senior Software Developer
          </p>
          <div className="space-y-3 text-warm-gray-600">
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
          <h2 className="text-2xl font-serif-vintage text-warm-gray-900 mb-8 font-normal" style={{fontOpticalSizing: 'auto'}}>
            About
          </h2>
          <p className="text-warm-gray-700 leading-relaxed font-serif-vintage text-lg font-light" style={{fontOpticalSizing: 'auto'}}>
            Passionate software developer with 5+ years of experience building scalable web applications.
            Specialized in React, TypeScript, and modern web technologies.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-serif-vintage text-warm-gray-900 mb-12 font-normal" style={{fontOpticalSizing: 'auto'}}>
            Experience
          </h2>
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-vintage font-medium text-warm-gray-800 text-lg" style={{fontOpticalSizing: 'auto'}}>Senior Software Developer</h3>
                <span className="text-sm font-mono text-warm-gray-500">2022 — Present</span>
              </div>
              <p className="text-warm-gray-600 text-sm font-mono mb-6 italic">Tech Solutions Inc.</p>
              <p className="text-warm-gray-700 font-serif-vintage font-light leading-relaxed" style={{fontOpticalSizing: 'auto'}}>
                Led development of customer-facing web applications using React and TypeScript. 
                Collaborated with cross-functional teams to deliver high-quality software solutions.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif-vintage font-medium text-warm-gray-800 text-lg" style={{fontOpticalSizing: 'auto'}}>Software Developer</h3>
                <span className="text-sm font-mono text-warm-gray-500">2020 — 2022</span>
              </div>
              <p className="text-warm-gray-600 text-sm font-mono mb-6 italic">Digital Innovations</p>
              <p className="text-warm-gray-700 font-serif-vintage font-light leading-relaxed" style={{fontOpticalSizing: 'auto'}}>
                Developed and maintained web applications using modern JavaScript frameworks. 
                Implemented responsive designs and optimized application performance.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Links in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          {/* Skills */}
          <div>
            <h2 className="text-2xl font-serif-vintage text-warm-gray-900 mb-8 font-normal" style={{fontOpticalSizing: 'auto'}}>
              Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-serif-vintage text-warm-gray-800 mb-3 font-medium" style={{fontOpticalSizing: 'auto'}}>Frontend</h4>
                <div className="text-warm-gray-600 font-mono text-sm leading-relaxed">
                  React / TypeScript / Tailwind CSS / Next.js
                </div>
              </div>
              
              <div>
                <h4 className="font-serif-vintage text-warm-gray-800 mb-3 font-medium" style={{fontOpticalSizing: 'auto'}}>Backend</h4>
                <div className="text-warm-gray-600 font-mono text-sm leading-relaxed">
                  Node.js / Python / PostgreSQL / MongoDB
                </div>
              </div>
            </div>
          </div>

          {/* Links & Education */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-serif-vintage text-warm-gray-900 mb-8 font-normal" style={{fontOpticalSizing: 'auto'}}>
                Links
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <Github size={16} className="text-warm-gray-500" />
                  <span className="text-sm font-mono text-warm-gray-600">github.com/johndoe</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin size={16} className="text-warm-gray-500" />
                  <span className="text-sm font-mono text-warm-gray-600">linkedin.com/in/johndoe</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-serif-vintage text-warm-gray-900 mb-6 font-normal" style={{fontOpticalSizing: 'auto'}}>
                Education
              </h2>
              <div>
                <h3 className="font-serif-vintage font-medium text-warm-gray-800" style={{fontOpticalSizing: 'auto'}}>BS Computer Science</h3>
                <p className="text-warm-gray-600 text-sm font-mono italic">UC Berkeley, 2015 — 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
