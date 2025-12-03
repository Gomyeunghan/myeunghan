import S from "./footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className={S.container}>
      <div className={S.content}>
        <div className={S.message}>함께 성장할 기회를 갖고싶습니다.</div>

        <div className={S.divider} />

        <div className={S.links}>
          <a
            href="https://github.com/Gomyeunghan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://velog.io/@rhaudgks12/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiVelog />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rhaudgks04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
        </div>

        <div className={S.divider} />

        <div className={S.copyright}>
          © 2024 Light_Han · Frontend Developer
          <br />
          Built with Next.js & TypeScript
        </div>
      </div>
    </footer>
  );
}
