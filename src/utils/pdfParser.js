// PDF parsing utility
import pdf from 'pdf-parse';

// Parse PDF content and extract structured data
export const parseResumePDF = async (pdfUrl) => {
  try {
    // Fetch the PDF file
    const response = await fetch(pdfUrl);
    const arrayBuffer = await response.arrayBuffer();
    
    // Parse the PDF
    const data = await pdf(arrayBuffer);
    
    // Extract text content
    const text = data.text;
    
    // Parse the content into structured sections
    const parsedContent = parseResumeContent(text);
    
    return parsedContent;
  } catch (error) {
    console.error('Error parsing PDF:', error);
    throw new Error('Failed to parse PDF resume');
  }
};

// Parse the extracted text into structured resume sections
const parseResumeContent = (text) => {
  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  
  const resume = {
    name: '',
    title: '',
    contact: {
      email: '',
      phone: '',
      location: '',
      website: ''
    },
    summary: '',
    skills: {
      technical: [],
      languages: [],
      tools: []
    },
    experience: [],
    education: [],
    projects: [],
    certifications: []
  };

  let currentSection = '';
  let currentItem = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const nextLine = lines[i + 1] || '';
    
    // Detect sections
    if (isSectionHeader(line)) {
      currentSection = getSectionType(line);
      continue;
    }

    // Parse based on current section
    switch (currentSection) {
      case 'header':
        if (!resume.name && isName(line)) {
          resume.name = line;
        } else if (!resume.title && isTitle(line)) {
          resume.title = line;
        } else if (isContactInfo(line)) {
          parseContactInfo(line, resume.contact);
        }
        break;

      case 'summary':
        if (line.length > 20) {
          resume.summary += (resume.summary ? ' ' : '') + line;
        }
        break;

      case 'skills':
        if (line.includes('•') || line.includes('-') || line.includes('*')) {
          const skill = line.replace(/[•\-*]/g, '').trim();
          if (skill) {
            if (isTechnicalSkill(skill)) {
              resume.skills.technical.push(skill);
            } else if (isLanguage(skill)) {
              resume.skills.languages.push(skill);
            } else {
              resume.skills.tools.push(skill);
            }
          }
        }
        break;

      case 'experience':
        if (isJobTitle(line)) {
          if (currentItem.title) {
            resume.experience.push({ ...currentItem });
          }
          currentItem = {
            title: line,
            company: '',
            duration: '',
            description: []
          };
        } else if (isCompany(line)) {
          currentItem.company = line;
        } else if (isDuration(line)) {
          currentItem.duration = line;
        } else if (line.startsWith('•') || line.startsWith('-') || line.startsWith('*')) {
          currentItem.description.push(line.replace(/[•\-*]/g, '').trim());
        }
        break;

      case 'education':
        if (isDegree(line)) {
          resume.education.push({
            degree: line,
            institution: '',
            year: ''
          });
        } else if (isInstitution(line)) {
          const lastEducation = resume.education[resume.education.length - 1];
          if (lastEducation) {
            lastEducation.institution = line;
          }
        }
        break;

      case 'projects':
        if (isProjectTitle(line)) {
          resume.projects.push({
            title: line,
            description: '',
            technologies: []
          });
        } else if (line.length > 20) {
          const lastProject = resume.projects[resume.projects.length - 1];
          if (lastProject) {
            lastProject.description += (lastProject.description ? ' ' : '') + line;
          }
        }
        break;
    }
  }

  // Add the last experience item
  if (currentItem.title) {
    resume.experience.push(currentItem);
  }

  return resume;
};

// Helper functions to identify different types of content
const isSectionHeader = (line) => {
  const headers = [
    'professional summary', 'summary', 'about',
    'technical skills', 'skills', 'core competencies',
    'work experience', 'experience', 'employment',
    'education', 'academic background',
    'projects', 'key projects', 'notable projects',
    'certifications', 'certificates', 'achievements'
  ];
  
  return headers.some(header => 
    line.toLowerCase().includes(header.toLowerCase())
  );
};

