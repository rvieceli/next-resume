import classNames from "classnames";

export function PageContainer({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      id="page-container"
      className={classNames(
        "bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] my-10 mx-auto",
        "w-[210mm] h-[297mm] print:w-screen print:h-screen",
        "print:m-0 print:drop-shadow-none print:filter-none",
        className,
      )}
      {...props}
    />
  );
}
