export default function Page() {
  return (
    <article className="flex flex-col gap-10  p-[1.5cm]">
      <header className="leading-tight">
        <h2 className="text-gray-500">To:</h2>
        <p className="font-bold text-xl">John Smith</p>
        <p className="text-md">CTO</p>
        <p className="text-md">Acme co</p>
      </header>

      <main className="flex flex-col gap-4">
        <p>Dear Ms. Smith</p>

        <p>
          I am writing to apply for the position of Full Stack Engineer at Acme,
          as advertised on LinkedIn.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>

        <p>I am looking forward to hearing from you soon.</p>

        <p>Thank you for your time.</p>
      </main>

      <footer className="leading-snug">
        <p className="text-md">Best regards,</p>
        <p className="text-md">Rafael Ricardo Vieceli</p>
      </footer>
    </article>
  );
}
