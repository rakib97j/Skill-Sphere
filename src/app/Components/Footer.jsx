import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-4xl  font-semibold text-white mb-4">
              Skill<span className="text-primary">Sphere</span>{" "}
            </h3>
            <div className="space-y-2 text-sm">
              <p>Email: support@skillsphere.com</p>
              <p>Phone: +880 1234-567890</p>
              <p>Location: Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">
              Social Links
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-primary transition flex items-center gap-1"
              >
                <FaFacebook />
                Facebook
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-primary transition flex items-center gap-1"
              >
                <FaLinkedinIn />
                LinkedIn
              </Link>

              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-primary transition flex items-center gap-1"
              >
                <FaGithub /> GitHub
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-2">Legal</h3>

            <div className="flex flex-col gap-2 text-sm">
              <Link href="#" className="hover:text-primary transition">
                Terms & Conditions
              </Link>

              <Link href="#" className="hover:text-primary transition">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} SkillSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
