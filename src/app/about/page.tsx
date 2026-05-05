import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import fs from "fs/promises"
import path from "path"
import Link from "@/components/ui/link"
import AccentText from "@/components/Navbar/AccentText"

export default async function About() {
  const filePath = path.join(process.cwd(), "public", "/docs/about.md")
  const readmeContent = await fs.readFile(filePath, "utf-8")
  const pfpImage = "/images/pfp.jpg"
  return (
    <main className="flex flex-col gap-[50px] justify-start bg-bg min-h-screen px-mobile-scr-mg-x py-25 pt-35 sm:px-scr-mg-x">
      <h1 className="text-2xl text-txt font-bold">About</h1>
      <section
        className="px-4 py-8 rounded-2xl bg-overlay shadow-sm flex flex-col sm:max-w-[800px] sm:px-10 sm:rounded-4xl self-center"
        id="about-view"
      >
        <div className="flex flex-col items-center self-center gap-4 sm:gap-8 mb-5">
          <img className="rounded-full" src={pfpImage} alt="Profile" height={300} width={300} />
          <h2 className="text-2xl font-black text-txt">
            <AccentText fading={true}>E</AccentText>mmanuel <AccentText fading={true}>L</AccentText>
            eu <AccentText fading={true}>Tecson</AccentText>
          </h2>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-xl font-bold text-txt mt-12 mb-1">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-base font-bold text-txt normal-case">{children}</h3>
            ),
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
          {readmeContent}
        </ReactMarkdown>
        <Link href="/projects" className="self-center mt-12">
          <button
            className={`
                    flex flex-row gap-1 px-6 py-3 rounded-full border
                    border-accent hover:opacity-90 active:opacity-90
                    justify-center items-center cursor-pointer sm:px-3.75 sm:py-1.875
                    hover:transform-[scale(1.01)_translateY(-2px)] active:transform-[scale(1.01)_translateY(-2px)] transition duration-200
                `}
          >
            <p
              className={`
                        text-2xl font-sans tracking-wider uppercase font-bold
                        text-accent sm:text-2xl
                    `}
            >
              See My Works
            </p>
          </button>
        </Link>
      </section>
    </main>
  )
}
