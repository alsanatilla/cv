
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Globe, Github, Linkedin, Terminal, Code2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 py-8 px-4 font-mono">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <Card className="mb-8 bg-gray-900 border-green-800 shadow-lg shadow-green-900/20">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Terminal size={24} className="text-green-400" />
              <CardTitle className="text-4xl font-serif-vintage text-green-400 tracking-wider">
                JOHN.DOE
              </CardTitle>
              <Code2 size={24} className="text-green-400" />
            </div>
            <p className="text-xl font-modern text-green-300 font-light tracking-wide">
              Senior Software Developer
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-sm">
              <div className="flex items-center gap-2 text-green-500">
                <Mail size={14} />
                <span className="font-mono text-xs">john@dev.io</span>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <Phone size={14} />
                <span className="font-mono text-xs">+1.555.DEV</span>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <MapPin size={14} />
                <span className="font-mono text-xs">SF.CA</span>
              </div>
              <div className="flex items-center gap-2 text-green-500">
                <Globe size={14} />
                <span className="font-mono text-xs">johndoe.dev</span>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <Card className="bg-gray-900 border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-serif-vintage text-green-400 tracking-wider">
                  $ cat about.txt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-300 leading-relaxed font-modern font-light">
                  {`> Passionate software developer with 5+ years of experience building scalable web applications.`}
                  <br />
                  {`> Specialized in React, TypeScript, and modern web technologies.`}
                  <br />
                  {`> Strong advocate for clean code and user-centered design.`}
                </p>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card className="bg-gray-900 border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-serif-vintage text-green-400 tracking-wider">
                  $ ls -la experience/
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-modern font-medium text-green-300">Senior Software Developer</h3>
                    <span className="text-xs font-mono text-green-500">2022-PRESENT</span>
                  </div>
                  <p className="text-green-400 text-sm font-mono">Tech Solutions Inc.</p>
                  <p className="text-green-300 text-sm font-modern font-light leading-relaxed">
                    Led development of customer-facing web applications using React and TypeScript. 
                    Collaborated with cross-functional teams to deliver high-quality software solutions.
                  </p>
                </div>
                
                <Separator className="bg-green-800" />
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-modern font-medium text-green-300">Software Developer</h3>
                    <span className="text-xs font-mono text-green-500">2020-2022</span>
                  </div>
                  <p className="text-green-400 text-sm font-mono">Digital Innovations</p>
                  <p className="text-green-300 text-sm font-modern font-light leading-relaxed">
                    Developed and maintained web applications using modern JavaScript frameworks. 
                    Implemented responsive designs and optimized application performance.
                  </p>
                </div>
                
                <Separator className="bg-green-800" />
                
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-modern font-medium text-green-300">Junior Developer</h3>
                    <span className="text-xs font-mono text-green-500">2019-2020</span>
                  </div>
                  <p className="text-green-400 text-sm font-mono">StartupCorp</p>
                  <p className="text-green-300 text-sm font-modern font-light leading-relaxed">
                    Assisted in building web applications and learned modern development practices. 
                    Contributed to both frontend and backend development tasks.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card className="bg-gray-900 border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-serif-vintage text-green-400 tracking-wider">
                  $ cat education.log
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-modern font-medium text-green-300">BS Computer Science</h3>
                    <p className="text-green-400 text-sm font-mono">UC Berkeley</p>
                  </div>
                  <span className="text-xs font-mono text-green-500">2015-2019</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <Card className="bg-gray-900 border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-serif-vintage text-green-400 tracking-wider">
                  $ ./skills.sh
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-mono text-green-300 mb-2 text-sm">[FRONTEND]</h4>
                    <div className="flex flex-wrap gap-1">
                      {['React', 'TypeScript', 'Tailwind', 'Next.js'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-green-900/50 text-green-300 text-xs font-mono border border-green-800 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-green-300 mb-2 text-sm">[BACKEND]</h4>
                    <div className="flex flex-wrap gap-1">
                      {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-green-900/50 text-green-300 text-xs font-mono border border-green-800 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-mono text-green-300 mb-2 text-sm">[TOOLS]</h4>
                    <div className="flex flex-wrap gap-1">
                      {['Git', 'Docker', 'AWS', 'Figma'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-green-900/50 text-green-300 text-xs font-mono border border-green-800 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Links Section */}
            <Card className="bg-gray-900 border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-serif-vintage text-green-400 tracking-wider">
                  $ cat links.txt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Github size={14} className="text-green-500" />
                  <span className="text-xs font-mono text-green-300">github.com/johndoe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={14} className="text-green-500" />
                  <span className="text-xs font-mono text-green-300">linkedin.com/in/johndoe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-green-500" />
                  <span className="text-xs font-mono text-green-300">johndoe.dev</span>
                </div>
              </CardContent>
            </Card>

            {/* Languages Section */}
            <Card className="bg-gray-900 border-green-800">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-serif-vintage text-green-400 tracking-wider">
                  $ locale -a
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs font-mono text-green-300">English</span>
                  <span className="text-xs font-mono text-green-500">NATIVE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-mono text-green-300">Spanish</span>
                  <span className="text-xs font-mono text-green-500">CONV</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-mono text-green-300">French</span>
                  <span className="text-xs font-mono text-green-500">BASIC</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
