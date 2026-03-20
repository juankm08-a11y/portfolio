export default function Footer() {
  return (
    <footer className="mt-20 border-t border-muted bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <div className="text-text-secondary text-center md:text-left">
          <p className="mt-1">Software Engineer - Pasto, Colombia</p>
        </div>

        <div className="flex gap-6 text-text-secondary">
          <a
            href="malito:juancarlospabon01@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/juankm08-a11y"
            target="_blank"
            className="hover:text-primary transition-colors"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
