
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-light text-gray-800 mb-2">
              John Doe
            </CardTitle>
            <p className="text-lg text-gray-600 font-light">Senior Software Developer</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe size={16} />
                <span>johndoe.dev</span>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-light text-gray-800">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Passionate software developer with 5+ years of experience in building scalable web applications. 
                  Specialized in React, TypeScript, and modern web technologies. Strong advocate for clean code 
                  and user-centered design.
                </p>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-light text-gray-800">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">Senior Software Developer</h3>
                    <span className="text-sm text-gray-500">2022 - Present</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Tech Solutions Inc.</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Led development of customer-facing web applications using React and TypeScript. 
                    Collaborated with cross-functional teams to deliver high-quality software solutions.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">Software Developer</h3>
                    <span className="text-sm text-gray-500">2020 - 2022</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">Digital Innovations</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Developed and maintained web applications using modern JavaScript frameworks. 
                    Implemented responsive designs and optimized application performance.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">Junior Developer</h3>
                    <span className="text-sm text-gray-500">2019 - 2020</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">StartupCorp</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Assisted in building web applications and learned modern development practices. 
                    Contributed to both frontend and backend development tasks.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-light text-gray-800">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600 text-sm">University of California, Berkeley</p>
                  </div>
                  <span className="text-sm text-gray-500">2015 - 2019</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Skills Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-light text-gray-800">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Python', 'PostgreSQL', 'MongoDB'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'Docker', 'AWS', 'Figma'].map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Links Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-light text-gray-800">Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Github size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-600">github.com/johndoe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-600">linkedin.com/in/johndoe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-600">johndoe.dev</span>
                </div>
              </CardContent>
            </Card>

            {/* Languages Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-light text-gray-800">Languages</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">English</span>
                  <span className="text-sm text-gray-500">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">Spanish</span>
                  <span className="text-sm text-gray-500">Conversational</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-700">French</span>
                  <span className="text-sm text-gray-500">Basic</span>
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
