
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50 py-16 px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-7xl font-serif-vintage text-warm-gray-800 mb-6 font-light tracking-tight">
            John Doe
          </h1>
          <p className="text-2xl font-modern text-warm-gray-600 font-light mb-12 tracking-wide">
            Senior Software Developer
          </p>
          <div className="space-y-2 text-warm-gray-600">
            <div className="flex items-center gap-3">
              <Mail size={14} />
              <span className="font-mono text-sm">john@dev.io</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} />
              <span className="font-mono text-sm">+1 555 0123</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={14} />
              <span className="font-mono text-sm">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-16">
          <h2 className="text-xl font-serif-vintage text-warm-gray-800 mb-6 font-light">
            About
          </h2>
          <p className="text-warm-gray-600 leading-loose font-modern font-light text-lg max-w-2xl">
            Passionate software developer with 5+ years of experience building scalable web applications.
            Specialized in React, TypeScript, and modern web technologies.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-xl font-serif-vintage text-warm-gray-800 mb-8 font-light">
            Experience
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-modern font-medium text-warm-gray-700">Senior Software Developer</h3>
                <span className="text-xs font-mono text-warm-gray-500 uppercase tracking-wider">2022 — Present</span>
              </div>
              <p className="text-warm-gray-600 text-sm font-mono mb-4 italic">Tech Solutions Inc.</p>
              <p className="text-warm-gray-600 font-modern font-light leading-relaxed">
                Led development of customer-facing web applications using React and TypeScript. 
                Collaborated with cross-functional teams to deliver high-quality software solutions.
              </p>
            </div>
            
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-modern font-medium text-warm-gray-700">Software Developer</h3>
                <span className="text-xs font-mono text-warm-gray-500 uppercase tracking-wider">2020 — 2022</span>
              </div>
              <p className="text-warm-gray-600 text-sm font-mono mb-4 italic">Digital Innovations</p>
              <p className="text-warm-gray-600 font-modern font-light leading-relaxed">
                Developed and maintained web applications using modern JavaScript frameworks. 
                Implemented responsive designs and optimized application performance.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Links in two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Skills */}
          <div>
            <h2 className="text-xl font-serif-vintage text-warm-gray-800 mb-6 font-light">
              Skills
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-modern text-warm-gray-700 mb-2 font-medium text-sm uppercase tracking-wider">Frontend</h4>
                <div className="text-warm-gray-600 font-mono text-sm leading-relaxed">
                  React / TypeScript / Tailwind CSS / Next.js
                </div>
              </div>
              
              <div>
                <h4 className="font-modern text-warm-gray-700 mb-2 font-medium text-sm uppercase tracking-wider">Backend</h4>
                <div className="text-warm-gray-600 font-mono text-sm leading-relaxed">
                  Node.js / Python / PostgreSQL / MongoDB
                </div>
              </div>
            </div>
          </div>

          {/* Links & Education */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-serif-vintage text-warm-gray-800 mb-6 font-light">
                Links
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Github size={14} className="text-warm-gray-500" />
                  <span className="text-sm font-mono text-warm-gray-600">github.com/johndoe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={14} className="text-warm-gray-500" />
                  <span className="text-sm font-mono text-warm-gray-600">linkedin.com/in/johndoe</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-serif-vintage text-warm-gray-800 mb-4 font-light">
                Education
              </h2>
              <div>
                <h3 className="font-modern font-medium text-warm-gray-700">BS Computer Science</h3>
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
