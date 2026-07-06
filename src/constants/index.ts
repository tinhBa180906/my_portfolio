import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  pet,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "Giới thiệu",
  },
  {
    id: "work",
    title: "Dự án",
  },
  {
    id: "contact",
    title: "Liên hệ",
  },
];

const services: TService[] = [
  {
    title: "Full-stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences: TExperience[] = [
  {
    title: "Sinh viên Kỹ thuật phần mềm",
    companyName: "Đại học",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Hiện tại",
    points: [
      "Theo học chuyên ngành Kỹ thuật phần mềm, tập trung vào nền tảng lập trình và kiến trúc hệ thống.",
      "Nghiên cứu và phát triển các ứng dụng web/app sử dụng Java, C++, và MERN stack.",
      "Tham gia thiết kế cơ sở dữ liệu và xây dựng API cho các dự án thực tế.",
    ],
  },
  {
    title: "Backend Developer & Database Designer",
    companyName: "Dự án P.E.T",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Dự án học thuật",
    points: [
      "Thiết kế mô hình dữ liệu (ERD) và xây dựng kiến trúc cơ sở dữ liệu với mySQL.",
      "Phát triển các API xử lý logic phía máy chủ bằng Java (Spring Boot) và Node.js (Express).",
      "Xây dựng hệ thống giúp người dùng nhận diện lỗi sai khi tập thể dục kết hợp tính năng nuôi pet ảo.",
    ],
  },
  {
    title: "Frontend Developer & System Analyst",
    companyName: "Dự án Co-che",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dự án học thuật",
    points: [
      "Phân tích yêu cầu và phác thảo sơ đồ thực thể kết nối (ERD) để định hình luồng dữ liệu bằng draw.io.",
      "Trực tiếp phát triển giao diện người dùng tương tác bằng React.js, HTML5/CSS3.",
      "Xây dựng nền tảng gợi ý thực đơn và công thức nấu ăn thông minh dựa trên nguyên liệu có sẵn.",
    ],
  },
  {
    title: "Full-stack Developer & Project Owner",
    companyName: "Dự án Solve_Rubik",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Dự án cá nhân",
    points: [
      "Xây dựng toàn bộ ứng dụng web từ giao diện người dùng bằng React.js.",
      "Phát triển hệ thống xử lý logic thuật toán giải Rubik phía máy chủ bằng Node.js.",
      "Quản lý mã nguồn dự án độc lập, đảm bảo hiệu suất và trải nghiệm người dùng.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Tình là một nhà phát triển vô cùng nhiệt huyết. Khả năng tư duy logic và thiết kế cơ sở dữ liệu của bạn ấy đã giúp dự án của chúng tôi hoàn thành xuất sắc.",
    name: "Thành viên nhóm",
    designation: "Frontend Developer",
    company: "Dự án P.E.T",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Làm việc cùng Tình trong dự án Co-che, tôi thực sự ấn tượng với kỹ năng phân tích hệ thống và phát triển giao diện React của bạn ấy.",
    name: "Đồng đội",
    designation: "UI/UX Designer",
    company: "Dự án Co-che",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Khả năng học hỏi nhanh và tự xây dựng một hệ thống Full-stack giải Rubik của Tình chứng tỏ tiềm năng rất lớn của bạn ấy trong ngành phần mềm.",
    name: "Giảng viên",
    designation: "Cố vấn",
    company: "Đại học",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "P.E.T",
    description:
      "Hệ thống Personal Electronic Trainer giúp nhận diện lỗi sai khi tập thể dục tại nhà kết hợp tính năng nuôi pet ảo nhằm tạo động lực cho người dùng.",
    tags: [
      {
        name: "java_springboot",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: pet,
    sourceCodeLink: "https://github.com/jBoy2m5/P.E.T-Personal-Electronic-Trainer",
  },
  {
    name: "Co-che",
    description:
      "Nền tảng web thông minh giúp gợi ý thực đơn và các công thức nấu ăn dựa trên những nguyên liệu có sẵn mà người dùng đang sở hữu.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/FPTU-JS/Team4",
  },
  {
    name: "Solve Rubik",
    description:
      "Ứng dụng Full-stack mô phỏng và cung cấp thuật toán giải khối Rubik, được xây dựng độc lập với giao diện trực quan và logic máy chủ tối ưu.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/tinhBa180906/SolveRubikCube",
  },
];

export { services, technologies, experiences, testimonials, projects };
