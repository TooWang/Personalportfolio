import { Mail, Facebook, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="mb-8">Get In Touch</h2>
      <p className="text-gray-600 mb-8">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://www.facebook.com/NotTooWang/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all flex items-center justify-center"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href="https://discordapp.com/users/725907660112658492"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5" />
        </a>
        <a
          href="mailto:toowangak@gmail.com"
          className="w-12 h-12 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all flex items-center justify-center"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}