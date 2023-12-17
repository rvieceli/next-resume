import Image from "next/image";

export function Avatar() {
  return (
    <div className="w-[60%] aspect-square rounded-full bg-white outline outline-white outline-2 overflow-hidden">
      <Image
        className="rounded-full aspect-square object-cover"
        src="/avatar.jpg"
        alt="avatar"
        width={150}
        height={150}
      />
    </div>
  );
}