const getSectionType = (line) => {
  const lowerLine = line.toLowerCase();
  
  if (lowerLine.includes('summary') || lowerLine.includes('about')) return 'summary';
  if (lowerLine.includes('skill')) return 'skills';
  if (lowerLine.includes('experience') || lowerLine.includes('employment')) return 'experience';
  if (lowerLine.includes('education')) return 'education';
  if (lowerLine.includes('project')) return 'projects';
  if (lowerLine.includes('certification') || lowerLine.includes('achievement')) return 'certifications';
  
  return 'header';
};

const isName = (line) => {
  return line.length > 2 && line.length < 50 && 
         !line.includes('@') && 
         !line.includes('http') &&
         !line.includes('•') &&
         !line.includes('-') &&
         !line.includes('*');
};

const isTitle = (line) => {
  const titles = ['engineer', 'developer', 'analyst', 'specialist', 'manager', 'consultant'];
  return titles.some(title => line.toLowerCase().includes(title));
};

const isContactInfo = (line) => {
  return line.includes('@') || 
         line.includes('http') || 
         line.includes('phone') ||
         line.includes('email') ||
         line.includes('location') ||
         line.includes('address');
};

const parseContactInfo = (line, contact) => {
  if (line.includes('@')) {
    contact.email = line;
  } else if (line.includes('http')) {
    contact.website = line;
  } else if (line.includes('phone') || line.includes('tel')) {
    contact.phone = line;
  } else if (line.includes('location') || line.includes('address')) {
    contact.location = line;
  }
};

const isTechnicalSkill = (skill) => {
  const techSkills = [
    'python', 'javascript', 'react', 'node', 'sql', 'html', 'css',
    'pytorch', 'tensorflow', 'scikit', 'pandas', 'numpy',
    'machine learning', 'deep learning', 'ai', 'nlp', 'cv'
  ];
  return techSkills.some(tech => skill.toLowerCase().includes(tech));
};

const isLanguage = (skill) => {
  const languages = ['english', 'spanish', 'french', 'german', 'chinese', 'japanese'];
  return languages.some(lang => skill.toLowerCase().includes(lang));
};

const isJobTitle = (line) => {
  const jobTitles = ['engineer', 'developer', 'analyst', 'specialist', 'manager', 'consultant', 'intern'];
  return jobTitles.some(title => line.toLowerCase().includes(title)) && 
         !line.includes('•') && 
         !line.includes('-');
};

const isCompany = (line) => {
  return line.length > 3 && 
         !line.includes('•') && 
         !line.includes('-') &&
         !line.includes('@') &&
         !isDuration(line);
};

const isDuration = (line) => {
  return /\d{4}/.test(line) || 
         line.includes('present') || 
         line.includes('current') ||
         line.includes('jan') || line.includes('feb') || line.includes('mar') ||
         line.includes('apr') || line.includes('may') || line.includes('jun') ||
         line.includes('jul') || line.includes('aug') || line.includes('sep') ||
         line.includes('oct') || line.includes('nov') || line.includes('dec');
};

const isDegree = (line) => {
  const degrees = ['bachelor', 'master', 'phd', 'diploma', 'certificate', 'degree'];
  return degrees.some(degree => line.toLowerCase().includes(degree));
};

const isInstitution = (line) => {
  return line.length > 5 && 
         (line.includes('university') || 
          line.includes('college') || 
          line.includes('institute') ||
          line.includes('school'));
};

const isProjectTitle = (line) => {
  return line.length > 5 && 
         !line.includes('•') && 
         !line.includes('-') &&
         !isDuration(line) &&
         !isInstitution(line);
};

// Fallback resume data in case PDF parsing fails
export const getFallbackResume = () => {
  return {
    name: 'Aaron Fernandes',
    title: 'Machine Learning Engineer & Full-Stack Developer',
    contact: {
      email: 'aaronferns38@gmail.com',
      phone: '',
      location: 'Your City, Country',
      website: 'your-portfolio-url.com'
    },
    summary: 'Passionate Machine Learning Engineer and Full-Stack Developer with expertise in deep learning, reinforcement learning, and web development. Experienced in building end-to-end ML solutions and creating interactive web applications.',
    skills: {
      technical: ['Python', 'JavaScript', 'React', 'PyTorch', 'TensorFlow', 'Machine Learning', 'Deep Learning'],
      languages: ['English'],
      tools: ['Git', 'Docker', 'AWS', 'VS Code', 'Jupyter']
    },
    experience: [],
    education: [],
    projects: [],
    certifications: []
  };
};







