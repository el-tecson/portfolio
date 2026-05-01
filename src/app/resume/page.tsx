import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import fs from "fs/promises"
import path from "path"
import Link from "@/components/ui/link"
import CVCard from "@/components/ui/cv-card"

export default async function Resume() {
  const filePath = path.join(process.cwd(), "public", "/docs/quick-profile.md")
  const readmeContent = await fs.readFile(filePath, "utf-8")
  const resumeFilePath = path.join(process.cwd(), "public", "/docs/resume.md")
  const resumeContent = await fs.readFile(resumeFilePath, "utf-8")
  return (
    <main className="flex flex-col gap-[50px] justify-start bg-bg min-h-screen px-mobile-scr-mg-x py-25 pt-35 sm:px-scr-mg-x">
      <h1 className="text-2xl text-txt font-bold">Resume</h1>
      <CVCard
        title="Quick Profile"
        isHome={false}
        className="w-full px-4 py-8 rounded-2xl bg-overlay shadow-sm flex flex-col sm:max-w-[800px] sm:px-10 sm:rounded-4xl self-center"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h3: ({ children }) => (
              <h3 className="text-base font-normal text-txt text-xl">{children}</h3>
            ),
            a: ({ children, href }) => (
              <Link
                target="_blank"
                className="underline decoration-1.5 underline-offset-2"
                href={href as string}
              >
                {children}
              </Link>
            ),
          }}
        >
          {readmeContent}
        </ReactMarkdown>
      </CVCard>
      <section
        className="px-4 py-8 rounded-2xl bg-overlay shadow-sm flex flex-col sm:max-w-[800px] sm:px-10 sm:rounded-4xl self-center"
        id="resume"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-xl font-bold text-txt mt-12 mb-1">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base font-bold text-txt normal-case mt-6">{children}</h3>
            ),
            strong: ({ children }) => <strong className="mb-2">{children}</strong>,
            p: ({ children }) => (
              <p className="text-base text-txt/80 normal-case tracking-normal leading-relaxed mb-2">
                {children}
              </p>
            ),
            a: ({ children, href }) => (
              <Link
                target="_blank"
                className="underline decoration-1.5 underline-offset-2"
                href={href as string}
              >
                {children}
              </Link>
            ),
            ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
            li: ({ children }) => (
              <li className="text-base text-txt/80 normal-case tracking-normal leading-relaxed">
                {children}
              </li>
            ),
            table: ({ children }) => (
              <div className="w-full overflow-x-auto my-6">
                <table className="w-full border-collapse border border-txt/10 text-left">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => <thead className="bg-accent/5">{children}</thead>,
            tbody: ({ children }) => <tbody>{children}</tbody>,
            tr: ({ children }) => (
              <tr className="border-b border-txt/10 hover:bg-txt/3 transition-colors">
                {children}
              </tr>
            ),
            th: ({ children }) => (
              <th
                className="
                          px-4 py-3
                          font-semibold
                          text-sm uppercase tracking-wider
                          text-txt
                      "
              >
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td
                className="
                          px-4 py-3
                          text-sm text-txt/80
                          align-top
                      "
              >
                {children}
              </td>
            ),
          }}
        >
          {resumeContent}
        </ReactMarkdown>
        <Link href="/contact" className="self-center mt-20 mb-10">
          <button
            className={`
                  flex flex-row gap-1 px-6 py-3 rounded-full border
                  border-accent hover:opacity-90
                  justify-center items-center cursor-pointer sm:px-3.75 sm:py-1.875
                  hover:transform-[scale(1.01)_translateY(-2px)] transition duration-200
              `}
          >
            <p
              className={`
                      text-2xl font-sans tracking-wider uppercase font-bold
                      text-accent sm:text-2xl
                  `}
            >
              Contact Me
            </p>
          </button>
        </Link>
      </section>
    </main>
  )
}
