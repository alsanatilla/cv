
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-cream-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-serif-vintage text-warm-gray-800 mb-4 font-light">
            John Doe
          </h1>
          <p className="text-xl font-modern text-warm-gray-600 font-light tracking-wide mb-8">
            Senior Software Developer
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-warm-gray-600">
              <Mail size={16} />
              <span className="font-mono">john@dev.io</span>
            </div>
            <div className="flex items-center gap-2 text-warm-gray-600">
              <Phone size={16} />
              <span className="font-mono">+1 555 0123</span>
            </div>
            <div className="flex items-center gap-2 text-warm-gray-600">
              <MapPin size={16} />
              <span className="font-mono">San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-2 text-warm-gray-600">
              <Globe size={16} />
              <span className="font-mono">johndoe.dev</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <div>
              <h2 className="text-2xl font-serif-vintage text-warm-gray-800 mb-6 font-light">
                About
              </h2>
              <p className="text-warm-gray-600 leading-relaxed font-modern font-light text-lg">
                Passionate software developer with 5+ years of experience building scalable web applications.
                Specialized in React, TypeScript, and modern web technologies.
                Strong advocate for clean code and user-centered design.
              </p>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-2xl font-serif-vintage text-warm-gray-800 mb-8 font-light">
                Experience
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-modern font-medium text-warm-gray-700 text-lg">Senior Software Developer</h3>
                    <span className="text-sm font-mono text-warm-gray-500">2022 — Present</span>
                  </div>
                  <p className="text-warm-gray-600 text-sm font-mono mb-3">Tech Solutions Inc.</p>
                  <p className="text-warm-gray-600 font-modern font-light leading-relaxed">
                    Led development of customer-facing web applications using React and TypeScript. 
                    Collaborated with cross-functional teams to deliver high-quality software solutions.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-modern font-medium text-warm-gray-700 text-lg">Software Developer</h3>
                    <span className="text-sm font-mono text-warm-gray-500">2020 — 2022</span>
                  </div>
                  <p className="text-warm-gray-600 text-sm font-mono mb-3">Digital Innovations</p>
                  <p className="text-warm-gray-600 font-modern font-light leading-relaxed">
                    Developed and maintained web applications using modern JavaScript frameworks. 
                    Implemented responsive designs and optimized application performance.
                  </p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-modern font-medium text-warm-gray-700 text-lg">Junior Developer</h3>
                    <span className="text-sm font-mono text-warm-gray-500">2019 — 2020</span>
                  </div>
                  <p className="text-warm-gray-600 text-sm font-mono mb-3">StartupCorp</p>
                  <p className="text-warm-gray-600 font-modern font-light leading-relaxed">
                    Assisted in building web applications and learned modern development practices. 
                    Contributed to both frontend and backend development tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-2xl font-serif-vintage text-warm-gray-800 mb-6 font-light">
                Education
              </h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-modern font-medium text-warm-gray-700 text-lg">BS Computer Science</h3>
                  <p className="text-warm-gray-600 text-sm font-mono">UC Berkeley</p>
                </div>
                <span className="text-sm font-mono text-warm-gray-500">2015 — 2019</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-serif-vintage text-warm-gray-800 mb-6 font-light">
                Skills
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-modern text-warm-gray-700 mb-3 font-medium">Frontend</h4>
                  <div className="space-y-1">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill) => (
                      <div key={skill} className="text-warm-gray-600 font-mono text-sm">{skill}</div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-modern text-warm-gray-700 mb-3 font-medium">Backend</h4>
                  <div className="space-y-1">
                    {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                      <div key={skill} className="text-warm-gray-600 font-mono text-sm">{skill}</div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-modern text-warm-gray-700 mb-3 font-medium">Tools</h4>
                  <div className="space-y-1">
                    {['Git', 'Docker', 'AWS', 'Figma'].map((skill) => (
                      <div key={skill} className="text-warm-gray-600 font-mono text-sm">{skill}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div>
              <h2 className="text-2xl font-serif-vintage text-warm-gray-800 mb-6 font-light">
                Links
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Github size={16} className="text-warm-gray-500" />
                  <span className="text-sm font-mono text-warm-gray-600">github.com/johndoe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={16} className="text-warm-gray-500" />
                  <span className="text-sm font-mono text-warm-gray-600">linkedin.com/in/johndoe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-warm-gray-500" />
                  <span className="text-sm font-mono text-warm-gray-600">johndoe.dev</span>
                </div>
              </div>
            </div>

            {/* Languages Section */}
            <div>
              <h2 className="text-2xl font-serif-vintage text-warm-gray-800 mb-6 font-light">
                Languages
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-mono text-warm-gray-600">English</span>
                  <span className="text-sm font-mono text-warm-gray-500">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-mono text-warm-gray-600">Spanish</span>
                  <span className="text-sm font-mono text-warm-gray-500">Conversational</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-mono text-warm-gray-600">French</span>
                  <span className="text-sm font-mono text-warm-gray-500">Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
