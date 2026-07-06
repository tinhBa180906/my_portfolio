type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Khuất Bá Tình — Portfolio",
    fullName: "Khuất Bá Tình",
    email: "khuatbatinh18092006@gmail.com",
  },
  hero: {
    name: "Khuất Bá Tình",
    p: ["Xây dựng các giải pháp phần mềm tối ưu,", "và mang lại lợi ích cho xã hội"],
  },
  contact: {
    p: "Liên hệ",
    h2: "Liên hệ với tôi.",
    form: {
      name: {
        span: "Tên của bạn",
        placeholder: "Nhập tên của bạn",
      },
      email: { span: "Email của bạn", placeholder: "Nhập email của bạn" },
      message: {
        span: "Tin nhắn",
        placeholder: "Bạn muốn nói gì với tôi?",
      },
    },
  },
  sections: {
    about: {
      p: "Giới thiệu",
      h2: "Về tôi.",
      content: `Tôi là một sinh viên chuyên ngành Kỹ thuật phần mềm với đam mê mãnh liệt trong việc phát triển ứng dụng web và di động. Tôi có nền tảng vững chắc về Java (Spring Boot), C++ và hệ sinh thái JavaScript (MERN Stack). Luôn khao khát tìm kiếm cơ hội áp dụng kiến thức vào thực tế, tôi mong muốn tạo ra những giải pháp phần mềm hiệu quả để giải quyết các bài toán hàng ngày và mang lại giá trị thiết thực cho xã hội.`,
    },
    experience: {
      p: "Hành trình phát triển",
      h2: "Kinh nghiệm & Học vấn.",
    },
    feedbacks: {
      p: "Đánh giá",
      h2: "Nhận xét.",
    },
    works: {
      p: "Sản phẩm của tôi",
      h2: "Dự án tiêu biểu.",
      content: `Các dự án dưới đây là minh chứng rõ nét cho năng lực và sự tâm huyết của tôi trong lĩnh vực phát triển phần mềm. Mỗi dự án đều mô tả chi tiết vai trò, công nghệ sử dụng và đính kèm liên kết mã nguồn, thể hiện khả năng giải quyết các vấn đề phức tạp, thiết kế hệ thống và xây dựng sản phẩm hoàn chỉnh từ Frontend đến Backend.`,
    },
  },
};
