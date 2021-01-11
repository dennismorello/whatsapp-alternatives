import Image from "next/image";

const AppShortcut = ({ appName, iconUrl }) => (
  <div className="flex flex-col transition hover:text-blue-600">
    <div className="w-40 h-40 overflow-hidden transition-shadow shadow hover:shadow-md rounded-3xl">
      <Image alt={`${appName} icon`} src={iconUrl} width={160} height={160} />
    </div>
    <div className="mt-2 font-bold text-center">{appName}</div>
  </div>
);

export default AppShortcut;
